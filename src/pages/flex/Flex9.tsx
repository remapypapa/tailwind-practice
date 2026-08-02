import { Link } from "react-router-dom";

export default function Flex9() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Flex 練習9 折り返し（flex-wrap）
      </h1>

      <div className="flex flex-wrap gap-4 border-2 border-gray-300 p-4">
        <div className="w-32 rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="w-32 rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="w-32 rounded bg-red-500 p-6 text-white">Box3</div>

        <div className="w-32 rounded bg-yellow-500 p-6 text-white">Box4</div>

        <div className="w-32 rounded bg-purple-500 p-6 text-white">Box5</div>

        <div className="w-32 rounded bg-pink-500 p-6 text-white">Box6</div>
      </div>
    </div>
  );
}
