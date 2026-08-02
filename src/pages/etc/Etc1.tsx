import { Link } from "react-router-dom";

export default function Etc1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習1 Position（relative / absolute / fixed / sticky）
      </h1>
      <p>Positionとは？</p>
      <p>通常、HTML要素は上から順番に並んで表示されます（通常フロー）。</p>
      <p>Positionを使うと、</p>
      <ul className="list-disc p-4">
        <li>要素を自由な場所へ配置できる</li>
        <li>他の要素の上に重ねられる</li>
        <li>スクロールしても固定表示できる</li>
      </ul>
      <p>Positionの種類</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">static</td>
            <td className="border p-2">通常配置（デフォルト）</td>
          </tr>
          <tr>
            <td className="border p-2">relative</td>
            <td className="border p-2">基準位置を作る</td>
          </tr>
          <tr>
            <td className="border p-2">absolute</td>
            <td className="border p-2">基準から自由配置</td>
          </tr>
          <tr>
            <td className="border p-2">fixed</td>
            <td className="border p-2">画面固定</td>
          </tr>
          <tr>
            <td className="border p-2">sticky</td>
            <td className="border p-2">スクロールすると固定</td>
          </tr>
        </tbody>
      </table>
      <p className="pt-4">1. static</p>
      <p>通常の配置です。</p>
      <p>(static bg-blue-200 p-4)</p>
      <div className="static bg-blue-200 p-4">Static</div>
      <p>実際には書かないことがほとんど</p>
      <p className="pt-4">2. relative</p>
      <p>最重要です。</p>
      <p>(relative bg-gray-200 p-8)</p>
      <div className="relative bg-gray-200 p-8">Parent</div>
      <p>relativeは、「ここを基準にしてね」 の意味</p>
      <p className="pt-4">
        relative + top ※ top-※ ※ は上から移動する距離を指定
      </p>
      <p>(relative top-4 bg-blue-400 p-4)</p>
      <div className="relative top-4 bg-blue-400 p-4">Relative + top-4</div>
      <p className="pt-8">本来の位置</p>
      <p>↓</p>
      <p>16px下へ移動 ※ top-4 → 4/4=1rem 1rem=16px</p>
      <p>※元の場所はそのまま確保されています。</p>
      <p className="pt-4">relative + left ※左から移動する距離を指定</p>
      <p>(relative left-6 bg-green-400 p-4)</p>
      <div className="relative left-6 bg-green-400 p-4">Relative + left-6</div>
      <p>右へ24px移動します。 ※ 6/4rem 1.5rem=16x1.5=24px</p>
      <p className="pt-4">3. absolute</p>
      <p>これも超重要。</p>
      <p>(親要素:relative bg-gray-200 p-8)</p>
      <p>(子要素: absolute right-0 top-0 bg-red-500 px-2 text-white</p>
      <p>※ right-0 top-0 で右上に寄せている</p>
      <div className="relative bg-gray-200 p-8">
        <div className="absolute right-0 top-0 bg-red-500 px-2 text-white">
          NEW
        </div>
      </div>
      <p>absoluteは一番近いrelativeを基準に配置される</p>
      <p>relative → absolute はセットで覚える</p>
      <p className="pt-4">absoluteで使う位置指定</p>
      <ul className="list-disc p-4">
        <li>top-*</li>
        <li>bottom-*</li>
        <li>left-*</li>
        <li>right-*</li>
        <li>inset-*</li>
      </ul>
      <p>inset-* は全て(top, bottom, left, right)を同じ値にする場合に使う</p>
      <p>inset-0 = top-0 bottom-0 left-0 right-0</p>
      <p className="pt-4">よく使う例</p>
      <p>バッジ</p>
      <p>親要素:relative w-48 rounded bg-gray-300 p-4 shadow</p>
      <p>子要素:absolute right-2 top-2 rounded bg-red-500 px-2 text-white</p>
      <div className="relative w-48 rounded bg-gray-300 p-4 shadow">
        <span className="absolute right-2 top-2 rounded bg-red-500 px-2 text-white">
          NEW
        </span>
        商品名
      </div>
      <p className="pt-4">アイコン</p>
      <p>親要素:relative</p>
      <p>子要素:absolute right-3 top-3</p>
      <p>
        ※ アイコンを右から3、右上から3移動して配置、3/4rem = 16x3/4=12pxずつ移動
      </p>
      <div className="relative">
        <input className="border p-2 pr-10" />
        <span className="absolute right-3 top-3">🔍</span>
      </div>
      <p className="pt-4">モーダルの閉じるボタン</p>
      <p>親要素:relative rounded bg-gray-300 p-8</p>
      <p>子要素:absolute right-4 top-4</p>
      <p>
        ※ ボタンを右から4、右上から4移動して配置、4/4rem = 1rem=16pxずつ移動
      </p>
      <div className="relative rounded bg-gray-300 p-8">
        <button className="absolute right-4 top-4">✕</button>
      </div>
      <p className="pt-4">4. fixed</p>
      <p>画面に固定される</p>
      <p>
        ※ 要素を下からから4、右上から4移動して配置、4/4rem = 1rem=16pxずつ移動
      </p>
      <p>スクロールしても常に表示される</p>
      <p>(fixed bottom-4 right-4 rounded bg-blue-500 p-4 text-white)</p>
      <div className="fixed bottom-4 right-4 rounded bg-blue-500 p-4 text-white">
        TOP(4. fixed)
      </div>
      <p className="pt-4">5. sticky</p>
      <p>スクロールすると固定される</p>
      <p>(sticky top-0 bg-gray-300 p-4 shadow)</p>
      <div className="sticky top-0 bg-gray-300 p-4 shadow">
        Header(5. sticky)
      </div>
      <p>※ スクロールして、上に到達すると固定される</p>
      <p>よくある用途</p>
      <ul className="list-disc p-4">
        <li>ヘッダー</li>
        <li>サイドバー</li>
        <li>メニュー</li>
      </ul>
      <p className="pt-4">inset系</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">top-0</td>
            <td className="border p-2">上0</td>
          </tr>
          <tr>
            <td className="border p-2">right-0</td>
            <td className="border p-2">右0</td>
          </tr>
          <tr>
            <td className="border p-2">bottom-0</td>
            <td className="border p-2">下0</td>
          </tr>
          <tr>
            <td className="border p-2">left-0</td>
            <td className="border p-2">左0</td>
          </tr>
          <tr>
            <td className="border p-2">inset-0</td>
            <td className="border p-2">上下左右0</td>
          </tr>
        </tbody>
      </table>
      <p className="pt-4">マイナス指定</p>
      <div className="relative rounded bg-gray-300 p-8">
        <div className="absolute -right-2 -top-2 bg-red-400 p-2 text-white">
          バッジ
        </div>
      </div>
      <p>バッジなどで非常によく使う</p>
      <p>※ マイナス指定すると親要素からはみ出る</p>

      <p className="pt-4">中央配置</p>
      <p>親要素: relative rounded bg-gray-300 p-8</p>
      <p>
        子要素: absolute inset-2 flex items-center justify-center bg-blue-600
        text-white
      </p>
      <div className="relative rounded bg-gray-300 p-8">
        <div className="absolute inset-2 flex items-center justify-center bg-blue-600 text-white">
          中央配置
        </div>
      </div>

      <p className="pt-4">別パターン</p>
      <p>親要素: relative rounded bg-gray-300 p-8</p>
      <p>
        子要素: absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-blue-600 text-white
      </p>
      <div className="relative rounded bg-gray-300 p-8">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white">
          中央配置
        </div>
      </div>

      <p className="pt-4">よくある組み合わせ</p>
      <p>カードのバッチ</p>
      <p>親: relative</p>
      <p>子: absolute + top-0 + right-0</p>

      <p className="pt-4">画像中央のアイコン</p>
      <p>親: relative</p>
      <p>子: absolute + inset-0 + flex + items-center + justify-center</p>

      <p className="pt-4">TOPへ戻るボタン</p>
      <p>flexe + bottom-4 + right-4</p>

      <p className="pt-4">ヘッダー</p>
      <p>sticky + top-0</p>

      <p className="pt-4">覚えるべきこと</p>
      <ul className="list-disc p-4">
        <li>
          relative
          は配置の基準を作るためのクラスで、単体では見た目が変わらないことが多い。
        </li>
        <li>
          absolute は最も近い relative
          を基準に配置されるため、基本的にセットで使う。
        </li>
        <li>
          fixed
          はビューポート（画面）に固定され、スクロールしても位置が変わらない。
        </li>
        <li>
          sticky は通常配置から始まり、指定位置までスクロールすると固定される。
        </li>
        <li>top・right・bottom・left・inset を組み合わせて位置を指定する。</li>
      </ul>
    </div>
  );
}
