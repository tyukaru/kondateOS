"use client";

import { useState } from "react";
import type { MealHistory } from "@/types/meal";
import { updateMealRating } from "@/lib/mealService";

interface HistoryCardProps {
  meal: MealHistory;
}

/** Firestore Timestamp → YYYY/MM/DD */
function formatDate(ts: any): string {
  if (!ts) return "日付不明";
  // Firestore Timestamp の場合
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}

export default function HistoryCard({ meal }: HistoryCardProps) {
  const [rating, setRating] = useState<number | null>(meal.rating);
  const [saving, setSaving] = useState(false);

  const handleRate = async (star: number) => {
    if (saving) return;
    setSaving(true);
    try {
      await updateMealRating(meal.id, star);
      setRating(star);
    } catch (err) {
      console.error("評価の更新に失敗:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleReuse = () => {
    console.log("もう一回作る:", meal.name, meal.id);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      {/* ヘッダー行：料理名 + 日付 */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold text-stone-800">{meal.name}</h3>
        <span className="shrink-0 text-xs text-stone-400">
          {formatDate(meal.createdAt)}
        </span>
      </div>

      {/* タグ + 調理時間 */}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {meal.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800"
          >
            {tag}
          </span>
        ))}
        <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-500">
          ⏱ {meal.cookingTime}
        </span>
      </div>

      {/* 評価 ★ */}
      <div className="mt-4 flex items-center gap-1">
        <span className="mr-1 text-xs text-stone-500">評価:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            disabled={saving}
            className={`text-xl transition-transform active:scale-125 ${
              rating !== null && star <= rating
                ? "text-amber-400"
                : "text-stone-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {/* もう一回作るボタン */}
      <button
        onClick={handleReuse}
        className="mt-4 w-full rounded-xl border-2 border-amber-700 py-2.5 text-sm font-bold text-amber-700 transition-colors hover:bg-amber-50 active:bg-amber-100"
      >
        もう一回作る
      </button>
    </div>
  );
}
