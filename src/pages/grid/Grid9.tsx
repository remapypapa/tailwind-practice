import { Link } from "react-router-dom";

export default function Grid9() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Grid 自由な列幅を作る（grid-cols-[...]）
      </h1>

      <p>左は200px(固定)、右は残り全部(右可変) (grid-cols-[200px_1fr])</p>
      <div className="grid grid-cols-[200px_1fr] gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300 p-4">Menu</div>
        <div className="bg-green-300 p-4">Main Content</div>
      </div>

      <p>左は1、右は2の比率(左右可変) (grid-cols-[1fr_2fr])</p>
      <div className="grid grid-cols-[1fr_2fr] gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300 p-4">Menu</div>
        <div className="bg-green-300 p-4">Main Content</div>
      </div>

      <p>3列[200px + 残り (2:1の比率で可変)] (grid-cols-[200px_2fr_1fr])</p>
      <div className="grid grid-cols-[200px_2fr_1fr] gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300 p-4">Menu</div>

        <div className="bg-green-300 p-4">Main Content</div>
        <div className="bg-orange-300 p-4">Sub Content</div>
      </div>

      <p>よく使うパターン</p>
      <p>サイドバー(grid-cols-[250px_1fr])</p>
      <div className="grid grid-cols-[250px_1fr] gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300 p-4">Menu</div>
        <div className="bg-green-300 p-4">Sidebar</div>
      </div>

      <p>ブログ(grid-cols-[1fr_300px])</p>
      <div className="grid grid-cols-[1fr_300px] gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300 p-4">Content</div>
        <div className="bg-green-300 p-4">Sidebar</div>
      </div>

      <p>管理画面(grid-cols-[220px_1fr])</p>
      <div className="grid grid-cols-[220px_1fr] gap-4 border-2 border-blue-500 p-4">
        <div className="bg-blue-300 p-4">Menu</div>
        <div className="bg-green-300 p-4">Content</div>
      </div>

      <p>レスポンシブ対応(grid-cols-1 lg:grid-cols-[220px_1fr])</p>
      <div className="grid grid-cols-1 gap-4 border-2 border-blue-500 p-4 lg:grid-cols-[220px_1fr]">
        <div className="bg-blue-300 p-4">Menu</div>
        <div className="bg-green-300 p-4">Main</div>
      </div>
    </div>
  );
}
