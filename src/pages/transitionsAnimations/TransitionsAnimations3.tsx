import { Link } from "react-router-dom";

export default function TransitionsAnimations3() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transitions & Animations 練習3 Ease
      </h1>

      <p>アニメーションの「速さの変化」を指定する</p>
      <p>
        前回の `duration-*` は **何秒かかるか** でした。 今回は
        **どういう速度で動くか** です
      </p>
      <p>duration-300 だけでは動き方は決まらない</p>
      <p>ease-* を追加する</p>

      <p className="pt-4">ease-linear</p>
      <p>最初から最後まで同じ速度</p>

      <p className="pt-4">ease-in</p>
      <p>最初ゆっくり、最後速い</p>

      <p className="pt-4">ease-out</p>
      <p>最初速い、最後ゆっくり</p>

      <p className="pt-4">ease-in-out </p>
      <p>最初ゆっくり、途中はやい、最後ゆっくり</p>

      <p className="pt-4">実務で最もよく使う組み合わせ</p>
      <p>
        (h-10 w-20 rounded bg-blue-400 transition-colors duration-300 ease-out
        hover:bg-blue-600)
      </p>
      <button className="h-10 w-20 rounded bg-blue-400 transition-colors duration-300 ease-out hover:bg-blue-600">
        ボタン
      </button>
      <p>拡大・縮小を行う場合</p>
      <p>
        (h-10 w-20 rounded bg-blue-400 transition-transform duration-300
        ease-out hover:scale-105)
      </p>
      <button className="h-10 w-20 rounded bg-blue-400 transition-transform duration-300 ease-out hover:scale-105">
        ボタン
      </button>
    </div>
  );
}
