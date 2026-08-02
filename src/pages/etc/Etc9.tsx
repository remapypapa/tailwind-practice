import { cn } from "@/lib/utils";
import { clsx } from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Etc9() {
  //clsx表示確認用
  const [active, setActive] = useState(true);

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習9 clsx・tailwind-merge
      </h1>

      <p>これまで</p>
      <p>※ 条件が少ない時は問題ない</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`rounded px-4 py-2 \${
            active ? "bg-blue-500" : "bg-gray-500"
          }\`}`}</code>
        </pre>
      </div>

      <p>条件が増えると読みづらくなる</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`
  rounded
  px-4
  py-2 \${
  active?"bg-blue-500":"bg-gray-500"}
  \${disabled?"opacity-50":""}
  \${error?"border-red-500":""}
\`}`}</code>
        </pre>
      </div>

      <p className="pt-4">clsxとは？</p>
      <p>条件付きclassNameを読みやすく書くためのライブラリ</p>

      <p className="pt-4">インストール</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`npm install clsx`}</code>
        </pre>
      </div>

      <p className="pt-4">1. 一番基本</p>
      <p>今まで</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`rounded px-4 py-2 \${
            active ? "bg-blue-500" : "bg-gray-500"
          }\`}`}</code>
        </pre>
      </div>

      <p>clsx なら</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx from "clsx";
className={clsx(
	"rounded px-4 py-2",
  active ? "bg-blue-500" : "bg-gray-500"
)}`}</code>
        </pre>
      </div>

      <p>clsx使用</p>
      <div className="mb-4 border border-blue-500 p-4">
        <p>
          ※ Toggleをクリックすることで、変数
          activeの値が変わり下のdivのbgの色が変化する
        </p>
        <button
          onClick={() => setActive(!active)}
          className="mb-4 rounded bg-black px-4 py-2 text-white"
        >
          Toggle
        </button>

        <div
          className={clsx(
            "rounded px-4 py-2 text-white",
            active ? "bg-blue-500" : "bg-gray-500",
          )}
        >
          変数 active の値 → {String(active)}
        </div>
      </div>

      <p className="pt-4">2. trueだけ追加</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx from "clsx";
	className={clsx(
		"rounded px-4 py-2",
	    active && "bg-blue-500",
	    disabled && "opacity-50"
)}`}</code>
        </pre>
      </div>

      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`active = true
disabled = false`}</code>
        </pre>
      </div>
      <p>なら</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`rounded
px-4
py-2
bg-blue-500`}</code>
        </pre>
      </div>

      <p>だけになる</p>

      <p className="pt-4">3. 複数条件</p>

      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx from "clsx";

className={clsx(
	"rounded-lg",
	"px-4",
	"py-2",
    active && "bg-blue-500",
    error && "border-red-500",
    disabled && "cursor-not-allowed opacity-50"
)}`}</code>
        </pre>
      </div>

      <p>※ 実務ではこの書き方が多い！</p>

      <p className="pt-4">4. オブジェクト形式</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx from "clsx";

className={clsx(
	"rounded px-4 py-2",
  {
	  "bg-blue-500": active,
	  "bg-gray-500": !active,
	  "opacity-50": disabled,
  }
)}`}</code>
        </pre>
      </div>

      <p>※ こちらも人気がある</p>

      <p className="pt-4">clsxのメリット</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`const active = false;`}</code>
        </pre>
      </div>

      <p className="pt-4">なら</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`active && "bg-blue-500""`}</code>
        </pre>
      </div>

      <p className="pt-4">は自動的に消えます。つまり、</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`clsx(
  "rounded",
  false,
  undefined,
  null,
  "",
  "text-white"
)`}</code>
        </pre>
      </div>

      <p> ↓ </p>
      <p>結果</p>

      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`rounded text-white`}</code>
        </pre>
      </div>
      <p>になる、自分で filter(Boolean) を書く必要がない</p>

      <p className="pt-4">tailwind-mergeとは？</p>
      <p>・Tailwind専用のライブラリ</p>
      <p>・競合するクラスを整理してくれる。</p>

      <p className="pt-4">tailwind-mergeとは？</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`npm install tailwind-merge`}</code>
        </pre>
      </div>

      <p className="pt-4">1. 競合例</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className="
bg-red-500
bg-blue-500
"`}</code>
        </pre>
      </div>
      <p>どちらが有効か？</p>

      <p>答え</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`最後の

bg-blue-500`}</code>
        </pre>
      </div>

      <p>でも、コードを読む人には分かりにくい</p>
      <p className="pt-4">tailwind-mergeなら</p>

      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import { twMerge } from "tailwind-merge";

twMerge(
  "bg-red-500",
  "bg-blue-500"
)`}</code>
        </pre>
      </div>

      <p>結果</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-blue-500`}</code>
        </pre>
      </div>
      <p>だけになる</p>

      <p className="pt-4">2. Padding</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`twMerge(
  "p-2",
  "p-8"
)`}</code>
        </pre>
      </div>

      <p>結果</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`p-8`}</code>
        </pre>
      </div>

      <p className="pt-4">3. Rounded</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`twMerge(
  "rounded",
  "rounded-xl"
)`}</code>
        </pre>
      </div>

      <p>結果</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`rounded-xl`}</code>
        </pre>
      </div>

      <p className="pt-4">clsxだけでは解決しない</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`clsx(
  "bg-red-500",
  "bg-blue-500"
)`}</code>
        </pre>
      </div>

      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-red-500 bg-blue-500`}</code>
        </pre>
      </div>

      <p>両方残る</p>

      <p className="pt-4">tailwind-mergeなら</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`twMerge(
  clsx(
    "bg-red-500",
    "bg-blue-500"
  )
)`}</code>
        </pre>
      </div>

      <p>結果</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-blue-500`}</code>
        </pre>
      </div>

      <p>実務では両方使う</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx from "clsx";
import { twMerge } from "tailwind-merge";

className={twMerge(
  clsx(
    "rounded px-4 py-2",
    active && "bg-blue-500",
    disabled && "opacity-50",
    className
  )
)}`}</code>
        </pre>
      </div>

      <p>よくあるButton</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          "rounded-lg bg-blue-500 px-4 py-2 text-white",
          className
        )
      )}
    >
      {children}
    </button>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">使用側</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Button>
  保存
</Button>

<Button className="bg-red-500">
  削除
</Button>`}</code>
        </pre>
      </div>

      <p>内部は</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-blue-500`}</code>
        </pre>
      </div>

      <p>だが、外から</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-red-500`}</code>
        </pre>
      </div>

      <p>を渡すと、tailwind-mergeが</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-red-500`}</code>
        </pre>
      </div>

      <p>だけを残す</p>

      <p className="pt-4">utils.ts を作る</p>
      <p>※ 最近のReactプロジェクトではよく見る</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</code>
        </pre>
      </div>

      <p>使用</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import { cn } from "@/lib/utils";

<div
  className={cn(
    "rounded",
    active && "bg-blue-500",
    className
  )}
>`}</code>
        </pre>
      </div>
      <p>
        ※ この cn() という名前は、現在のReact +
        Tailwindプロジェクトで広く使われている
      </p>

      <p className="pt-4">よくある失敗</p>
      <p>× テンプレートリテラルが長すぎる</p>
      <p>※ 読みにくい</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`
...
...
...
...
...
\`}`}</code>
        </pre>
      </div>

      <p className="pt-4">○ clsx</p>
      <p>※ 見やすくなる</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`clsx(
  "...",
  "...",
  active && "...",
)`}</code>
        </pre>
      </div>

      <p className="pt-4">× tailwind-mergeを使わない</p>
      <p>※ 両方残る</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-red-500

bg-blue-500`}</code>
        </pre>
      </div>

      <p className="pt-4">○ twMerge</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`twMerge(
  "bg-red-500",
  "bg-blue-500"
)`}</code>
        </pre>
      </div>

      <p className="pt-4">結果</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`bg-blue-500`}</code>
        </pre>
      </div>
      <p>だけ残る</p>

      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>clsx は条件付き className を読みやすく書くためのライブラリ。</li>
        <li>tailwind-merge は競合するTailwindクラスを整理するライブラリ</li>
        <li>実務では clsx と tailwind-merge を組み合わせて使うことが多い。</li>
        <li>cn() 関数として共通化しているプロジェクトも非常に多い。</li>
      </ul>

      <p className="pt-4">実務でよく見るコード</p>
      <p>
        ※ Next.js・React・Tailwind
        を使ったプロジェクトで非常によく見かける定番パターン
      </p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import { cn } from "@/lib/utils";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  className,
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg bg-blue-500 px-4 py-2 text-white",
        className
      )}
    >
      {children}
    </button>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">cn の使用例</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`import { cn } from "@/lib/utils";

export default function App() {
  const active = true;

  return (
    <div
      className={cn(
        "rounded p-4 text-white",
        active && "bg-blue-500"
      )}
    >
      Hello Tailwind
    </div>
  );
}`}</code>
        </pre>
      </div>

      <div className="mb-4 border border-blue-500 p-4">
        <div className={cn("rounded p-4 text-white", active && "bg-blue-500")}>
          Hello Tailwind
        </div>
      </div>
    </div>
  );
}
