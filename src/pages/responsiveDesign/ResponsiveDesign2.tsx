import { Link } from "react-router-dom";

export default function Transforms1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Responsive Design 練習2 Responsive Grid / Flex
      </h1>
      <p>画面サイズに応じてレイアウトを切り替えられるようになる</p>
      <p className="pt-4">例: grid grid-cols-3 gap-4</p>
      <p>
        これは常に、3列のグリッドになる →
        スマホなどでは文字が小さくなり使いづらい
      </p>

      <p className="pt-4">レスポンシブ対応</p>
      <p>例: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4</p>
      <p>
        このようにすることで、スマホでは1列、タブレットでは2列、PCでは３列表記になる
      </p>
      <div className="grid grid-cols-1 gap-4 bg-gray-300 p-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded bg-blue-300 p-4">1</div>
        <div className="rounded bg-blue-300 p-4">2</div>
        <div className="rounded bg-blue-300 p-4">3</div>
        <div className="rounded bg-blue-300 p-4">4</div>
        <div className="rounded bg-blue-300 p-4">5</div>
        <div className="rounded bg-blue-300 p-4">6</div>
      </div>

      <p className="pt-4">Flaxも同じ</p>
      <p>例: flex gap-4</p>
      <p>常に横並び</p>

      <p className="pt-4">例: flex flex-col gap-4 md:flex-row</p>
      <p>・スマホでは、flex-col、つまり縦並び</p>
      <p>・PCでは、flex-row、つまり横並び</p>

      <div className="flex flex-col gap-4 bg-gray-300 p-2 md:flex-row">
        <div className="rounded bg-green-300 p-4">A</div>
        <div className="rounded bg-green-300 p-4">B</div>
        <div className="rounded bg-green-300 p-4">C</div>
      </div>

      <p className="pt-4">幅も変えられる</p>
      <p>例： w-full md:w-1/2 lg:w-1/3</p>
      <p>・スマホでは、w-full、つまり100%</p>
      <p>・タブレットでは、w-1/2、つまり50%</p>
      <p>・PCでは、w-1/3、つまり33%</p>

      <p className="pt-4">Paddingも変えられる</p>
      <p>例： p-4 md:p-8</p>
      <p>・スマホでは、p-4、つまり1rem=16px</p>
      <p>・タブレットでは、p-8、つまり2rem=32px</p>

      <p className="pt-4">文字サイズも変えられる</p>
      <p>例： text-2xl md:text-4xl lg:text-5xl</p>
      <p>・スマホでは、text-2xl、つまり24px</p>
      <p>・タブレットでは、text-4xl、つまり36px</p>
      <p>・PCでは、text-5xl、つまり48px</p>

      <p className="pt-4">実務で最も多いGrid</p>
      <p>(grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3)</p>

      <p className="pt-4">実務で最も多いFlex</p>
      <p>(flex flex-col gap-4 md:flex-row)</p>
    </div>
  );
}
