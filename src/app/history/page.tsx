import Link from "next/link";
import HistoryList from "@/components/HistoryList";

export default function HistoryPage() {
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
          料理の履歴
        </h1>
        <div className="w-9" />
      </div>

      {/* 履歴リスト */}
      <HistoryList />
    </div>
  );
}
