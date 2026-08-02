import { Link } from "react-router-dom";

export default function Typography1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 練習1 フォントサイズ（Font Size）
      </h1>

      <p>Font Size は、文字の大きさを指定する</p>
      <div className="border-2 border-blue-500 bg-blue-200 p-4">
        <p className="text-xs">12px 注釈・補足 Tailwind CSS (text-xs)</p>
        <p className="text-sm">14px 少し小さい本文 Tailwind CSS (text-sm)</p>
        <p className="text-base">
          16px 通常の本文（デフォルト） Tailwind CSS (text-base)
        </p>
        <p className="text-lg">18px 少し強調した本文 Tailwind CSS (text-lg)</p>
        <p className="text-xl">20px 小見出し Tailwind CSS (text-xl)</p>
        <p className="text-2xl">24px 中見出し Tailwind CSS (text-2xl)</p>
        <p className="text-3xl">30px ページタイトル Tailwind CSS (text-3xl)</p>
        <p className="text-4xl">36px 大見出し Tailwind CSS (text-4xl)</p>
        <p className="text-5xl">
          48px ヒーローセクション Tailwind CSS (text-5xl)
        </p>
      </div>
    </div>
  );
}
