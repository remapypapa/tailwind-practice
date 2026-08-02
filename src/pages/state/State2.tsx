import { Link } from "react-router-dom";

export default function State1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        状態変化（State Variants） 練習2 フォーム系（Form State Variants）
      </h1>
      <p>フォームの状態に応じて見た目を変えられるようになる</p>
      <div className="p-4">
        <ul className="list-disc">
          <li>プレースホルダーをグレーにする</li>
          <li>入力欄をクリックしたら青い枠を表示する</li>
          <li>チェックボックスにチェックが付いたら色を変える</li>
          <li>必須項目を目立たせる</li>
          <li>入力エラーを赤く表示する</li>
        </ul>
      </div>
      <p>placeholder:（プレースホルダー）</p>
      <p>
        (input placeholder="ユーザー名を入力" className="border p-2
        placeholder:text-gray-400"/)
      </p>
      <table>
        <input
          placeholder="ユーザー名を入力"
          className="border p-2 placeholder:text-gray-400"
        />
      </table>
      <p className="pt-4">focus:（入力中）</p>
      (rounded-md border p-2 focus:border-blue-500 focus:outline-none
      focus:ring-2 focus:ring-blue-300" /)
      <table>
        <input className="rounded-md border p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300" />
      </table>
      <p>入力欄をクリックすると以下が表示</p>
      <div className="p-4">
        <ul className="list-disc">
          <li>枠線が青</li>
          <li>外側に青いリング</li>
        </ul>
      </div>
      <p>checked:（チェック済み）</p>
      <p>
        (input type="checkbox" className="h-5 w-5 checked:accent-blue-500" /)
      </p>
      <div>
        <table>
          <input type="checkbox" className="h-5 w-5 checked:accent-blue-500" />
          Apple
          <input type="checkbox" className="h-5 w-5 checked:accent-blue-500" />
          Banana
          <input type="checkbox" className="h-5 w-5 checked:accent-blue-500" />
          Orange
        </table>
      </div>
      <p className="pt-4">required:（必須項目）</p>
      <p>(input required className="border p-2 required:border-red-500" /)</p>
      <div>
        <table>
          <input required className="border p-2 required:border-red-500" />
        </table>
      </div>
      <p className="pt-4">ラベルで使う例</p>
      <label>
        名前<span className="text-red-500">*</span>
      </label>
      <p className="pt-4">invalid:（入力エラー）</p>
      <p>入力内容が条件を満たさない場合に適用される</p>
      <p>
        (input type="email" required className="border p-2
        invalid:border-red-500 invalid:text-red-500" /)
      </p>
      <div>
        <table>
          <input
            type="email"
            required
            className="border p-2 invalid:border-red-500 invalid:text-red-500"
          />
        </table>
      </div>
      <p>メールアドレス以外を入力すると 枠線が赤になります。</p>
      <p className="pt-4">ラベルで使う例</p>
      <div>
        <table>
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full rounded-md border border-gray-300 p-3 placeholder:text-gray-400 invalid:border-red-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </table>
        <p>このコードには</p>
        <ul className="list-disc p-4">
          <li>Border</li>
          <li>Rounded</li>
          <li>Padding</li>
          <li>Placeholder</li>
          <li>Focus</li>
          <li>Invalid</li>
        </ul>
      </div>
      <p>ポイント</p>
      <p>focus をしっかり覚える</p>
      <div>
        <table>
          <input
            type="text"
            className="focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <p>チェックボックス</p>
          <p>
            ※チェックボックスやラジオボタンは、checked: よりも accent-*
            を使う場面が増えています
          </p>
          <p>これだけで、チェック時の色を変更できます。</p>
          <p>(input type="checkbox" className="accent-green-600" /)</p>
          <input type="checkbox" className="accent-green-600" />
          りんご
          <input type="checkbox" className="accent-green-600" />
          バナナ
          <input type="checkbox" className="accent-green-600" />
          オレンジ
        </table>
      </div>
    </div>
  );
}
