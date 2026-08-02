import { Link } from "react-router-dom";

export default function Transforms1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Responsive Design 練習1 ブレークポイント（Breakpoint）
      </h1>
      <p>画面サイズによってクラスを切り替える方法</p>
      <p className="pt-4">text-lg md:text-3xl</p>
      <ul className="list-disc p-4">
        <li>画面が小さいと、文字サイズ18px(text-lg)</li>
        <li>PCサイズになると、文字サイズ30px(text-3xl)</li>
      </ul>

      <p className="pt-4">ブレークポイント一覧</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">Prefix</td>
            <td className="border p-2">画面幅（以上）</td>
            <td className="border p-2">主な対象</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">なし</td>
            <td className="border p-2">0px〜</td>
            <td className="border p-2">スマホ（デフォルト）</td>
          </tr>
          <tr>
            <td className="border p-2">sm:</td>
            <td className="border p-2">640px〜</td>
            <td className="border p-2">大きめスマホ・小型タブレット</td>
          </tr>
          <tr>
            <td className="border p-2">md:</td>
            <td className="border p-2">768px〜</td>
            <td className="border p-2">タブレット</td>
          </tr>
          <tr>
            <td className="border p-2">lg:</td>
            <td className="border p-2">1024px〜</td>
            <td className="border p-2">ノートPC</td>
          </tr>
          <tr>
            <td className="border p-2">xl:</td>
            <td className="border p-2">1280px〜</td>
            <td className="border p-2">デスクトップ</td>
          </tr>
          <tr>
            <td className="border p-2">2xl:</td>
            <td className="border p-2">1536px〜</td>
            <td className="border p-2">大型モニター</td>
          </tr>
        </tbody>
      </table>

      <p>「以上」がポイント</p>
      <p>md:text-3xl</p>
      <ul className="list-disc p-4">
        <li>768px以上で適用</li>
        <li>767pxでは適用されない</li>
      </ul>

      <p className="pt-4">書き方</p>
      <p>md:クラス名</p>
      <p>例：md:bg-blue-500</p>
      <p>768px以上だけ青になる</p>

      <p className="pt-4">文字サイズ</p>
      <p>例: text-base md:text-3xl</p>
      <p>画面が小さいと16px、PCでは30px</p>

      <p className="pt-4">背景色</p>
      <p>例: bg-red-300 md:bg-blue-400</p>
      <p>スマホは赤、PCは青</p>

      <p className="pt-4">Grid</p>
      <p>例: grid grid-cols-1 md:grid-cols-3</p>
      <p>スマホは1列、PCは3列</p>

      <p className="pt-4">Flex</p>
      <p>例: flex flex-col md:flex-row</p>
      <p>スマは縦に並ぶ、PCは横に並ぶ</p>

      <p className="pt-4">実務で最もよく使う書き方</p>
      <p>スマホ1列、タブレット2列、PCは3列表示になる</p>
      <p>(grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3)</p>
      <div className="grid grid-cols-1 gap-4 bg-gray-300 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded bg-blue-300 p-4 text-center">1</div>
        <div className="rounded bg-blue-300 p-4 text-center">2</div>
        <div className="rounded bg-blue-300 p-4 text-center">3</div>
        <div className="rounded bg-blue-300 p-4 text-center">4</div>
        <div className="rounded bg-blue-300 p-4 text-center">5</div>
        <div className="rounded bg-blue-300 p-4 text-center">6</div>
        <div className="rounded bg-blue-300 p-4 text-center">7</div>
      </div>

      <p className="pt-4">文字サイズ</p>
      <p>(text-2xl md:text-4xl) ※スマホは2xl=24px、PCは36px</p>
      <h1 className="text-2xl md:text-4xl">スマホは2xl=24px、PCは36px</h1>

      <p className="pt-4">Padding</p>
      <p>(Paddingをスマホ16px、PC 32px)</p>
      <p>(bg-blue-300 p-4 md:p-8)</p>
      <div className="bg-blue-300 p-4 md:p-8">
        Paddingをスマホ16px、PC 32px Paddingをスマホ16px、PC 32px
        Paddingをスマホ16px、PC 32px Paddingをスマホ16px、PC 32px
        Paddingをスマホ16px、PC 32px Paddingをスマホ16px、PC 32px
      </div>

      <p className="pt-4">Width</p>
      <p>Widthを、スマホは画面一杯、PCは画面の50%</p>
      <p>(w-full bg-blue-300 md:w-1/2)</p>
      <div className="w-full bg-blue-300 md:w-1/2">
        Widthを、スマホは画面一杯、PCは画面の50%
        Widthを、スマホは画面一杯、PCは画面の50%
        Widthを、スマホは画面一杯、PCは画面の50%
        Widthを、スマホは画面一杯、PCは画面の50%
        Widthを、スマホは画面一杯、PCは画面の50%
      </div>

      <p className="pt-4">ブレークポイントは上書きされる</p>
      <p>例: className="text-base md:text-xl lg:text-3xl"</p>
      <ul className="list-disc p-4">
        <li>〜767pxまでは、text-base が適用</li>
        <li>768〜1023pxまでは、md:text-xl が適用</li>
        <li>1024px以上は、text-3xl が適用</li>
      </ul>

      <p className="pt-4">ポイント</p>
      <p>
        「md:text-xl や lg:text-3xl
        が追加される」と考えがちですが、実際には**text-base が text-xl や
        lg:text-3xl に置き換わる**イメージです。
      </p>
    </div>
  );
}
