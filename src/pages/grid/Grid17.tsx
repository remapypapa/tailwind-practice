import { Link } from "react-router-dom";

export default function Grid17() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習17 ブログカード一覧（メディアサイト風レイアウト）（実践編③）
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <article
            key={item}
            className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="h-52 bg-gray-300"></div>

            <div className="flex flex-col p-5">
              <h2 className="text-xl font-bold">
                React × Tailwind CSS 入門 {item}
              </h2>

              <p className="mt-3 text-gray-600">
                Gridレイアウトを利用して、
                ブログ一覧ページを作成する方法を解説します。
              </p>

              <div className="mt-5 flex justify-between text-sm text-gray-500">
                <span className="rounded bg-blue-100 px-3 py-1 text-blue-700">
                  React
                </span>

                <span>2026/07/01</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
