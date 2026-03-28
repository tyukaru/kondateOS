"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ModeSelector from "@/components/ModeSelector";
import TimeSelector from "@/components/TimeSelector";
import ShoppingSelector from "@/components/ShoppingSelector";

export default function HomePage() {
  const router = useRouter();
  const [mode, setMode] = useState("normal");
  const [time, setTime] = useState("20");
  const [shopping, setShopping] = useState("few");

  const handleSubmit = () => {
    const params = new URLSearchParams({ mode, time, shopping });
    router.push(`/meals?${params.toString()}`);
  };

  return (
    <div className="flex min-h-dvh flex-col px-5 py-8">
      {/* ヘッダー */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-stone-800">
          パーソナル献立OS
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          今日の気分にあわせて、3秒で献立を決めよう
        </p>
      </div>

      {/* 条件選択 */}
      <div className="flex-1 space-y-6">
        <ModeSelector value={mode} onChange={setMode} />
        <TimeSelector value={time} onChange={setTime} />
        <ShoppingSelector value={shopping} onChange={setShopping} />
      </div>

      {/* 提案ボタン */}
      <div className="mt-8 space-y-3 pb-4">
        <button
          onClick={handleSubmit}
          className="w-full rounded-2xl bg-amber-700 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-amber-800 active:scale-[0.98]"
        >
          献立を提案してもらう
        </button>
        <Link
          href="/history"
          className="block w-full rounded-2xl border-2 border-stone-300 py-3 text-center text-sm font-bold text-stone-600 transition-colors hover:bg-stone-50 active:bg-stone-100"
        >
          📋 料理の履歴を見る
        </Link>
      </div>
    </div>
  );
}
