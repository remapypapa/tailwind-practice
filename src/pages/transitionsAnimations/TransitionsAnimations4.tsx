import { Link } from "react-router-dom";

export default function TransitionsAnimations4() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transitions & Animations 練習4 Animate
      </h1>

      <p>Transition と Animate の違い</p>
      <p>Transition</p>
      <p>何かがきっかけで動く</p>
      <ul className="list-disc p-4">
        <li>hover</li>
        <li>focus</li>
        <li>active</li>
      </ul>
      <button className="h-10 w-20 rounded bg-blue-400 transition-transform duration-300 hover:scale-105">
        ボタン
      </button>
      <p>マウスを乗せた時だけ動く</p>
      <p>
        (h-10 w-20 rounded bg-blue-400 transition-transform duration-300
        hover:scale-105)
      </p>

      <p className="pt-4">Animate</p>
      <p>勝手に動き続ける</p>
      <ul className="list-disc p-4">
        <li>ローディング</li>
        <li>通知</li>
        <li>「クリックしてください」のアイコン</li>
      </ul>

      <p className="pt-4">animate-none</p>
      <p>アニメーションを無効にする</p>

      <div className="h-12 w-12 animate-none rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="pt-4">animate-spin</p>
      <p>グルグル回る</p>
      <p>使用例</p>
      <ul className="list-disc p-4">
        <li>ローディング画面</li>
        <li>データ取得中</li>
        <li>保存中</li>
      </ul>

      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="pt-4">animate-ping</p>
      <p>外側へ広がるアニメーション</p>
      <div className="relative h-6 w-6 p-4">
        <div className="absolute h-6 w-6 animate-ping rounded-full bg-blue-400"></div>
        <div className="absolute h-6 w-6 rounded-full bg-blue-600"></div>
      </div>

      <p className="pt-4">使用例</p>
      <ul className="list-disc p-4">
        <li>通知</li>
        <li>現在地</li>
        <li>ライブ配信</li>
      </ul>

      <p className="pt-4">animate-pulse</p>
      <p>ゆっくり → 明るく → 暗く → 明るく を繰り返す</p>

      <div className="h-24 w-64 animate-pulse rounded bg-gray-300"></div>

      <p className="pt-4">animate-bounce</p>
      <p>上下に跳ねます</p>
      <div className="animate-bounce p-4 text-4xl">⬇</div>

      <p className="pt-4">使用例</p>
      <ul className="list-disc p-4">
        <li>下へスクロール</li>
        <li>クリックして下さい</li>
      </ul>

      <p className="pt-4">実務でよく見る例</p>
      <p>ローディング</p>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent p-4"></div>

      <p>通知</p>
      <div className="animate-ping rounded-full bg-red-500 p-4">通知</div>

      <p>Skeleton</p>
      <div className="h-24 animate-pulse rounded bg-gray-300 p-4"></div>

      <p>スクロール</p>
      <div className="animate-bounce p-4 text-3xl">↓</div>

      <p>アニメーション比較</p>
      <p>animate-spin</p>
      <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full bg-blue-500 text-white">
        ★
      </div>

      <p>animate-ping</p>
      <div className="flex h-12 w-12 animate-ping items-center justify-center rounded-full bg-blue-500 text-white">
        ★
      </div>

      <p>animate-pulse</p>
      <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-blue-500 text-white">
        ★
      </div>

      <p>animate-bounce</p>
      <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-blue-500 text-white">
        ★
      </div>
    </div>
  );
}
