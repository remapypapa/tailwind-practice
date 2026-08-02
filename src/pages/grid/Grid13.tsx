import { Link } from "react-router-dom";

export default function Grid13() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習13 特定のアイテムだけ配置を変更する[セル内の横方向と縦方向]
        (justify-self-* と self-*)
      </h1>
      <p>まず全員を中央に配置</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Bだけ右寄せ(justify-self-end)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 justify-self-end bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aだけ左寄せ(justify-self-start)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 justify-self-start bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aだけ中央へ移動(justify-self-center)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 justify-self-center bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aだけ上寄せ (self-start)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 self-start bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aだけ中央 (self-center)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 self-center bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aだけ下寄せ (self-end)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 self-end bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>組み合わせる</p>
      <p>Aだけ上寄せ、左詰め (self-end)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 self-start justify-self-start bg-blue-300">
          A
        </div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>place-itemsとの違い</p>
      <p>
        親コンテナにplace-items-center
        を指定(=すべての要素は上下中央、左右中央)、Bだけ右詰め
        (justify-self-end)
      </p>
      <p>→ Bだけ右寄せになる</p>
      <div className="grid auto-rows-[200px] grid-cols-1 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 justify-self-end bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        {/* <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div> */}
      </div>
    </div>
  );
}
