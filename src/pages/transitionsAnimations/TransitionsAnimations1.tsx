import { Link } from "react-router-dom";

export default function TransitionsAnimations1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transitions & Animations 練習1 Transition
      </h1>

      <p className="pt-4">transition</p>
      <p>スタイルが変化するときに、滑らかにアニメーションするようにする</p>
      <p>例：ボタンにカーソルが乗った時に、青から濃い青に変化させる</p>
      <p>Transition がないと、青 →(一瞬)→ 濃い青</p>
      <p>Transition があると、青 →(ゆっくり)→ 濃い青</p>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-white transition duration-300
        hover:bg-blue-600)
      </p>
      <p>
        transition: 以下の場合、bg-blue-500 → hover:bg-blue-600 へ色を変化させる
      </p>
      <p>duration-300: 300ms（0.3秒）かけて変化する</p>

      <button className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600">
        ボタン
      </button>

      <p className="pt-4">transition-colors</p>
      <p>・色だけアニメーションする</p>
      <p>・hover:bg-red-500</p>
      <p>・hover:text-white</p>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-black transition duration-300
        hover:bg-red-500 hover:text-white)
      </p>
      <button className="rounded bg-blue-500 px-4 py-2 text-black transition duration-300 hover:bg-red-500 hover:text-white">
        Opacity
      </button>

      <p className="pt-4">transition-opacity</p>
      <p>・透明度を50%下げるアニメーションする</p>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-white transition-opacity
        duration-300 hover:opacity-50)
      </p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-opacity duration-300 hover:opacity-50">
        Opacity
      </button>

      <p className="pt-4">transition-shadow</p>
      <p>・影だけアニメーションする</p>
      <p>影のサイズは以下から選択</p>
      <ul className="list-disc p-4">
        <li>shadow-sm</li>
        <li>shadow</li>
        <li>shadow-md</li>
        <li>shadow-lg</li>
        <li>shadow-xl</li>
        <li>shadow-2xl</li>
      </ul>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-white shadow transition-shadow
        duration-300 hover:shadow-xl)
      </p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white shadow transition-shadow duration-300 hover:shadow-xl">
        Shadow
      </button>
      <p>
        ounded bg-blue-500 px-4 py-2 text-white shadow-md transition-shadow
        duration-300 hover:shadow-2xl
      </p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white shadow-md transition-shadow duration-300 hover:shadow-2xl">
        Shadow
      </button>

      <p className="pt-4">transition-transform</p>
      <p>・Transform専用</p>
      <p>・hover:scale-105</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105">
        Scale
      </button>

      <p>・hover:rotate-3 ※ 3とは3度の意味</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-300 hover:rotate-3">
        Rotate
      </button>

      <p className="pt-4">transition-all</p>
      <p>
        ・必要以上に多くのプロパティがアニメーション対象になるため、実務では**必要なものだけ（transition-colors
        や transition-transform など）**を指定することが推奨されます
      </p>

      <p className="pt-4">実務でよく見る例</p>
      <p>ボタン</p>
      <button className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
        ボタン
      </button>
      <p>カード</p>
      <div className="rounded-lg border shadow transition-shadow hover:shadow-lg">
        カード
      </div>
      <p>画像</p>
      <img className="transition-transform hover:scale-105" />
    </div>
  );
}
