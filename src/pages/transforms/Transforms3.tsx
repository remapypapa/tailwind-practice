import { Link } from "react-router-dom";

export default function Transforms3() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transforms 練習3 Translate（移動）
      </h1>

      <p>要素を上下左右に移動できるようにする</p>
      <p>translate-x-*、translate-y-* を使用、*には、1, 2, 4, 8</p>

      <table className="border">
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">移動量</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">translate-x-1</td>
            <td className="border p-2">4px</td>
          </tr>
          <tr>
            <td className="border p-2">translate-x-2</td>
            <td className="border p-2">8px</td>
          </tr>
          <tr>
            <td className="border p-2">translate-x-4</td>
            <td className="border p-2">16px</td>
          </tr>
          <tr>
            <td className="border p-2">translate-x-8</td>
            <td className="border p-2">32px</td>
          </tr>
        </tbody>
      </table>
      <p>※ 数字部分を4で割ればrem、1rem = 16px</p>

      <p className="pt-4">translate-x-4</p>
      <p>右へ16px移動</p>

      <button className="translate-x-4 rounded bg-blue-500 px-4 py-2 text-white">
        ボタン
      </button>
      <p>移動前</p>

      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        ボタン
      </button>

      <p>-translate-x-4</p>
      <p>左へ16px移動 ※ - をつける</p>

      <button className="-translate-x-4 rounded bg-blue-500 px-4 py-2 text-white">
        ボタン
      </button>

      <p className="pt-4">translate-y-4</p>
      <p>下へ16px移動</p>

      <button className="translate-y-4 rounded bg-blue-500 px-4 py-2 text-white">
        ボタン
      </button>

      <p className="pt-4">-translate-y-4</p>
      <p>上へ16px移動 ※ - をつける</p>

      <button className="-translate-y-4 rounded bg-blue-500 px-4 py-2 text-white">
        ボタン
      </button>

      <p>hover と組み合わせる</p>
      <p>少し浮き上がるカード</p>
      <p>
        (rounded bg-blue-400 px-4 py-2 text-white transition-transform
        duration-300 hover:-translate-y-2)
      </p>
      <div className="rounded bg-blue-400 px-4 py-2 text-white transition-transform duration-300 hover:-translate-y-2">
        カード
      </div>

      <p className="pt-4">ボタン</p>
      <p>
        (rounded bg-blue-400 px-4 py-2 text-white transition-transform
        duration-300 hover:-translate-y-1)
      </p>
      <button className="rounded bg-blue-400 px-4 py-2 text-white transition-transform duration-300 hover:-translate-y-1">
        ボタン
      </button>
      <p className="pt-4">Scaleと組み合わせる</p>
      <p>
        (rounded bg-blue-400 px-4 py-2 text-white transition-transform
        duration-300 hover:-translate-y-2 hover:scale-110)
      </p>
      <button className="rounded bg-blue-400 px-4 py-2 text-white transition-transform duration-300 hover:-translate-y-2 hover:scale-110">
        ボタン
      </button>
      <p>少し拡大して、上に移動する</p>
      <p className="pt-4">Shadowも追加</p>
      <p>
        (rounded bg-blue-400 px-4 py-2 text-white shadow transition-transform
        duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl)
      </p>
      <button className="rounded bg-blue-400 px-4 py-2 text-white shadow transition-transform duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-xl">
        ボタン
      </button>

      <p className="pt-4">Translate と Margin の違い</p>
      <p>
        ・mt-4 はレイアウト自体を動かす → 上に空白を4 = 1rem = 16px
        空ける(他の要素の位置も影響する)
      </p>
      <p>
        ・-translate-y-2 は見た目だけを移動する → 上方向に2 = 1/2rem = 8px
        移動する(他の要素は動かない)
      </p>

      <p className="pt-4">Translate と Position の違い</p>
      <p>・translate-x-4 は自分の位置を少しずらす</p>
      <p>・absolute left-4 は配置場所そのものを指定</p>

      <p className="pt-4">実務でよく見る例</p>
      <p className="pt-4">カード</p>
      <p>
        (rounded-lg border bg-blue-400 px-4 py-2 shadow-md transition-all
        duration-300 ease-out hover:-translate-y-2 hover:shadow-xl)
      </p>
      <div className="rounded-lg border bg-blue-400 px-4 py-2 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
        カード
      </div>
      <p>
        上方向に2/4=1/2rem、16/2=8px 移動する、その際Shadowもmd→xlに拡大する
      </p>

      <p className="pt-4">ボタン</p>
      <p>
        (bg-blue-400 px-4 py-2 transition-transform duration-200
        hover:-translate-y-1)
      </p>
      <button className="bg-blue-400 px-4 py-2 transition-transform duration-200 hover:-translate-y-1">
        ボタン
      </button>
      <p>上に1/4rem、16/4=4px 移動する</p>

      <p className="pt-4">アイコン</p>
      <p>
        (inline-block bg-blue-400 px-4 py-2 transition-transform duration-200
        hover:translate-x-1)
      </p>
      <button className="inline-block bg-blue-400 px-4 py-2 transition-transform duration-200 hover:translate-x-1">
        →
      </button>
      <p>矢印が少し右へ動く</p>
    </div>
  );
}
