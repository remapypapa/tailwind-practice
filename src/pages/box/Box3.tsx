import { Link } from "react-router-dom";

export default function Box3() {
  return (
    <div className="min-h-screen bg-white p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ボックス・見た目 練習3 影（Box Shadow）
      </h1>
      <p>要素に影を付ける</p>
      <p>shadow ※基本、標準的な影</p>
      <div className="mb-6 border bg-white p-4 shadow">shadow</div>

      <p>shadow-sm ※カード一覧などでよく使われる</p>
      <div className="mb-6 border bg-white p-4 shadow-sm">shadow-sm</div>

      <p>shadow-md ※標準より少し強い影</p>
      <div className="mb-6 border bg-white p-4 shadow-md">shadow-md</div>

      <p>shadow-lg ※かなり立体感が出る</p>
      <div className="mb-6 border bg-white p-4 shadow-lg">shadow-lg</div>

      <p>shadow-xl ※大きなカードやダイアログで使われる</p>
      <div className="mb-6 border bg-white p-4 shadow-xl">shadow-xl</div>

      <p>shadow-2xl ※かなり強い影になる</p>
      <div className="mb-6 rounded-lg bg-white p-10 shadow-2xl">shadow-2xl</div>

      <p>shadow-none ※ライブラリのスタイルを打ち消したいときなどに使う</p>
      <div className="mb-6 border bg-white p-4 shadow-none">shadow-none</div>

      <p>shadow テスト</p>
      <div className="mb-6 bg-white p-10 shadow-[0_0_30px_red]">赤い影</div>

      <div className="mb-6 rounded-lg bg-white p-10 shadow-2xl shadow-black/40">
        shadow-2xl + shadow-black/40
      </div>

      <div className="bg-white p-8 shadow-[15px_15px_0px_rgba(0,0,0,0.4)]">
        影が右下にはっきり出る
      </div>

      <br />
      <p>shadow-inner ※</p>
      <div className="border bg-white p-4 shadow-inner">shadow-inner</div>

      <p>Borderと組み合わせる</p>
      <p>border bg-white p-4 shadow-md ※</p>
      <div className="border bg-white p-4 shadow-md">
        border bg-white p-4 shadow-md border bg-white p-4 shadow-md border
        bg-white p-4 shadow-md border bg-white p-4 shadow-md{" "}
      </div>

      <p>Roundedと組み合わせる</p>
      <p>rounded-lg border p-6 shadow-md ※</p>
      <div className="rounded-lg border p-6 shadow-md">
        rounded-lg border p-6 shadow-md rounded-lg border p-6 shadow-md
        rounded-lg border p-6 shadow-md
      </div>

      <p>実務でよく見る組み合わせ</p>
      <p>カード (rounded-lg border border-gray-200 shadow-md p-6)</p>
      <div className="rounded-lg border border-gray-200 p-6 shadow-md">
        rounded-lg border border-gray-200 p-6 shadow-md rounded-lg border
        border-gray-200 p-6 shadow-md rounded-lg border border-gray-200 p-6
        shadow-md
      </div>

      <p>ボタン (rrounded-md bg-blue-500 px-4 py-2 text-white shadow)</p>
      <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow"></button>

      <p>モーダル (rounded-xl bg-white p-8 shadow-xl)</p>
      <div className="rounded-xl bg-white p-8 shadow-xl">
        rounded-xl bg-white p-8 shadow-xl rounded-xl bg-white p-8 shadow-xl
        rounded-xl bg-white p-8 shadow-xl
      </div>

      <p>ドロップダウンメニュー (rounded-lg border shadow-lg)</p>
      <div className="rounded-lg border shadow-lg">
        rounded-lg border shadow-lg rounded-lg border shadow-lg rounded-lg
        border shadow-lg rounded-lg border shadow-lg
      </div>

      <p>実務で一番よく見る組み合わせ</p>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-2 text-xl font-bold">カードタイトル</h2>
        <p className="text-gray-600">これはカードの本文です。</p>
      </div>
    </div>
  );
}
