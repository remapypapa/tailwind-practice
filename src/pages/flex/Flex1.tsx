import { Link } from "react-router-dom";

export default function Flex1() {
  return (
    <div className="p-8">

      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        ← 戻る
      </Link>

      <h1 className="text-3xl font-bold mt-6 mb-8">
        Flex 練習1 横並び
      </h1>

      <div className="flex gap-4">

        <div className="bg-blue-500 text-white p-6 rounded">
          Box1
        </div>

        <div className="bg-green-500 text-white p-6 rounded">
          Box2
        </div>

        <div className="bg-red-500 text-white p-6 rounded">
          Box3
        </div>

      </div>

    </div>
  );
}