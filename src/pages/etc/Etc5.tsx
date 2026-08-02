import { Link } from "react-router-dom";

export default function Etc5() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">ETC 練習5 Group・Peer</h1>

      <p>Groupとは？</p>
      <p>親要素の状態を子要素へ伝えるためのクラス</p>
      <div className="border border-blue-500 p-4">
        <p>カードにマウスを乗せる</p>
        <p> ↓ </p>
        <p>画像が拡大</p>
        <p> ↓ </p>
        <p>文字色が変わる </p>
        <p> ↓ </p>
        <p>ボタン色も変わる</p>
      </div>
      <p>これを簡単に実現できます。</p>

      <p className="pt-4">Groupの仕組み</p>
      <p className="pt-4">親</p>
      <p>className="group"</p>

      <p className="pt-4">子</p>
      <p>className="group-hover:..."</p>

      <p className="pt-4">group-hover</p>
      <p>最も使用頻度が高い</p>
      <p>※ カードにマウスを乗せると文字が青になる</p>
      <p>親(div): group w-72 rounded-xl border p-6 transition</p>
      <p>
        子(h2): text-xl font-bold transition-colors group-hover:text-blue-600
      </p>
      <div className="border border-blue-500 p-4">
        <div className="group w-72 rounded-xl border p-6 transition">
          <h2 className="text-xl font-bold transition-colors group-hover:text-blue-600">
            Tailwind CSS
          </h2>
        </div>
      </div>

      <p className="pt-4">画像ズーム</p>
      <p>実務で超定番</p>
      <p>※ 画像カードでは毎日のように見る</p>
      <p>親(div): group w-72 overflow-hidden rounded-xl</p>
      <p>
        子(img): aspect-video w-full object-cover transition-transform
        duration-300 group-hover:scale-110
      </p>
      <div className="border border-blue-500 p-4">
        <div className="group w-72 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/800/500"
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <p className="pt-4">画像ズーム</p>
      <p>カード全体にホバーすると</p>
      <ul className="list-disc p-4">
        <li>画像拡大</li>
        <li>タイトル色変更</li>
        <li>影も大きくなる</li>
      </ul>
      <p>
        親(div): group w-80 overflow-hidden rounded-xl border shadow transition
        hover:shadow-lg
      </p>
      <p>
        子1(img): aspect-video w-full object-cover transition-transform
        duration-300 group-hover:scale-110
      </p>
      <p>子2(div): 別の子(div)がある ↓</p>
      <p>
        子2(h2): text-lg font-bold transition-colors group-hover:text-blue-600
      </p>

      <div className="border border-blue-500 p-4">
        <div className="group w-80 overflow-hidden rounded-xl border shadow transition hover:shadow-lg">
          <img
            src="https://picsum.photos/800/500"
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold transition-colors group-hover:text-blue-600">
              Tailwind Practice
            </h2>
            <p className="mt-2 text-gray-600">Card Design</p>
          </div>
        </div>
      </div>

      <p className="pt-4">ボタン</p>
      <p>※ 文字間が広がる</p>
      <p>親(button): group rounded-lg bg-blue-500 px-6 py-3 text-white</p>
      <p>子(span): transition group-hover:tracking-wider</p>
      <div className="border border-blue-500 p-4">
        <button className="group rounded-lg bg-blue-500 px-6 py-3 text-white">
          <span className="transition group-hover:tracking-wider">
            詳細を見る →
          </span>
        </button>
      </div>

      <p className="pt-4">Groupで使える状態</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">group-hover</td>
            <td className="border p-2">ホバー</td>
          </tr>
          <tr>
            <td className="border p-2">group-focus</td>
            <td className="border p-2">フォーカス</td>
          </tr>
          <tr>
            <td className="border p-2">group-active</td>
            <td className="border p-2">クリック中</td>
          </tr>
          <tr>
            <td className="border p-2">group-focus-within</td>
            <td className="border p-2">子要素にフォーカス</td>
          </tr>
        </tbody>
      </table>

      <p className="pt-4">Peerとは？</p>
      <p>兄弟要素の状態を利用するためのクラス</p>
      <div className="border border-blue-500 p-4">
        <p>input</p>
        <p> ↓ </p>
        <p>focus</p>
        <p> ↓ </p>
        <p>labelの色変更</p>
      </div>

      <p className="pt-4">Peerの仕組み</p>
      <p>対象</p>
      <p>className="peer"</p>
      <p>兄弟</p>
      <p>className="peer-focus:..."</p>

      <p className="pt-4">peer-focus</p>
      <p>最重要</p>
      <p>※ 入力欄をクリックすると説明文が青くなる</p>
      <p>対象(input): peer w-full rounded border p-2</p>
      <p>
        兄弟(p): mt-2 text-gray-500 transition-colors peer-focus:text-blue-600
      </p>

      <div className="border border-blue-500 p-4">
        <div>
          <input className="peer w-full rounded border p-2" />
          <p className="mt-2 text-gray-500 transition-colors peer-focus:text-blue-600">
            入力してください
          </p>
        </div>
      </div>

      <p className="pt-4">フローティングラベル風</p>
      <p>最近のフォームでよく見るデザイン</p>
      <p>親(div): relative</p>
      <p>対象(input): peer w-full rounded border p-4</p>
      <p>
        兄弟(label): absolute left-4 top-4 transition-all peer-focus:-top-2
        peer-focus:bg-white peer-focus:px-1 peer-focus:text-sm
        peer-focus:text-blue-600
      </p>
      <div className="border border-blue-500 p-4">
        <div className="relative">
          <input placeholder=" " className="peer w-full rounded border p-4" />
          <label className="absolute left-4 top-4 transition-all peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-sm peer-focus:text-blue-600">
            名前
          </label>
        </div>
      </div>

      <p className="pt-4">チェックボックス</p>
      <p>※ チェックすると文字が緑になる</p>
      <p>対象(input): peer</p>
      <p>兄弟(span): ml-2 peer-checked:font-bold peer-checked:text-green-600</p>
      <div className="border border-blue-500 p-4">
        <div>
          <input type="checkbox" className="peer" />
          <span className="ml-2 peer-checked:font-bold peer-checked:text-green-600">
            利用規約に同意する
          </span>
        </div>
      </div>

      <p className="pt-4">Peerで使える状態</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">peer-focus</td>
            <td className="border p-2">フォーカス</td>
          </tr>
          <tr>
            <td className="border p-2">peer-hover</td>
            <td className="border p-2">ホバー</td>
          </tr>
          <tr>
            <td className="border p-2">peer-checked</td>
            <td className="border p-2">チェック済み</td>
          </tr>
          <tr>
            <td className="border p-2">peer-disabled</td>
            <td className="border p-2">無効</td>
          </tr>
          <tr>
            <td className="border p-2">peer-invalid</td>
            <td className="border p-2">バリデーションエラー</td>
          </tr>
          <tr>
            <td className="border p-2">peer-required</td>
            <td className="border p-2">必須</td>
          </tr>
        </tbody>
      </table>

      <p className="pt-4">実務でよく使う組み合わせ1</p>
      <p>カード</p>
      <p>親(div): group rounded-xl shadow transition hover:shadow-lg</p>
      <p>
        子(img): aspect-video w-full object-cover transition-transform
        group-hover:scale-110
      </p>
      <p>子(h2): group-hover:text-blue-600</p>
      <div className="group rounded-xl shadow transition hover:shadow-lg">
        <img
          src="https://picsum.photos/800/500"
          className="aspect-video w-full object-cover transition-transform group-hover:scale-110"
        />
        <h2 className="group-hover:text-blue-600">Title</h2>
      </div>

      <p className="pt-4">実務でよく使う組み合わせ2</p>
      <p>フォーム</p>
      <p>対象(input): peer rounded border p-2</p>
      <p>兄弟(p): peer-focus:text-blue-600</p>
      <input className="peer rounded border p-2" />
      <p className="peer-focus:text-blue-600"></p>

      <p className="pt-4">実務でよく使う組み合わせ3</p>
      <p>チェックボックス</p>
      <p>対象(input): peer</p>
      <p>兄弟(span): peer-checked:text-green-600</p>
      <div className="border border-blue-500 p-4">
        <input type="checkbox" className="peer" />
        <span className="pl-2 peer-checked:text-green-600">span</span>
      </div>

      <p className="pt-4">よくある失敗</p>
      <p>× groupを付け忘れる</p>
      <p>※ 何も起こらない</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div>
	<h2 className="group-hover:text-blue-600">
</div>`}</code>
        </pre>
      </div>

      <p className="pt-4">親に</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className="group"`}</code>
        </pre>
      </div>
      <p>が必要</p>

      <p className="pt-4">× peerを付け忘れる</p>
      <p>※ これも動かない</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<input/>
<p className="peer-focus:text-blue-600">s`}</code>
        </pre>
      </div>

      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<input className="peer"/>`}</code>
        </pre>
      </div>
      <p>が必要</p>

      <p className="pt-4">× 親子関係を間違える</p>
      <p>※ group-hover:* は親 (group) の子要素でしか動作しません。</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="group">
  <p className="group-hover:text-blue-600">
    OK
  </p>
</div>`}</code>
        </pre>
      </div>

      <p className="pt-4">× peerの対象を間違える</p>
      <p>※ peer-* は兄弟要素に対して作用します。</p>
      <p>
        ※ 一方、input の子要素に適用しようとしても、input
        は子要素を持てないため動作しません。
      </p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div>
	<input className="peer"/>
	<span className="peer-focus:text-blue-600">
      OK
    </span>
</div>`}</code>
        </pre>
      </div>

      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>group は親要素の状態を子要素へ伝える。</li>
        <li>peer は兄弟要素の状態を利用する。</li>
        <li>カードデザインでは group-hover が定番。</li>
        <li>フォームでは peer-focus・peer-checked が定番。</li>
        <li>どちらも JavaScript を書かずにインタラクションを実現できる。</li>
      </ul>

      <p className="pt-4">React開発でのワンポイント</p>
      <p>
        group と peer
        は、Reactでも状態管理（useState）を使わずに済む場面を増やしてくれます。
      </p>
      <p>例えば</p>
      <ul className="list-disc p-4">
        <li>カードのホバー演出 → group-hover</li>
        <li>入力欄のフォーカス演出 → peer-focus</li>
      </ul>
      <p>
        CSSだけで表現できるUIは、Reactで状態を持つよりシンプルで保守しやすくなります
      </p>
    </div>
  );
}
