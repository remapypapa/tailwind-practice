import { Link } from "react-router-dom";

export default function Flex2() {
  return (
    <div className="p-8">
      <Link to="/">← 戻る</Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Flex 練習2 縦並び</h1>
      <p className="p-4">flex flex-col gap-4</p>
      <div className="flex flex-col gap-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>
    </div>
  );
}
