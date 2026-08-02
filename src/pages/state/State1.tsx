import { Link } from "react-router-dom";

export default function State1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        状態変化（State Variants） 練習1 擬似クラス（Pseudo Classes）
      </h1>
      <p>ユーザーの操作に応じて見た目を変えられる</p>
      <p>・マウスを乗せたら色が変わる</p>
      <p>・クリックしたら少し縮む</p>
      <p>・入力欄を選択したら枠が光る</p>
      <p>・無効ボタンを薄く表示する</p>

      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="p-2">クラス</th>
            <th className="p-2">意味</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">hover</td>
            <td className="p-2">マウスを乗せた時</td>
          </tr>
          <tr>
            <td className="p-2">focus</td>
            <td className="p-2">要素が選択された時</td>
          </tr>
          <tr>
            <td className="p-2">active</td>
            <td className="p-2">クリック中</td>
          </tr>
          <tr>
            <td className="p-2">disabled</td>
            <td className="p-2">無効な時</td>
          </tr>
          <tr>
            <td className="p-2">visited</td>
            <td className="p-2">訪問済みリンク</td>
          </tr>
        </tbody>
      </table>

      <p className="pt-4">State Variants の書き方</p>
      <p>状態: + 通常のクラス</p>
      <p>hover:bg-blue-600</p>
      <p>focus:ring-2</p>
      <p>active:scale-95</p>

      <h2 className="pt-4">1. hover:（ホバー）</h2>
      <p>背景色変更(hover:bg-blue-600)</p>
      <div className="rounded-md bg-blue-300 px-4 py-2 text-white hover:bg-blue-600">
        テキスト
      </div>

      <p>文字色変更(hover:text-blue-600)</p>
      <div className="rounded-md bg-blue-300 px-4 py-2 text-white hover:text-blue-600">
        テキスト
      </div>

      <p>透明度変更(hover:opacity-50)</p>
      <div className="rounded-md bg-blue-600 px-4 py-2 text-white hover:opacity-50">
        テキスト
      </div>

      <p>影を強く(hover:shadow-lg)</p>
      <div className="rounded-md bg-blue-300 px-4 py-2 text-white hover:shadow-lg">
        テキスト
      </div>

      <p>少し拡大(hover:scale-105)</p>
      <p>
        scale-* *は0, 50, 75, 90, 95, 100, 105, 110, 125, 105,
        それ以外は[任意の数字]、[]でくくる
      </p>
      <div className="w-40 rounded-md bg-blue-300 px-4 py-2 text-white hover:scale-105">
        テキスト
      </div>

      <h2 className="pt-4">2. focus:（フォーカス）</h2>
      <p>入力欄をクリックした時などに使います。</p>
      <p>選択されると枠線が青になります。(focus:outline-noneの指定なし)</p>
      <table>
        <input
          type="text"
          placeholder="名前を入力"
          className="rounded border border-gray-400 px-3 py-2"
        />
      </table>

      <p>focus:outline-none</p>
      <p>ブラウザ標準の枠を消します。</p>
      <table>
        <input
          type="text"
          placeholder="名前を入力"
          className="rounded border border-gray-400 px-3 py-2 focus:outline-none"
        />
      </table>

      <p>focus:ring-2</p>
      <p>フォーカス時にリングを表示します。</p>
      <table>
        <input
          type="text"
          placeholder="名前を入力"
          className="rounded border border-gray-400 px-3 py-2 focus:ring-2"
        />
      </table>

      <p>一般的な使い方</p>
      <p>色: focus:ring-red-500 のようにする</p>
      <p>リングの太さ: focus:ring-4 のように数字を大きくする</p>
      <table>
        <input
          type="text"
          placeholder="名前"
          className="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-red-500"
        />
      </table>
      <p>・標準の青いアウトラインは消える</p>
      <p>・代わりに赤いリングが表示される</p>

      <h2>ポイント</h2>
      <p>
        focus:outline-none
        を使う場合は、代わりのフォーカス表示(色と線の太さ)を指定する
      </p>
      <p>
        ・focus:outline-none
        を指定すると、「今どの入力欄にフォーカスがあるのか」が分かりにくくなる。
      </p>
      <p>・focus:outline-none focus:ring-2 focus:ring-blue-500 のようにする</p>

      <h2 className="pt-4">3. active:（クリック中）</h2>
      <p>
        ボタンを押している間だけ適用されます。 押すと少し縮みます。(rounded
        bg-blue-500 px-4 py-2 text-white active:scale-95)
      </p>
      <p>スマホアプリのような操作感を出せます。</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white active:scale-95">
        クリック
      </button>
      <p>色と縮小を組み合わせる</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white transition active:scale-95 active:bg-blue-700">
        クリック
      </button>

      <h2 className="pt-4">4. disabled:（無効状態）</h2>
      <p>無効な時に</p>
      <p>・半透明になる</p>
      <p>・カーソルが禁止マークになる</p>
      <p>
        (rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed
        disabled:bg-gray-400)
      </p>
      <button
        disabled
        className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        送信
      </button>
      <p>
        inputでも使える(rounded border px-3 py-2 disabled:bg-gray-100
        disabled:text-gray-500)
      </p>
      <table>
        <input
          disabled
          className="rounded border px-3 py-2 disabled:bg-gray-100 disabled:text-gray-500"
        />
      </table>

      <h2 className="pt-4">5. visited:（訪問済みリンク）</h2>
      <p>一度開いたリンクが紫になります。(未訪問は青)</p>
      <p>※ a タグのみ で有効です。</p>
      <a
        href="https://example.com"
        className="text-blue-600 visited:text-purple-600"
      >
        Example
      </a>
      <p>下線も変えられる(visited:underline) →現在はブラウザの仕様で不可！</p>
      <a
        href="https://example.com"
        className="text-blue-600 visited:text-purple-600 visited:underline"
      >
        Example
      </a>
      <p>下線をつける場合(underline visited:text-purple-600)</p>
      <a
        href="https://example.com"
        className="underline visited:text-purple-600"
      >
        Example
      </a>

      <p>3つまとめたサンプル</p>
      <div className="space-y-6">
        <button className="rounded bg-blue-500 px-4 py-2 text-white active:scale-95 active:bg-blue-700">
          Active
        </button>

        <button
          disabled
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Disabled
        </button>

        <a
          href="https://example.com"
          className="text-blue-600 visited:text-purple-600"
        >
          Visited Link
        </a>
      </div>
    </div>
  );
}
