import { Link } from "react-router-dom";

export default function Typography2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 練習2 文字の太さ（Font Weight）
      </h1>

      <p>Font Size は、文字の大きさを指定する</p>
      <div className="border-2 border-blue-500 bg-blue-200 p-4">
        <p className="font-thin">Tailwind CSS (font-thin)</p>
        <p className="font-extralight">Tailwind CSS (font-extralight)</p>
        <p className="font-light">Tailwind CSS (font-light)</p>
        <p className="font-normal">Tailwind CSS (font-normal)</p>
        <p className="font-medium">Tailwind CSS (font-medium)</p>
        <p className="font-semibold">Tailwind CSS (font-semibold)</p>
        <p className="font-bold">Tailwind CSS (font-bold)</p>
        <p className="font-extrabold">Tailwind CSS (font-extrabold)</p>
        <p className="font-black">Tailwind CSS (font-black)</p>
      </div>

      <p>組み合わせる(フォントサイズ + Weight)</p>
      <div className="border-2 border-blue-500 bg-blue-200 p-4">
        <p className="text-4xl font-bold">
          ページタイトル (text-4xl font-bold)
        </p>
        <p className="text-2xl font-semibold">
          セクションタイトル (text-2xl font-semibold)
        </p>
        <p className="text-base font-normal">本文 (text-base font-normal)</p>
        <p className="text-sm font-light">補足説明 (text-sm font-light)</p>
      </div>

      <p>実務でよく見る組み合わせ</p>
      <div className="border-2 border-blue-500 bg-blue-200 p-4">
        <p className="text-3xl font-bold">
          ページタイトル (text-3xl font-bold)
        </p>
        <p className="text-2xl font-bold">記事タイトル (text-2xl font-bold)</p>
        <p className="text-xl font-semibold">
          カードタイトル (text-xl font-semibold)
        </p>
        <p className="text-base font-normal">本文 (text-base font-normal)</p>
        <p className="text-sm font-light">補足・注釈 (text-sm font-light)</p>
        <p className="text-base font-medium">ボタン (text-base font-medium</p>
        <p>または</p>
        <p className="text-base font-bold">ボタン (text-base font-bold</p>
        <p>mediumとbold の中間が semibold</p>
        <p>
          強調したいけれど、font-bold
          ほど主張させたくない」という場面にちょうど良い太さ
        </p>
        <p className="text-base font-semibold">
          ボタン (text-base font-semibold
        </p>
      </div>
    </div>
  );
}
