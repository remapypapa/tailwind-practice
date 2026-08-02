import { Link } from "react-router-dom";

export default function Flex7() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Flex 練習8 均等配置（justify-evenly）
      </h1>
      <p>端の余白も、要素間の余白もすべて同じ大きさ</p>

      <div className="flex justify-evenly border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        左右に配置 （justify-between）
      </h1>
      <ul>
        <li>最初は左端</li>
        <li>最後は右端</li>
        <li>両端には余白がない</li>
      </ul>

      <div className="flex justify-between border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        均等配置（justify-around）
      </h1>
      <ul>
        <li>左右にも余白がある</li>
        <li>各要素の周囲に均等な余白が付く</li>
      </ul>

      <div className="flex justify-around border-2 border-gray-300 p-4">
        <div className="rounded bg-blue-500 p-6 text-white">Box1</div>

        <div className="rounded bg-green-500 p-6 text-white">Box2</div>

        <div className="rounded bg-red-500 p-6 text-white">Box3</div>
      </div>
    </div>
  );
}
