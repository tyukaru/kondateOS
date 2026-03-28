"use client";

import { useEffect, useState } from "react";
import type { MealHistory } from "@/types/meal";
import { getMeals } from "@/lib/mealService";
import HistoryCard from "./HistoryCard";

export default function HistoryList() {
  const [meals, setMeals] = useState<MealHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMeals();
        setMeals(data);
      } catch (err) {
        console.error("履歴の取得に失敗:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ローディング */
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3 py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-200 border-t-amber-600" />
        <p className="text-sm text-stone-500">読み込み中...</p>
      </div>
    );
  }

  /* データなし */
  if (meals.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <span className="text-5xl">🍳</span>
        <p className="text-base leading-relaxed text-stone-500">
          まだ料理してないね、
          <br />
          何か作ってみよう！
        </p>
      </div>
    );
  }

  /* 一覧表示 */
  return (
    <div className="space-y-4">
      {meals.map((meal) => (
        <HistoryCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
