import { Link } from "react-router-dom";

export default function Flex5() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-lg bg-white p-8 shadow-lg">
        <Link to="/" className="text-blue-600 hover:underline">
          ← 戻る
        </Link>

        <h1 className="mb-8 mt-6 text-3xl font-bold">Flex 練習5 完全中央</h1>
        <h1 className="mb-6 mt-6 text-3xl font-bold">Login</h1>

        <button className="w-full rounded bg-blue-500 py-3 text-white hover:bg-blue-600">
          ログイン
        </button>
      </div>
    </div>
  );
}
