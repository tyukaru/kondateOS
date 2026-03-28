"use client";

interface ShoppingSelectorProps {
  value: string;
  onChange: (shopping: string) => void;
}

const options = [
  { id: "none", label: "買い物なし", emoji: "🏠", desc: "家にあるもので" },
  { id: "few", label: "ちょい足し", emoji: "🛒", desc: "1〜2品だけ買う" },
  { id: "ok", label: "買い物OK", emoji: "🛍️", desc: "なんでもOK" },
];

export default function ShoppingSelector({
  value,
  onChange,
}: ShoppingSelectorProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-stone-800">買い物</h2>
      <div className="grid grid-cols-3 gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 px-3 py-4 transition-all ${
              value === opt.id
                ? "border-amber-700 bg-amber-50 shadow-md"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
          >
            <span className="text-2xl">{opt.emoji}</span>
            <span className="text-sm font-medium text-stone-800">
              {opt.label}
            </span>
            <span className="text-[11px] text-stone-500">{opt.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
