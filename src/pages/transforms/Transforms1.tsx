import { Link } from "react-router-dom";

export default function Transforms1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transforms 練習1 Scale（拡大・縮小）
      </h1>
      <p>要素の形や位置を変える</p>
      <p>要素を拡大・縮小できるようになること</p>
      <p>
        記述法: scale-* を使う * には90, 95, 100, 105, 110 のどれかを記述、%の意
      </p>
      <p>hover と組み合わせることがほとんど</p>
      <p>hover:scale-90</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-90">
        ボタン
      </button>
      <p>hover:scale-100</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-100">
        ボタン
      </button>
      <p>hover:scale-110</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-110">
        ボタン
      </button>
      <p className="pt-4">カードでも使う</p>
      <p>
        (h-20 w-20 rounded-lg bg-gray-300 shadow transition-transform
        duration-300 hover:scale-105)
      </p>
      <div className="h-20 w-20 rounded-lg bg-gray-300 shadow transition-transform duration-300 hover:scale-105">
        カード
      </div>
      <p className="pt-4">ボタン</p>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-white transition-transform
        duration-300 hover:scale-105) ※ hoverに対応
      </p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105">
        ボタン
      </button>
      <p>active と組み合わせる</p>
      <p>押した瞬間、少し縮みます</p>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-white transition-transform
        duration-150 active:scale-95) ※active に対応、クリック時に反応
      </p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-150 active:scale-95">
        ボタン
      </button>
      <p className="pt-4">scale-105 と scale-110 の違い</p>
      <p>
        初心者は「110%の方が目立つから良さそう」と思いがちですが、実際のWebサイトでは
        scale-105 の方が圧倒的によく使われます。
      </p>
      <p className="pt-4">この組み合わせの使用頻度が高い</p>
      <p>
        (transition-transform duration-300 rounded bg-blue-500 px-4 py-2
        text-white ease-out hover:scale-105)
      </p>
      <ul className="list-disc p-4">
        <li>transition-transform</li>
        <li>duration-300</li>
        <li>ease-out</li>
        <li>hover:scale-105</li>
      </ul>
      <button className="transition-transformduration-300 rounded bg-blue-500 px-4 py-2 text-white ease-out hover:scale-105">
        ボタン
      </button>
    </div>
  );
}
