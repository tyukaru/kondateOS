"use client";

import { Suspense } from "react";
import Link from "next/link";
import MealCard from "@/components/MealCard";
import { mockMeals } from "@/lib/mockData";

function MealList() {
  // TODO: 将来的には useSearchParams() でフィルタ条件を取得し AI API を呼ぶ
  const meals = mockMeals;

  return (
    <div className="space-y-4">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default function MealsPage() {
  return (
    <div className="min-h-dvh px-5 py-6">
      {/* ヘッダー */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-stone-600 shadow-sm"
        >
          ←
        </Link>
        <h1 className="text-lg font-bold text-stone-800">
          今日の献立候補
        </h1>
        <div className="w-9" />
      </div>

      <p className="mb-4 text-center text-sm text-stone-500">
        あなたにぴったりの3品を選びました
      </p>

      <Suspense fallback={<div className="text-center text-stone-400">読み込み中...</div>}>
        <MealList />
      </Suspense>
    </div>
  );
}
