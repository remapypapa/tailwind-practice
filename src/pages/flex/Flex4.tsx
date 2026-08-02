import { Link } from "react-router-dom";

export default function Flex4() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Flex 練習4 上下中央寄せ</h1>

      <div className="flex h-64 items-center gap-4 border-2 border-gray-300">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">上下上寄せ</h1>

      <div className="flex h-64 items-start gap-4 border-2 border-gray-300">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">上下下寄せ</h1>

      <div className="flex h-64 items-end gap-4 border-2 border-gray-300">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">上下中央寄せ(h-64なし)</h1>

      <div className="flex items-center gap-4 border-2 border-gray-300">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>
    </div>
  );
}
