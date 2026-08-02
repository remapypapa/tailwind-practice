import { Link } from "react-router-dom";

export default function Grid14() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習14 1つのアイテムを自由に配置する (place-self-*)
      </h1>
      <p>place-items-center</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>place-items-center</p>
      <p>Fのみ下寄せ右寄せ self-end justify-self-end </p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 self-end justify-self-end bg-pink-300">F</div>
      </div>

      <p>Fのみ下寄せ右寄せ place-self-end ↑上と同じ意味になる！</p>
      <p>つまり、place-self-* = justify-self-* + self-*</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="h-20 w-20 bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 place-self-end bg-pink-300">F</div>
      </div>

      <p>Aのみ左上寄せ (place-self-start)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="h-20 w-20 place-self-start bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>
        Aのみ左中央 (place-self-center) →
        親のplace-items-centerがあるため意味なし！
      </p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="h-20 w-20 place-self-center bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aのみ右下寄せ (place-self-end)</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="h-20 w-20 place-self-end bg-blue-300">A</div>
        <div className="h-20 w-20 bg-red-300">B</div>
        <div className="h-20 w-20 bg-green-300">C</div>
        <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div>
      </div>

      <p>Aのみplace-self-stretch指定 (place-self-stretch)</p>
      <p>要素のサイズは指定せず、Aのみセルいっぱいになる！</p>
      <div className="grid auto-rows-[200px] grid-cols-3 place-items-center border-2 border-blue-500 p-4">
        <div className="place-self-stretch bg-blue-300">A</div>
        <div className="bg-red-300">B</div>
        <div className="bg-green-300">C</div>
        {/* <div className="h-20 w-20 bg-yellow-300">D</div>
        <div className="h-20 w-20 bg-purple-300">E</div>
        <div className="h-20 w-20 bg-pink-300">F</div> */}
      </div>
    </div>
  );
}
