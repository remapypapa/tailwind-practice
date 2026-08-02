import { Link } from "react-router-dom";

export default function Etc2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">ETC 練習2 Overflow</h1>

      <p>Overflowとは？</p>
      <p>
        要素の大きさよりも内容が大きい場合、この「はみ出した部分」をどう扱うかを決めるのが
        Overflow{" "}
      </p>

      <p className="pt-4">Overflow一覧</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">overflow-visible</td>
            <td className="border p-2">はみ出して表示（デフォルト）</td>
          </tr>
          <tr>
            <td className="border p-2">overflow-hidden</td>
            <td className="border p-2">はみ出しを隠す</td>
          </tr>
          <tr>
            <td className="border p-2">overflow-auto</td>
            <td className="border p-2">必要な時だけスクロールバー</td>
          </tr>
          <tr>
            <td className="border p-2">overflow-scroll</td>
            <td className="border p-2">常にスクロールバー</td>
          </tr>
          <tr>
            <td className="border p-2">overflow-x-auto</td>
            <td className="border p-2">横だけスクロール</td>
          </tr>
          <tr>
            <td className="border p-2">overflow-y-auto</td>
            <td className="border p-2">縦だけスクロール</td>
          </tr>
        </tbody>
      </table>

      <p className="pt-4">overflow-visible</p>
      <p>(h-24 w-48 overflow-visible bg-blue-100)</p>
      <p>※ 要素からはみ出た文字は要素外に表示される</p>
      <div className="border border-blue-500 p-4">
        <div className="h-24 w-48 overflow-visible bg-blue-100">
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章
        </div>
      </div>

      <p className="pt-4">overflow-hidden</p>
      <p>(h-24 w-48 overflow-hidden bg-blue-100)</p>
      <p>※ 要素からはみ出た文字は表示されない</p>
      <div className="border border-blue-500 p-4">
        <div className="h-24 w-48 overflow-hidden bg-blue-100">
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章
        </div>
      </div>

      <p className="pt-4">よくある用途 1</p>
      <p>画像</p>
      <p>(overflow-hidden rounded-lg)</p>
      <p>ホバーすると画像だけ拡大 → 親がhiddenなので枠からはみ出さない</p>
      <p>これはカードデザインで非常によく使う</p>
      <p>w-full により角丸は常に反映される</p>
      <p>親要素: overflow-hidden rounded-lg</p>
      <p>子要素(img): w-full transition hover:scale-110</p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/600/400"
            className="w-full transition hover:scale-110"
          />
        </div>
      </div>

      <p className="pt-4">よくある用途 2</p>
      <p>角丸画像</p>
      <p>(overflow-hidden rounded-xl)</p>
      <p>これを付けないと画像だけ四角になる</p>

      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-xl">
          <img src="https://picsum.photos/600/400" />
        </div>
      </div>

      <p className="pt-4">overflow-auto</p>
      <p>内容が少ない時はスクロールバーなし、多い時はスクロールバーを表示</p>
      <p>(h-40 overflow-auto border)</p>
      <div className="border border-blue-500 p-4">
        <div className="h-40 overflow-auto border">
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
          長い文章 長い文章 長い文章 長い文章 長い文章 長い文章
        </div>
      </div>

      <p className="pt-4">よくある用途</p>
      <ul className="list-disc p-4">
        <li>ログ表示</li>
        <li>コメント一覧</li>
        <li>チャット表示</li>
        <li>サイドバー</li>
      </ul>

      <p className="pt-4">overflow-scroll</p>
      <p>常にスクロールバーが表示される</p>
      <p>
        ※ 内容が少なくてもスクロールバーが表示される ※ 近年はあまり使われない
      </p>
      <p className="text-red-500">
        注意: ブラウザーやOSの設定により反映されないことがある！
      </p>
      <div className="border border-blue-500 p-4">
        <div className="h-40 overflow-scroll border">
          短い文章 短い文章 短い文章 短い文章 短い文章 短い文章 短い文章
          短い文章 短い文章 短い文章 短い文章 短い文章 短い文章 短い文章
          短い文章 短い文章 短い文章
        </div>
      </div>

      <p className="pt-4">overflow-x-auto</p>
      <p>スマホでは、横スクロールする、使用頻度は高い</p>
      <p>※ セル内で改行をさせない → tableにwhitespace-nowrap をつける</p>
      <p>
        ※ 内容に合わせた最小幅を維持 → min-w-max
        もある、これは要素全体を内容より小さくしない
      </p>
      <div className="w-64 border border-blue-500 p-4">
        <div className="overflow-x-auto">
          (whitespace-nowrap)
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr>
                <td className="px-4 py-2">ID</td>
                <td className="px-4 py-2">NAME</td>
                <td className="px-4 py-2">E-MAIL</td>
                <td className="px-4 py-2">項目1</td>
                <td className="px-4 py-2">項目2</td>
                <td className="px-4 py-2">項目3</td>
                <td className="px-4 py-2">項目4</td>
                <td className="px-4 py-2">項目5</td>
                <td className="px-4 py-2">項目6</td>
                <td className="px-4 py-2">項目7</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">001</td>
                <td className="px-4 py-2">Masaaki Saito</td>
                <td className="px-4 py-2">
                  abcdefghijklmnopqrstuvwxyz@example.com
                </td>
                <td className="px-4 py-2">値1</td>
                <td className="px-4 py-2">値2</td>
                <td className="px-4 py-2">値3</td>
                <td className="px-4 py-2">値4</td>
                <td className="px-4 py-2">値5</td>
                <td className="px-4 py-2">値6</td>
                <td className="px-4 py-2">値7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 w-64 border border-blue-500 p-4">
        <div className="overflow-x-auto">
          (min-w-max whitespace-nowrap)
          <table className="min-w-max whitespace-nowrap">
            <thead>
              <tr>
                <td className="px-4 py-2">ID</td>
                <td className="px-4 py-2">NAME</td>
                <td className="px-4 py-2">E-MAIL</td>
                <td className="px-4 py-2">項目1</td>
                <td className="px-4 py-2">項目2</td>
                <td className="px-4 py-2">項目3</td>
                <td className="px-4 py-2">項目4</td>
                <td className="px-4 py-2">項目5</td>
                <td className="px-4 py-2">項目6</td>
                <td className="px-4 py-2">項目7</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">001</td>
                <td className="px-4 py-2">Masaaki Saito</td>
                <td className="px-4 py-2">
                  abcdefghijklmnopqrstuvwxyz@example.com
                </td>
                <td className="px-4 py-2">値1</td>
                <td className="px-4 py-2">値2</td>
                <td className="px-4 py-2">値3</td>
                <td className="px-4 py-2">値4</td>
                <td className="px-4 py-2">値5</td>
                <td className="px-4 py-2">値6</td>
                <td className="px-4 py-2">値7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="pt-4">補足: min-w-max</p>
      <div className="border border-blue-500 p-4">
        <div className="w-64 overflow-x-auto border p-4">
          <p>min-w-max 指定なし</p>
          <p>※ 親要素に合わせ、改行される</p>
          <div className="bg-blue-100">
            React Tailwind TypeScript Spring Boot PostgreSQL
          </div>
        </div>

        <div className="w-64 overflow-x-auto border p-4">
          <p>min-w-max 指定あり</p>
          <p>※ 親要素に関係なく内容幅が守られる=改行しない</p>
          <div className="min-w-max bg-blue-100">
            React Tailwind TypeScript Spring Boot PostgreSQL
          </div>
        </div>
      </div>

      <p className="pt-4">overflow-y-auto</p>
      <div className="border border-blue-500 p-4">
        <div className="h-32 overflow-y-auto">
          縦スクロール 縦スクロール 縦スクロール 縦スクロール 縦スクロール
          縦スクロール 縦スクロール 縦スクロール 縦スクロール 縦スクロール
          縦スクロール 縦スクロール 縦スクロール 縦スクロール 縦スクロール
          縦スクロール 縦スクロール 縦スクロール 縦スクロール 縦スクロール
          縦スクロール 縦スクロール 縦スクロール 縦スクロール 縦スクロール
          縦スクロール 縦スクロール 縦スクロール 縦スクロール
        </div>
      </div>

      <p className="pt-4">overflow-hidden + rounded</p>
      <p>最もよく見る組み合わせ、カードUIでは必須レベル</p>
      <p>(overflow-hidden rounded-xl shadow)</p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-xl shadow">
          <img src="https://picsum.photos/600/400" />
        </div>
      </div>

      <p className="pt-4">overflow-hidden + hover</p>
      <p>画像だけ綺麗にズームします</p>
      <p>(transition duration-300 hover:scale-110)</p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/600/400"
            className="transition duration-300 hover:scale-110"
          />
        </div>
      </div>

      <p className="pt-4">overflow-x-auto + table</p>
      <p>スマホ対応では定番</p>
      <p>div(親)には(overflow-x-auto)</p>
      <p>tableには(min-w-max whitespace-nowrap)</p>

      <div className="border border-blue-500 p-4">
        <div className="overflow-x-auto">
          <table className="min-w-max whitespace-nowrap">
            <thead>
              <tr>
                <td className="px-4 py-2">ID</td>
                <td className="px-4 py-2">NAME</td>
                <td className="px-4 py-2">E-MAIL</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">001</td>
                <td className="px-4 py-2">Masaaki Saito</td>
                <td className="px-4 py-2">
                  abcdefghijklmnopqrstuvwxyz@example.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>重要</p>
      <ul className="list-disc p-4">
        <li>min-w-max が「内容を潰さない」</li>
        <li>whitespace-nowrap が「セル内の改行を防ぐ」</li>
        <li>overflow-x-auto が「はみ出したら横スクロール」</li>
      </ul>

      <p className="pt-4">overflow-auto + max-h</p>
      <p>モーダルでもよく使います</p>
      <p>この場合(max-h-96)、96/4=24rem =16 x 24 =384px ここまで表示</p>
      <p>残りはスクロールになります。</p>
      <div className="border border-blue-500 p-4">
        <p>(max-h-96 overflow-auto)</p>
        <div className="max-h-96 overflow-auto">
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
          モーダルでもよく使います モーダルでもよく使います
        </div>
      </div>

      <p className="pt-4">OverflowとPositionの組み合わせ</p>
      <p>親要素: relative overflow-hidden rounded-lg</p>
      <p>子要素: absolute right-2 top-2 bg-red-500 p-2 text-white</p>
      <p>
        ※ 親のrelative と 子のabsolute
        で要素の位置を制御、overflow-hiddenで写真のはみ出しを制御
      </p>
      <div className="border border-blue-500 p-4">
        <div className="relative overflow-hidden rounded-lg">
          <img src="https://picsum.photos/600/400" />
          <span className="absolute right-2 top-2 bg-red-500 p-2 text-white">
            NEW
          </span>
        </div>
      </div>

      <p className="pt-4">OverflowとObject Fit</p>
      <p>親要素: overflow-hidden rounded-xl</p>
      <p>子要素: object-cover</p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-xl">
          <img src="https://picsum.photos/600/400" className="object-cover" />
        </div>
      </div>

      <p className="pt-4">よく使う組み合わせ制御</p>
      <p>画像カード ※ 写真のはみ出しと枠の形状</p>
      <ul>
        <li>overflow-hidden</li>
        <li>rounded-xl</li>
      </ul>

      <p className="pt-4">テーブル ※ 横スクロールと要素内の改行制御</p>
      <ul>
        <li>overflow-x-auto</li>
        <li>min-w-full</li>
      </ul>

      <p className="pt-4">チャット ※ 縦スクロールと要素の高さ指定</p>
      <ul>
        <li>overflow-y-auto</li>
        <li>h-96</li>
      </ul>

      <p className="pt-4">モーダル ※ 画面内表示と自動スクロール表示を指定</p>
      <ul>
        <li>max-h-screen</li>
        <li>overflow-auto</li>
      </ul>

      <p className="pt-4">モーダルの実装例</p>
      <p>親要素: fixed inset-0 flex items-center justify-center bg-black/50</p>
      <p>※ モーダルを画面中央に固定表示、バックグラウンドを50%透過へ</p>
      <p>
        子要素: max-h-screen w-full max-w-lg overflow-auto rounded-xl bg-white
        p-6
      </p>
      <p>
        {" "}
        ※
        枠の形状と書式、文字量が多くてもスクロール可能にし、ボタンに影響が及ばないようにしている
      </p>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="max-h-screen w-full max-w-lg overflow-auto rounded-xl bg-white p-6">
          (モーダル実装例)
          <h2 className="text-xl font-bold">利用規約</h2>
          <p>
            ここに長い文章 ここに長い文章 ここに長い文章 ここに長い文章
            ここに長い文章 ここに長い文章 ここに長い文章 ここに長い文章
            ここに長い文章 ここに長い文章 ここに長い文章 ここに長い文章
            ここに長い文章 ここに長い文章 ここに長い文章 ここに長い文章
            ここに長い文章 ここに長い文章
          </p>
          <button className="mt-6 rounded bg-blue-500 px-4 py-2 text-white">
            閉じる
          </button>
        </div>
      </div>

      <p className="pt-4">
        実際のプロジェクトでは、max-h-screen よりも余白を残した以下の表記をする
      </p>
      <ul>
        <li>max-h-[90vh]</li>
        <li>max-h-[80vh]</li>
      </ul>

      <p>
        こうすることで、モーダルが画面いっぱいにならず、上下に少し余白ができるため、見た目がより洗練され、圧迫感も少なくなる
      </p>
      <p className="pt-4">
        この「モーダル」はReact学習でも重要な題材です。useState
        による開閉制御、背景クリックで閉じる処理、Escキーで閉じる処理など、Reactの基本要素をまとめて学べるため、コンポーネント設計の練習にも最適
      </p>
    </div>
  );
}
