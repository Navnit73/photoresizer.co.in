'use client';

import React from 'react';

export interface Template {
  id: number;
  name: string;
  slots: number;
  columns: number;
  layout?: { colSpan?: number; rowSpan?: number }[];
}

export const TEMPLATES: Template[] = [
  { id: 1, name: '4 Photos (Grid)', slots: 4, columns: 2 },
  { id: 2, name: '4 Photos (Mixed)', slots: 4, columns: 3, layout: [{ colSpan: 2, rowSpan: 2 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }] },
  { id: 3, name: '6 Photos (Hero)', slots: 6, columns: 3, layout: [{ colSpan: 2, rowSpan: 2 }] },
  { id: 4, name: '6 Photos (Grid)', slots: 6, columns: 3 },
  { id: 5, name: '7 Photos (Mixed)', slots: 7, columns: 3, layout: [{ colSpan: 2, rowSpan: 2 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, {}, {}, {}, {}] },
  { id: 6, name: '9 Photos (Grid)', slots: 9, columns: 3 },
];

interface Props {
  selectedId: number;
  onSelect: (template: Template) => void;
}

export default function TemplateGallery({ selectedId, onSelect }: Props) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
        Canvas collage templates
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {TEMPLATES.map((t) => {
          const isActive = t.id === selectedId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t)}
              aria-label={`Use ${t.name} layout`}
              aria-pressed={isActive}
              className={`group rounded-xl border-2 p-2 transition-colors ${
                isActive
                  ? 'border-accent-main bg-accent-muted dark:bg-blue-900/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-accent-hover'
              }`}
            >
              <div
                className="grid w-full aspect-square gap-0.5"
                style={{
                  gridTemplateColumns: `repeat(${t.columns}, 1fr)`,
                  gridAutoRows: '1fr',
                  gridAutoFlow: 'dense',
                }}
              >
                {Array.from({ length: t.slots }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      gridColumn: t.layout?.[i]?.colSpan ? `span ${t.layout[i].colSpan}` : undefined,
                      gridRow: t.layout?.[i]?.rowSpan ? `span ${t.layout[i].rowSpan}` : undefined,
                    }}
                    className={`rounded-sm ${
                      isActive ? 'bg-accent-main' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-2">
                {t.name}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}