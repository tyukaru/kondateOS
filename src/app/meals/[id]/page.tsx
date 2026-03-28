"use client";

import { use } from "react";
import Link from "next/link";
import MealDetailComponent from "@/components/MealDetail";
import { mockMeals } from "@/lib/mockData";

export default function MealDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const meal = mockMeals.find((m) => m.id === id);

  if (!meal) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-stone-500">献立が見つかりません</p>
          <Link
            href="/meals"
            className="mt-4 inline-block text-amber-700 underline"
          >
            一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh">
      {/* 戻るボタン */}
      <div className="absolute left-4 top-4 z-10">
        <Link
          href="/meals"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-stone-600 shadow-sm backdrop-blur-sm"
        >
          ←
        </Link>
      </div>

      <MealDetailComponent meal={meal} />
    </div>
  );
}
