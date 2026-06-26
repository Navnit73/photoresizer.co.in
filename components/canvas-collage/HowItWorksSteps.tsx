import React from 'react';

interface Step {
  title: string;
  desc: string;
}

export default function HowItWorksSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-8 mb-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How it works</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-accent-main dark:text-blue-400 font-bold flex items-center justify-center mb-3">
              {i + 1}
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{step.title}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
