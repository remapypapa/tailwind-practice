import { Link } from "react-router-dom";

export default function Flex6() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Flex 練習6 左右に配置（justify-between）
      </h1>

      <div className="flex justify-between border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">左詰め（justify-start）</h1>

      <div className="flex justify-start border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        中央詰め（justify-center）
      </h1>

      <div className="flex justify-center border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">右詰め（justify-end）</h1>

      <div className="flex justify-end border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>
    </div>
  );
}
