import { Link } from "react-router-dom";

export default function TransitionsAnimations2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transitions & Animations 練習2 Duration
      </h1>

      <p>アニメーションの時間（速さ）を変更できるようになる</p>
      <p>
        表記：duration-* * には、75, 150, 300, 500, 750, 1000
        (数字はミリ秒の意味)
      </p>
      <p>duration-300</p>
      <button className="h-10 w-20 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
        ボタン
      </button>

      <p>duration-500</p>
      <button className="h-10 w-20 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-500 hover:bg-blue-600">
        ボタン
      </button>

      <p>duration-1000</p>
      <button className="h-10 w-20 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-1000 hover:bg-blue-600">
        ボタン
      </button>

      <p className="pt-4">Duration と Transition の関係</p>
      <p>・duration-300 だけでは何も起きない</p>
      <p>・transition、または、transition-colors と一緒に組み合わせる</p>
      <p>className="hover:bg-blue-600 transition-colors duration-300"</p>
    </div>
  );
}
