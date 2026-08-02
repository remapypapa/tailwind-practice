import { Link } from "react-router-dom";

export default function Etc3() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">ETC 練習3 z-index</h1>

      <p>z-indexとは？</p>
      <p>要素が重なったときどちらを前に表示するかを決めるもの</p>

      <p className="pt-4">基本ルール</p>
      <p>
        z-index は Position（relative / absolute / fixed /
        sticky）と一緒に使うことがほとんど
      </p>

      <p className="pt-4">z-index一覧</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">値</td>
            <td className="border p-2">用途</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">z-auto</td>
            <td className="border p-2">auto</td>
            <td className="border p-2">デフォルトだが使われない</td>
          </tr>
          <tr>
            <td className="border p-2">z-0</td>
            <td className="border p-2">0</td>
            <td className="border p-2">通常のコンテンツ</td>
          </tr>
          <tr>
            <td className="border p-2">z-10</td>
            <td className="border p-2">10</td>
            <td className="border p-2">ヘッダー</td>
          </tr>
          <tr>
            <td className="border p-2">z-20</td>
            <td className="border p-2">20</td>
            <td className="border p-2">ドロップダウンメニュー</td>
          </tr>
          <tr>
            <td className="border p-2">z-30</td>
            <td className="border p-2">30</td>
            <td className="border p-2">サイドバー</td>
          </tr>
          <tr>
            <td className="border p-2">z-40</td>
            <td className="border p-2">40</td>
            <td className="border p-2">モーダル</td>
          </tr>
          <tr>
            <td className="border p-2">z-50</td>
            <td className="border p-2">50</td>
            <td className="border p-2">トースト通知・ローディング</td>
          </tr>
          <tr>
            <td className="border p-2">-z-10</td>
            <td className="border p-2">-10</td>
            <td className="border p-2">背景</td>
          </tr>
        </tbody>
      </table>

      <p>
        このように「階層」を決めておくと、後からコードを見たときにも意図が分かりやすくなる
      </p>
      <p>
        z-index
        の値の数値に特に意味はなく、「相対的な順番」を表す。大きくなるほど手前になる、用意されているのは、0,
        10, 20, 30, 40, 50 のみ
      </p>
      <p>任意の数値は、z-[25]のようにすれば使用可能</p>

      <p className="pt-4">z-0 ※ 基本</p>
      <div className="border border-blue-500 p-2">
        <div className="relative z-0 bg-gray-300 p-2">relative</div>
      </div>

      <p className="pt-4">z-10 ※ 他の要素より前になる</p>
      <p>親 グレー: relative h-40 w-40 bg-gray-200</p>
      <p>子 青: absolute left-4 top-4 h-24 w-24 bg-blue-500</p>
      <p>子 赤: absolute left-10 top-10 z-10 h-24 w-24 bg-red-500</p>
      <div className="border border-blue-500 p-2">
        <div className="relative h-40 w-40 bg-gray-200">
          <div className="absolute left-4 top-4 h-24 w-24 bg-blue-500"></div>
          <div className="absolute left-10 top-10 z-10 h-24 w-24 bg-red-500"></div>
        </div>
      </div>

      <p className="pt-4">z-20 〜 50 ※ 大きくなるにつれて前になる</p>
      <p>親 グレー: relative h-40 w-40 bg-gray-200</p>
      <p>子 青: absolute left-4 top-4 h-24 w-24 bg-blue-500</p>
      <p>子 赤: absolute left-10 top-10 z-10 h-24 w-24 bg-red-500</p>
      <p>子 赤: absolute left-14 top-14 z-20 h-24 w-24 bg-orange-500</p>
      <p>子 赤: absolute left-16 top-16 z-30 h-24 w-24 bg-yellow-500</p>
      <p>子 赤: absolute left-20 top-20 z-40 h-24 w-24 bg-lime-500</p>
      <p>子 赤: absolute left-24 top-24 z-50 h-24 w-24 bg-green-500</p>
      <p>子 黒: absolute -left-4 -top-4 -z-10 h-24 w-24 bg-gray-600</p>
      <p>※ -(マイナス)指定すると背面になる、背景画像などを指定</p>

      <div className="border border-blue-500 p-2">
        <div className="relative h-60 w-60 bg-gray-200">
          <div className="absolute left-4 top-4 h-24 w-24 bg-blue-500"></div>
          <div className="absolute left-10 top-10 z-10 h-24 w-24 bg-red-500"></div>
          <div className="absolute left-14 top-14 z-20 h-24 w-24 bg-orange-500"></div>
          <div className="absolute left-16 top-16 z-30 h-24 w-24 bg-yellow-500"></div>
          <div className="absolute left-20 top-20 z-40 h-24 w-24 bg-lime-500"></div>
          <div className="absolute left-24 top-24 z-50 h-24 w-24 bg-green-500"></div>
          <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 bg-gray-600"></div>
        </div>
      </div>

      <p className="pt-4">実用例1 モーダル</p>
      <p>親: fixed inset-0 z-50 bg-black/50</p>
      <p>※ 最前面に固定表示、背景は黒50%透過</p>
      <p>子: mx-auto mt-20 w-96 rounded bg-white p-6</p>
      <p>ウィンドウサイズ 96/4=24rem=16x24=384px、バッグラウンド白、余白設定</p>
      {/* <div className="fixed inset-0 z-50 bg-black/50">
        <div className="mx-auto mt-20 w-96 rounded bg-white p-6">
          <p>(実用例1 モーダル)</p>
          Modal
        </div>
      </div> */}

      <p className="pt-4">実用例2 ドロップダウン</p>
      <p>親: relative inline-block</p>
      <p>
        子: absolute left-0 top-12 z-20 w-40 rounded border bg-white shadow-lg
      </p>
      <div className="relative h-56 border border-blue-500 p-4">
        <div className="relative inline-block">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Menu ▼
          </button>

          <div className="absolute left-0 top-12 z-20 w-40 rounded border bg-white shadow-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              プロフィール
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              設定
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              ログアウト
            </a>
          </div>
        </div>
      </div>

      <p className="pt-4">実用例2 ドロップダウン</p>
      <p>コンテンツが重なっている → それぞれ relative - absolute の関係</p>
      <p>z-20を外すとドロップダウンが赤い要素の後ろへ隠れてしまうことがある</p>
      <div className="relative h-56 border border-blue-500 p-4">
        <div className="absolute left-0 top-16 h-24 w-full bg-red-300">
          下のコンテンツ
        </div>

        <div className="relative inline-block">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Menu ▼
          </button>

          <div className="absolute left-0 top-12 z-20 w-40 rounded bg-white shadow-lg">
            <div className="border-b px-4 py-2">プロフィール</div>
            <div className="border-b px-4 py-2">設定</div>
            <div className="px-4 py-2">ログアウト</div>
          </div>
        </div>
      </div>

      <p className="pt-4">実用例3 バッジ</p>
      <p>親: relative </p>
      <p>子: absolute right-2 top-2 z-10 bg-red-500 p-2 text-white</p>
      <div className="relative border border-blue-500 p-4">
        <div className="relative">
          <img src="https://picsum.photos/600/400" />
          <span className="absolute right-2 top-2 z-10 bg-red-500 p-2 text-white">
            NEW
          </span>
        </div>
      </div>

      <p className="pt-4">実用例4 ヘッダー</p>
      <p>
        ヘッダー部分は常に表示(=最前面)、コンテンツはスクロールで見ることができる
      </p>
      <div className="border border-blue-500">
        <div className="h-64 overflow-auto">
          <header className="sticky top-0 z-40 bg-blue-600 p-4 text-white">
            Sticky Header（z-40）
          </header>

          <div className="space-y-2 p-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="rounded bg-gray-200 p-4">
                コンテンツ {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="pt-4">実用例5 FABボタン</p>
      <p>Floating Action Button</p>
      <p>
        (fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-red-500
        text-white shadow-lg)
      </p>
      <p>
        ※ 開いているウィンドウに常時最前面表示、右下(6/4=1.5rem=16x1.5=24px
        右、下からそれぞれ移動)に表示、14/4=3.5rem=56pxの直径、背景赤、文字色白、影付きの円
      </p>
      <div className="border border-blue-500 p-2">
        <p>※ この枠内ではなく、ブラウザ画面（Viewport）に対して配置</p>
        <button className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-red-500 text-white shadow-lg">
          + FABボタン
        </button>
      </div>

      <p className="pt-4">Positionとの組み合わせ</p>
      <ul>
        <li>relative</li>
        <li>absolute</li>
        <li>z-10</li>
      </ul>

      <ul className="pt-4">
        <li>fixed</li>
        <li>z-50</li>
      </ul>

      <ul className="pt-4">
        <li>sticky</li>
        <li>top-0</li>
        <li>z-40</li>
      </ul>

      <p className="pt-4">失敗例</p>
      <p className="pt-4">relativeが無い ※ 思った場所に表示されない</p>
      <p>className ="absolute"</p>
      <p className="pt-4">z-indexだけ付ける ※ 効かないことがある</p>
      <p>className ="z-50"</p>
      <p className="pt-4">
        z-indexを大きくし過ぎる ※実務では推奨されない、設計がわかりづらくなる
      </p>
      <p>className ="z-[999999]"</p>

      <p className="pt-4">よく使う組み合わせ</p>
      <p>バッジ</p>
      <ul>
        <li>relative</li>
        <li>absolute</li>
        <li>z-10</li>
      </ul>

      <p className="pt-4">モーダル</p>
      <ul>
        <li>fixed</li>
        <li>inset-0</li>
        <li>z-50</li>
      </ul>

      <p className="pt-4">ヘッダー</p>
      <ul>
        <li>sticky</li>
        <li>top-0</li>
        <li>z-40</li>
      </ul>

      <p className="pt-4">ドロップダウン</p>
      <ul>
        <li>relative</li>
        <li>absolute</li>
        <li>z-20</li>
      </ul>

      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>z-index は「重なり順」を決めるためのもの。</li>
        <li>
          relative・absolute・fixed・sticky と組み合わせて使うことがほとんど。
        </li>
        <li>z-10・z-20・z-40・z-50 を覚えておけば実務の大半をカバーできる。</li>
        <li>
          むやみに z-[9999]
          のような大きな値は使わず、役割ごとにルールを決めると保守しやすい。
        </li>
      </ul>
    </div>
  );
}
