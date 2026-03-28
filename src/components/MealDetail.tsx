"use client";

import { useState, useCallback } from "react";
import type { MealDetail as MealDetailType } from "@/types/meal";
import NutritionInfo from "./NutritionInfo";
import StepList from "./StepList";
import Toast from "./Toast";
import { saveMeal } from "@/lib/mealService";

interface MealDetailProps {
  meal: MealDetailType;
}

export default function MealDetail({ meal }: MealDetailProps) {
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    visible: boolean;
  }>({ message: "", type: "success", visible: false });

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveMeal({
        name: meal.name,
        tags: meal.tags,
        cookingTime: meal.cookingTime,
        rating: null,
      });
      setToast({
        message: "献立を保存しました！",
        type: "success",
        visible: true,
      });
    } catch (err) {
      console.error("保存エラー:", err);
      setToast({
        message: "保存に失敗しました",
        type: "error",
        visible: true,
      });
    } finally {
      setSaving(false);
    }
  };

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="space-y-6 pb-28">
      {/* 画像エリア */}
      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-amber-100 to-orange-50">
        <span className="text-6xl">🍽️</span>
      </div>

      <div className="space-y-6 px-5">
        {/* タイトル & タグ */}
        <div>
          <h1 className="text-2xl font-bold text-stone-800">{meal.name}</h1>
          <div className="mt-2 flex gap-2">
            {meal.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-500">
              ⏱ {meal.cookingTime}
            </span>
          </div>
        </div>

        {/* 相棒コメント（吹き出し） */}
        <div className="relative rounded-2xl bg-amber-50 px-4 py-3">
          <div className="absolute -top-2 left-4 h-4 w-4 rotate-45 bg-amber-50" />
          <p className="text-sm leading-relaxed text-stone-700">
            💬 {meal.partnerComment}
          </p>
        </div>

        {/* 栄養情報 */}
        <NutritionInfo nutrition={meal.nutrition} />

        {/* 材料 */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-stone-800">材料</h3>
          <div className="rounded-xl bg-stone-50 p-4">
            {meal.ingredients.map((ing, i) => (
              <div
                key={i}
                className={`flex justify-between py-2 text-sm ${
                  i < meal.ingredients.length - 1
                    ? "border-b border-stone-200"
                    : ""
                }`}
              >
                <span className="text-stone-700">{ing.name}</span>
                <span className="text-stone-500">{ing.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 作り方 */}
        <StepList steps={meal.steps} />

        {/* 副菜提案 */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-stone-800">
            おすすめ副菜
          </h3>
          <div className="space-y-2">
            {meal.sideDishes.map((side, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-200 bg-white px-4 py-3"
              >
                <p className="text-sm font-medium text-stone-800">
                  {side.name}
                </p>
                <p className="text-xs text-stone-500">{side.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 固定フッターボタン */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 px-5 py-4 backdrop-blur-sm">
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full rounded-2xl bg-amber-700 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-amber-800 active:scale-[0.98] disabled:opacity-50"
        >
          {saving ? "保存中..." : "これにする！"}
        </button>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={closeToast}
      />
    </div>
  );
}
