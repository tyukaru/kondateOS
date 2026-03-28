"use client";

interface TimeSelectorProps {
  value: string;
  onChange: (time: string) => void;
}

const times = [
  { id: "10", label: "10分", desc: "超スピード" },
  { id: "20", label: "20分", desc: "さくっと" },
  { id: "30", label: "30分", desc: "じっくり" },
  { id: "60", label: "60分〜", desc: "本格派" },
];

export default function TimeSelector({ value, onChange }: TimeSelectorProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-stone-800">調理時間</h2>
      <div className="flex gap-2">
        {times.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`flex-1 rounded-xl border-2 px-2 py-3 text-center transition-all ${
              value === t.id
                ? "border-amber-700 bg-amber-50 shadow-md"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
          >
            <div className="text-sm font-medium text-stone-800">{t.label}</div>
            <div className="text-[10px] text-stone-500">{t.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
