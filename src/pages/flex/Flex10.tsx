import { Link } from "react-router-dom";

export default function Flex10() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Flex 練習10 レスポンシブなFlexbox (flex-col md:flex-row)
      </h1>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>
    </div>
  );
}
