import { Link } from "react-router-dom";

export default function Grid4() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Grid 練習4 gap</h1>
      <p>gap-4</p>
      <div className="grid grid-cols-3 gap-4 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
      </div>

      <p>gapなし</p>
      <div className="grid grid-cols-3 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
      </div>

      <p>横だけ余白 gap-x-8</p>
      <div className="grid grid-cols-3 gap-x-8 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
      </div>

      <p>縦だけ余白 gap-y-8</p>
      <div className="grid grid-cols-3 gap-y-8 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
      </div>

      <p>両方を別々に指定 gap-x-8 gap-y-2</p>
      <div className="grid grid-cols-3 gap-x-8 gap-y-2 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
      </div>

      <p>比較: マージン(m-4)</p>
      <div className="grid grid-cols-3 border-2 border-blue-500 p-4">
        <div className="m-4 bg-red-300 p-4">1</div>
        <div className="m-4 bg-green-300 p-4">2</div>
        <div className="m-4 bg-yellow-300 p-4">3</div>
        <div className="m-4 bg-pink-300 p-4">4</div>
        <div className="m-4 bg-cyan-300 p-4">5</div>
        <div className="m-4 bg-orange-300 p-4">6</div>
      </div>
    </div>
  );
}
