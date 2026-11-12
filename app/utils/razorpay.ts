/**
 * Frontend-only Razorpay checkout with a price chosen from the visitor's time zone.
 *
 * No backend: payments are created without an order, so they are not verified
 * server-side and are not auto-captured — capture them from the Razorpay Dashboard
 * (or they are refunded automatically after a few days).
 */

// The Key ID is public by design (checkout needs it in the browser). Never put the Key Secret here.
const RAZORPAY_KEY_ID = 'rzp_live_SKJWoYJgKVXRjp';

export interface Price {
  currency: string;
  /** Whole amount in the major unit, e.g. 6 = $6, 30 = ₹30. */
  amount: number;
}

const INR: Price = { currency: 'INR', amount: 30 };
const USD: Price = { currency: 'USD', amount: 6 };
const EUR: Price = { currency: 'EUR', amount: 6 };
const GBP: Price = { currency: 'GBP', amount: 5 };
const CAD: Price = { currency: 'CAD', amount: 6 };
const AUD: Price = { currency: 'AUD', amount: 9 };

/** Exact time-zone matches. Only 2-decimal currencies Razorpay supports are used. */
const PRICE_BY_TIMEZONE: Record<string, Price> = {
  'Asia/Kolkata': INR,
  'Asia/Calcutta': INR,
  'Asia/Qatar': { currency: 'QAR', amount: 22 },
  'Asia/Dubai': { currency: 'AED', amount: 22 },
  'Asia/Riyadh': { currency: 'SAR', amount: 22 },
  'Asia/Singapore': { currency: 'SGD', amount: 8 },
  'Asia/Kuala_Lumpur': { currency: 'MYR', amount: 25 },
  'Asia/Hong_Kong': { currency: 'HKD', amount: 45 },
  'Europe/London': GBP,
  'Europe/Dublin': EUR,
  'Pacific/Auckland': { currency: 'NZD', amount: 10 },
  'America/Toronto': CAD,
  'America/Vancouver': CAD,
  'America/Edmonton': CAD,
  'America/Winnipeg': CAD,
  'America/Halifax': CAD,
  'America/Regina': CAD,
  'America/St_Johns': CAD,
};

/** Fallbacks by region prefix when there is no exact match. */
const PRICE_BY_REGION: [prefix: string, price: Price][] = [
  ['Australia/', AUD],
  ['Europe/', EUR],
  ['America/', USD],
  ['US/', USD],
];

export function getPriceForVisitor(): Price {
  let tz = '';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    // Very old browser — fall through to USD.
  }
  if (PRICE_BY_TIMEZONE[tz]) return PRICE_BY_TIMEZONE[tz];
  for (const [prefix, price] of PRICE_BY_REGION) {
    if (tz.startsWith(prefix)) return price;
  }
  return USD;
}

export function formatPrice({ currency, amount }: Price): string {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

type RazorpayCtor = new (options: Record<string, unknown>) => {
  open: () => void;
  on: (event: string, cb: (res: unknown) => void) => void;
};

let scriptPromise: Promise<boolean> | null = null;

function loadCheckoutScript(): Promise<boolean> {
  const win = window as Window & { Razorpay?: RazorpayCtor };
  if (win.Razorpay) return Promise.resolve(true);
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => {
      scriptPromise = null; // allow a retry
      s.remove();
      resolve(false);
    };
    document.body.appendChild(s);
  });
  return scriptPromise;
}

/** Warm the checkout script so the popup opens instantly on click. */
export function preloadRazorpay() {
  if (typeof window !== 'undefined') void loadCheckoutScript();
}

export type PaymentOutcome =
  | { status: 'paid'; paymentId: string }
  | { status: 'dismissed' }
  | { status: 'failed'; message: string };

export async function payWithRazorpay(price: Price, description: string): Promise<PaymentOutcome> {
  if (!(await loadCheckoutScript())) {
    return { status: 'failed', message: 'Could not load the payment window. Check your connection and try again.' };
  }
  const Razorpay = (window as Window & { Razorpay?: RazorpayCtor }).Razorpay!;

  return new Promise((resolve) => {
    let settled = false;
    // Razorpay lets the user retry inside the popup after a failure, so a failure only
    // records the message; the promise settles when they pay or close the popup.
    let lastError = '';
    const finish = (outcome: PaymentOutcome) => {
      if (settled) return;
      settled = true;
      resolve(outcome);
    };

    try {
      const rzp = new Razorpay({
        key: RAZORPAY_KEY_ID,
        amount: Math.round(price.amount * 100), // smallest currency unit
        currency: price.currency,
        name: 'PhotoResizer',
        description,
        theme: { color: '#16A34A' },
        handler: (res: { razorpay_payment_id: string }) => finish({ status: 'paid', paymentId: res.razorpay_payment_id }),
        modal: {
          ondismiss: () => finish(lastError ? { status: 'failed', message: lastError } : { status: 'dismissed' }),
        },
      });
      rzp.on('payment.failed', (res) => {
        lastError = (res as { error?: { description?: string } })?.error?.description || 'Payment failed.';
      });
      rzp.open();
    } catch (err) {
      // Bad options or a broken checkout script must not leave the button stuck on "Opening payment…".
      console.error('Razorpay checkout failed to open', err);
      finish({ status: 'failed', message: 'Could not open the payment window. Please try again.' });
    }
  });
}
