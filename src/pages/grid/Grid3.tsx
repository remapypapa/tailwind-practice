import { Link } from "react-router-dom";

export default function Grid3() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Grid 練習3 grid-cols-3</h1>
      <p>要素数6</p>
      <div className="grid grid-cols-3 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">A</div>
        <div className="bg-green-300 p-4">B</div>
        <div className="bg-yellow-300 p-4">C</div>
        <div className="bg-pink-300 p-4">D</div>
        <div className="bg-cyan-300 p-4">E</div>
        <div className="bg-orange-300 p-4">F</div>
      </div>

      <p>要素数7</p>
      <div className="grid grid-cols-3 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
        <div className="bg-blue-300 p-4">7</div>
      </div>

      <p>要素数9</p>
      <div className="grid grid-cols-3 border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
        <div className="bg-gray-300 p-4">7</div>
        <div className="bg-lime-300 p-4">8</div>
        <div className="bg-sky-300 p-4">9</div>
      </div>
    </div>
  );
}
