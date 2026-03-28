"use client";

import type { Meal } from "@/types/meal";
import Link from "next/link";

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  return (
    <Link href={`/meals/${meal.id}`}>
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
        {/* 画像エリア（プレースホルダー） */}
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-amber-100 to-orange-50">
          <span className="text-5xl">🍽️</span>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-stone-800">{meal.name}</h3>
          <p className="mt-1 text-sm text-stone-500">{meal.description}</p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              {meal.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-stone-400">⏱ {meal.cookingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
