import { Link } from "react-router-dom";

export default function Grid1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Grid 練習1 Grid</h1>

      <div className="grid border-2 border-blue-500 p-4">
        <div className="bg-red-300 p-4">A</div>
        <div className="bg-green-300 p-4">B</div>
        <div className="bg-yellow-300 p-4">C</div>
        <div className="bg-blue-300 p-4">D</div>
      </div>
    </div>
  );
}
