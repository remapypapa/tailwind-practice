import { Link } from "react-router-dom";

export default function Grid11() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習11 Grid全体の配置 place-content-*
      </h1>
      <p>
        効果をわかりやすくするため、親コンテナを拡大(h-[600px]
        )、Gridのセルの高さを100px(auto-rows-[100px])固定、セル幅も100px固定
      </p>
      <p>上下中央、Grid高さは親コンテナ100% (place-content-center h-full)</p>
      <div className="h-[600px] border-2 border-black">
        <div className="grid h-full auto-rows-[100px] grid-cols-[100px_100px_100px] place-content-center gap-4">
          <div className="bg-blue-300">A</div>
          <div className="bg-red-300">B</div>
          <div className="bg-green-300">C</div>
          <div className="bg-yellow-300">D</div>
          <div className="bg-purple-300">E</div>
          <div className="bg-pink-300">F</div>
        </div>
      </div>
      <p>グリッド全体が上による (place-content-start)</p>
      <div className="h-[600px] border-2 border-black">
        <div className="grid h-full auto-rows-[100px] grid-cols-[100px_100px_100px] place-content-start gap-4">
          <div className="bg-blue-300">A</div>
          <div className="bg-red-300">B</div>
          <div className="bg-green-300">C</div>
          <div className="bg-yellow-300">D</div>
          <div className="bg-purple-300">E</div>
          <div className="bg-pink-300">F</div>
        </div>
      </div>
      <p>グリッド全体が下による (place-content-end)</p>
      <div className="h-[600px] border-2 border-black">
        <div className="grid h-full auto-rows-[100px] grid-cols-[100px_100px_100px] place-content-end gap-4">
          <div className="bg-blue-300">A</div>
          <div className="bg-red-300">B</div>
          <div className="bg-green-300">C</div>
          <div className="bg-yellow-300">D</div>
          <div className="bg-purple-300">E</div>
          <div className="bg-pink-300">F</div>
        </div>
      </div>
      <p>Gridの一番上と一番下に配置 (place-content-between)</p>
      <div className="h-[600px] border-2 border-black">
        <div className="grid h-full auto-rows-[100px] grid-cols-[100px_100px_100px] place-content-between gap-4">
          <div className="bg-blue-300">A</div>
          <div className="bg-red-300">B</div>
          <div className="bg-green-300">C</div>
          <div className="bg-yellow-300">D</div>
          <div className="bg-purple-300">E</div>
          <div className="bg-pink-300">F</div>
        </div>
      </div>
      <p>上下に均等な余白 (place-content-around)</p>
      <div className="h-[600px] border-2 border-black">
        <div className="grid h-full auto-rows-[100px] grid-cols-[100px_100px_100px] place-content-around gap-4">
          <div className="bg-blue-300">A</div>
          <div className="bg-red-300">B</div>
          <div className="bg-green-300">C</div>
          <div className="bg-yellow-300">D</div>
          <div className="bg-purple-300">E</div>
          <div className="bg-pink-300">F</div>
        </div>
      </div>
      <p>
        上下左右の余白がすべて均等(place-content-evenly) ※aroundより均等になる！
      </p>
      <div className="h-[600px] border-2 border-black">
        <div className="grid h-full auto-rows-[100px] grid-cols-[100px_100px_100px] place-content-evenly gap-4">
          <div className="bg-blue-300">A</div>
          <div className="bg-red-300">B</div>
          <div className="bg-green-300">C</div>
          <div className="bg-yellow-300">D</div>
          <div className="bg-purple-300">E</div>
          <div className="bg-pink-300">F</div>
        </div>
      </div>
      s
    </div>
  );
}
