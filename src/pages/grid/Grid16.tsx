import { Link } from "react-router-dom";

export default function Grid16() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習16 ECサイトの商品一覧（実践編②）
      </h1>

      <div className="mx-auto max-w-7xl p-6">
        <h1 className="mb-6 text-3xl font-bold">商品一覧</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-lg bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-64 bg-gray-300"></div>

              <div className="p-4">
                <h2 className="text-lg font-bold">商品 {item}</h2>

                <p className="mt-2 text-gray-600">商品説明が入ります。</p>

                <p className="mt-4 text-xl font-bold text-red-500">¥1,980</p>

                <button className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600">
                  購入する
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
