import { Link } from "react-router-dom";

export default function Grid15() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 練習15 ダッシュボードレイアウト（実践編①）
      </h1>

      <div className="grid min-h-screen grid-cols-4 gap-4 bg-gray-100 p-4">
        <header className="col-span-4 rounded bg-green-500 p-4 text-white">
          Header
        </header>

        <aside className="row-span-4 rounded bg-gray-700 p-4 text-white">
          Sidebar
        </aside>

        <section className="rounded bg-white p-4 shadow">売上</section>

        <section className="rounded bg-white p-4 shadow">ユーザー</section>

        <section className="rounded bg-white p-4 shadow">注文数</section>

        <section className="rounded bg-white p-4 shadow">利益</section>

        <section className="col-span-2 rounded bg-white p-4 shadow">
          グラフ
        </section>

        <section className="col-span-3 rounded bg-white p-4 shadow">
          お知らせ
        </section>

        <section className="col-span-3 rounded bg-white p-4 shadow">
          最近の注文一覧
        </section>
      </div>
    </div>
  );
}
