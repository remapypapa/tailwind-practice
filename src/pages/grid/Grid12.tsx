import { Link } from "react-router-dom";

export default function Grid1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習12 個別に制御する (justify-items-* と align-items-*)
      </h1>
      <p>セルの高さを200px、コラム数3、要素のサイズは h-20 w-20</p>
      <p>各要素は、それぞれのセルの左上に配置される</p>
      <div className="grid auto-rows-[200px] grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>justify-items-center</p>
      <p>横だけ中央になる、縦位置は変わらない</p>
      <div className="grid auto-rows-[200px] grid-cols-3 justify-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>justify-items-end</p>
      <p>右へよる、縦位置は変わらない</p>
      <div className="grid auto-rows-[200px] grid-cols-3 justify-items-end gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>items-start</p>
      <p>上寄せ</p>
      <div className="grid auto-rows-[200px] grid-cols-3 justify-items-start gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>items-center</p>
      <p>縦だけ中央</p>
      <div className="grid auto-rows-[200px] grid-cols-3 items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>items-end</p>
      <p>下寄せ</p>
      <div className="grid auto-rows-[200px] grid-cols-3 items-end gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>組み合わせる、items-center justify-items-end</p>
      <p>縦中央、右寄せ</p>
      <div className="grid auto-rows-[200px] grid-cols-3 items-center justify-items-end gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>組み合わせる、items-end justify-items-center</p>
      <p>縦下寄せ、中央</p>
      <div className="grid auto-rows-[200px] grid-cols-3 items-end justify-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>place-items-centerとitems-center justify-items-center は同じ</p>
      <p>つまり、place-items * → items-* + justify-items-* ということ！</p>
      <p>縦中央、横中央、place-items-center</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>

      <p>縦中央、横中央、items-center justify-items-center</p>
      <div className="grid auto-rows-[200px] grid-cols-3 items-center justify-items-center gap-4 border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
      </div>
    </div>
  );
}
