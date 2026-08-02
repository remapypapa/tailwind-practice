import { Link } from "react-router-dom";

export default function Grid8() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習8 行をまたぐ （row-span-*）
      </h1>
      <p>通常のGrid</p>
      <div className="grid grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">A</div>
        <div className="bg-green-300 p-4">B</div>
        <div className="bg-blue-300 p-4">C</div>
        <div className="bg-yellow-300 p-4">D</div>
        <div className="bg-pink-300 p-4">E</div>
        <div className="bg-cyan-300 p-4">F</div>
      </div>

      <p>Aだけ縦長(2行使う)</p>
      <div className="grid grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="row-span-2 bg-red-300 p-4">A</div>

        <div className="bg-green-300 p-4">B</div>
        <div className="bg-blue-300 p-4">C</div>
        <div className="bg-yellow-300 p-4">D</div>
        <div className="bg-pink-300 p-4">E</div>
        <div className="bg-cyan-300 p-4">F</div>
      </div>

      <p>Aだけ縦長(3行使う)</p>
      <div className="grid grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="row-span-3 bg-red-300 p-4">A</div>

        <div className="bg-green-300 p-4">B</div>
        <div className="bg-blue-300 p-4">C</div>
        <div className="bg-yellow-300 p-4">D</div>
        <div className="bg-pink-300 p-4">E</div>
        <div className="bg-cyan-300 p-4">F</div>
        <div className="bg-lime-300 p-4">G</div>
      </div>

      <p>Aだけ縦長(2行使う) 各行の高さを80pxに固定 ※学習中はおすすめ</p>
      <div className="grid auto-rows-[80px] grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="row-span-2 bg-red-300 p-4">A</div>

        <div className="bg-green-300 p-4">B</div>
        <div className="bg-blue-300 p-4">C</div>
      </div>

      <p>レスポンシブ対応 (md:row-span-2) →スマホ1行、PC2行</p>
      <div className="grid auto-rows-[80px] grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4 md:row-span-2">A</div>

        <div className="bg-green-300 p-4">B</div>
        <div className="bg-blue-300 p-4">C</div>
      </div>

      <p>col-span と row-spanの両方を使用 (col-span-2 row-span-2)</p>
      <div className="grid grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="col-span-2 row-span-2 bg-red-300 p-4">A</div>
        <div className="bg-green-300 p-4">B</div>
        <div className="bg-blue-300 p-4">C</div>
        <div className="bg-yellow-300 p-4">D</div>
        <div className="bg-pink-300 p-4">E</div>
        <div className="bg-cyan-300 p-4">F</div>
      </div>
    </div>
  );
}
