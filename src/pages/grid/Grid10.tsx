import { Link } from "react-router-dom";

export default function Grid10() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習10 Grid内で中央揃え (place-items-*)
      </h1>
      <p>要素が各セルの中央へ配置 (place-items-center)</p>
      <div className="grid grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>
        要素が各セルの中央へ配置 (place-items-center)、セルの高さ200px
        (auto-rows-[200px])
      </p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>
        要素が各セルの左上へ配置 (place-items-start)、セルの高さ200px
        (auto-rows-[200px])
      </p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-start gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>
        要素が各セルの右下へ配置 (place-items-end)、セルの高さ200px
        (auto-rows-[200px])
      </p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-end gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>
        要素がセルいっぱいに広がります (place-items-stretch)、セルの高さ200px
        (auto-rows-[200px]) ※要素サイズ指定せず
      </p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-stretch gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300">A</div>
        <div className="bg-red-300">B</div>
        <div className="bg-green-300">C</div>
        <div className="bg-yellow-300">D</div>
        <div className="bg-purple-300">E</div>
        <div className="bg-pink-300">F</div>
      </div>
    </div>
  );
}
