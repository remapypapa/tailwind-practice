import { Link } from "react-router-dom";

export default function Flex3() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Flex 練習3 左右中央寄せ</h1>

      <div className="flex justify-center gap-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">左寄せ</h1>

      <div className="flex justify-start gap-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">右寄せ</h1>

      <div className="flex justify-end gap-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">均等割</h1>

      <div className="flex justify-between gap-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        左右中央寄せ(余白4: gap-4)
      </h1>

      <div className="flex justify-center gap-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        左右中央寄せ(余白8: gap-8)
      </h1>

      <div className="flex justify-center gap-8">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>
    </div>
  );
}
