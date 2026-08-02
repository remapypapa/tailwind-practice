import { Link } from "react-router-dom";
export default function Grid6() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">カード一覧レイアウト</h1>

      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4 shadow">
          <div className="mb-4 h-40 rounded bg-gray-300"></div>
          <h2 className="text-lg font-bold">商品A</h2>
          <p className="text-gray-600">¥1,980</p>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            詳細を見る
          </button>
        </div>

        <div className="rounded-lg border p-4 shadow">
          <div className="mb-4 h-40 rounded bg-gray-300"></div>
          <h2 className="text-lg font-bold">商品B</h2>
          <p className="text-gray-600">¥2,980</p>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            詳細を見る
          </button>
        </div>

        <div className="rounded-lg border p-4 shadow">
          <div className="mb-4 h-40 rounded bg-gray-300"></div>
          <h2 className="text-lg font-bold">商品C</h2>
          <p className="text-gray-600">¥3,980</p>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            詳細を見る
          </button>
        </div>

        <div className="rounded-lg border p-4 shadow">
          <div className="mb-4 h-40 rounded bg-gray-300"></div>
          <h2 className="text-lg font-bold">商品D</h2>
          <p className="text-gray-600">¥4,980</p>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            詳細を見る
          </button>
        </div>

        <div className="rounded-lg border p-4 shadow">
          <div className="mb-4 h-40 rounded bg-gray-300"></div>
          <h2 className="text-lg font-bold">商品E</h2>
          <p className="text-gray-600">¥5,980</p>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            詳細を見る
          </button>
        </div>

        <div className="rounded-lg border p-4 shadow">
          <div className="mb-4 h-40 rounded bg-gray-300"></div>
          <h2 className="text-lg font-bold">商品F</h2>
          <p className="text-gray-600">¥6,980</p>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            詳細を見る
          </button>
        </div>
      </div>
    </div>
  );
}
