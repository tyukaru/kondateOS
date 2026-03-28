"use client";

interface ModeSelectorProps {
  value: string;
  onChange: (mode: string) => void;
}

const modes = [
  { id: "easy", label: "かんたん", emoji: "🍳", desc: "最小限の手順で" },
  { id: "normal", label: "ふつう", emoji: "🥘", desc: "いつもの料理" },
  { id: "special", label: "こだわり", emoji: "👨‍🍳", desc: "ちょっと本格的に" },
];

export default function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-stone-800">
        今日の料理モード
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => onChange(mode.id)}
            className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 px-3 py-4 transition-all ${
              value === mode.id
                ? "border-amber-700 bg-amber-50 shadow-md"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
          >
            <span className="text-2xl">{mode.emoji}</span>
            <span className="text-sm font-medium text-stone-800">
              {mode.label}
            </span>
            <span className="text-[11px] text-stone-500">{mode.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
