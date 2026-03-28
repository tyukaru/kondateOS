import type { Nutrition } from "@/types/meal";

interface NutritionInfoProps {
  nutrition: Nutrition;
}

export default function NutritionInfo({ nutrition }: NutritionInfoProps) {
  const items = [
    { label: "カロリー", value: `${nutrition.calories}`, unit: "kcal", color: "bg-orange-100 text-orange-800" },
    { label: "タンパク質", value: `${nutrition.protein}`, unit: "g", color: "bg-red-100 text-red-800" },
    { label: "脂質", value: `${nutrition.fat}`, unit: "g", color: "bg-yellow-100 text-yellow-800" },
    { label: "炭水化物", value: `${nutrition.carbs}`, unit: "g", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className={`flex flex-col items-center rounded-xl px-2 py-3 ${item.color}`}
        >
          <span className="text-[10px] font-medium opacity-80">
            {item.label}
          </span>
          <span className="text-lg font-bold leading-tight">{item.value}</span>
          <span className="text-[10px] opacity-60">{item.unit}</span>
        </div>
      ))}
    </div>
  );
}
