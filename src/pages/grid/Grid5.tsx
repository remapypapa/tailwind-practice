import { Link } from "react-router-dom";

export default function Grid5() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">レスポンシブGrid</h1>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-red-300 p-4">1</div>
        <div className="bg-green-300 p-4">2</div>
        <div className="bg-yellow-300 p-4">3</div>
        <div className="bg-pink-300 p-4">4</div>
        <div className="bg-cyan-300 p-4">5</div>
        <div className="bg-orange-300 p-4">6</div>
      </div>
    </div>
  );
}
