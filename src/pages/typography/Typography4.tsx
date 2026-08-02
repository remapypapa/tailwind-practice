import { Link } from "react-router-dom";

export default function Typography4() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 行揃え（Text Alignment）
      </h1>

      <p>左揃え (デフォルト)</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-left">Tailwind CSS (text-left)</p>
      </div>

      <p>右揃え</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-right">Tailwind CSS (text-left)</p>
      </div>

      <p>中央揃え</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-center">Tailwind CSS (text-left)</p>
      </div>

      <p>両端揃え</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-justify">
          Tailwind CSS (text-justify) Tailwind CSS (text-justify) Tailwind CSS
          (text-justify) Tailwind CSS (text-justify) Tailwind CSS (text-justify)
          Tailwind CSS (text-justify)
        </p>
      </div>
    </div>
  );
}
