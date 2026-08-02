import { Link } from "react-router-dom";

export default function Etc7() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習7 条件付き className（React）
      </h1>

      <p>条件付き classNameとは？</p>
      <p>ReactではJavaScriptの式を使って、クラスを動的に変更できる</p>
      <p>例</p>
      <p>クリック</p>
      <p> ↓ </p>
      <p>色を変える</p>
      <p> ↓ </p>
      <p>文字を変える</p>
      <p> ↓ </p>
      <p>影をつける</p>

      <p className="pt-4">1. 三項演算子（最重要）</p>
      <p>※ 最も基本的な書き方</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default functionExample() {
	const isActive =true;
	return (
	  <button 
			className={
				isActive
					? "rounded bg-blue-500 px-4 py-2 text-white"
					: "rounded bg-gray-400 px-4 py-2 text-white"
      }
      >
        Button
      </button>
  );
}`}</code>
        </pre>
      </div>
      <p className="mt-4">ポイント</p>
      <p>条件? "真": "偽"</p>

      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
  const isActive = true;

  return (
    <button
      className={\`rounded px-4 py-2 text-white \${
        isActive ? "bg-blue-500" : "bg-gray-400"
      }\`}
    >
      Button
    </button>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">2. 一部だけ切り替える</p>
      <p>※ 実務ではこちらの方が多い</p>
      <p>共通部分を1回だけ書けるので見やすくなる</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const isActive = true;
	return (
		<button 
			className={\`rounded px-4 py-2 text-white \${
        isActive ? "bg-blue-500" : "bg-gray-400"
      }\`}
    >
      Button
    </button>
  );
}
}`}</code>
        </pre>
      </div>

      <p className="pt-4">3. 論理演算子（&&）</p>
      <p>条件が真のときだけ追加します。</p>

      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const isError = true;
	return (
		<p className={isError? "text-red-500": ""}>
      エラーメッセージ
    </p>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">4. 配列 + join（おすすめ）</p>
      <p>複数条件がある場合に便利</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const isActive = true;
	const disabled = false;
	const className = [
		"rounded",
		"px-4",
		"py-2",
		"text-white",
		isActive && "bg-blue-500",
		disabled && "opacity-50 cursor-not-allowed",
  ]
	  .filter(Boolean)
	  .join(" ");
	return <button className={className}>Button</button>;
}`}</code>
        </pre>
      </div>

      <p className="pt-4">結果</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`rounded
px-4
py-2
text-white
bg-blue-500`}</code>
        </pre>
      </div>
      <p>だけが結合される</p>

      <p className="pt-4">5. 複数条件</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
  const isActive = true;
  const isError = false;

  return (
    <button
      className={\`
        rounded
        px-4
        py-2
        text-white
        \${isActive ? "bg-blue-500" : "bg-gray-500"}
        \${isError ? "border-2 border-red-500" : ""}
      \`}
    >
      Button
    </button>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">6. selected状態</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const selected = true;
	return (
		<div 
			className={\`
        rounded-lg
        border
        p-4
        \${
	        selected
	        ? "border-blue-500 bg-blue-50"
	        : "border-gray-300"
        }
      \`}
    >
      Card
      </div>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">7. disabled状態</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const disabled = true;
	return (
		<button
			disabled={disabled}
			className={\`
        rounded
        px-4
        py-2
        text-white
        \${
	        disabled
	        ? "cursor-not-allowed bg-gray-400"
	        : "bg-blue-500 hover:bg-blue-600"
        }
      \`}
   >
      Save
   </button>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">8. エラー表示</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const hasError = true;
		return (
			<input
				className={\`
	        rounded
	        border
	        p-2
	        \${
		        hasError
		        ? "border-red-500"
		        : "border-gray-300"
            }
        \`}
     />
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">9. ダークモード切り替え</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const dark = true;
	return (
		<div 
			className={\`
        p-6
        \${
        dark
	        ? "bg-gray-900 text-white"
	        : "bg-white text-black"
        }
      \`}>
      Content</div>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">10. タブ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`export default function Example() {
	const current = 2;
	return (
		<button
			className={
				current===2
				? "border-b-2 border-blue-500 text-blue-600"
				: "text-gray-500"
                }
        >
          Profile
        </button>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">よくある失敗</p>
      <p>× 全部を書き換える</p>
      <p>※ 同じ部分を何度も書いています。</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={
  active
	  ? "rounded px-4 py-2 bg-blue-500 text-white"
	  : "rounded px-4 py-2 bg-gray-500 text-white"
}`}</code>
        </pre>
      </div>

      <p className="pt-4">○ 共通部分をまとめる</p>
      <p>こちらの方が保守しやすくなる</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`rounded px-4 py-2 text-white \${
	active ? "bg-blue-500": "bg-gray-500"
}\`}`}</code>
        </pre>
      </div>

      <p className="pt-4">× 条件が多すぎる</p>
      <p>読みにくくなる</p>
      <p>そのような場合は、次章で学ぶ clsx が役立ちます。</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`
...
\${a ? ...}
\${b ? ...}
\${c ? ...}
\${d ? ...}
\`}`}</code>
        </pre>
      </div>

      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>Reactでは className を動的に変更できる。</li>
        <li>共通クラスは固定で書き、変わる部分だけ条件分岐するのが基本。</li>
        <li>三項演算子は最も基本的な方法。</li>
        <li>条件が増えてきたら、配列や clsx を使うと読みやすくなる。</li>
      </ul>

      <p className="pt-4">実務で最もよく使う3パターン</p>
      <p>1. 三項演算子（基本）</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={\`rounded px-4 py-2 \${
	active ? "bg-blue-500": "bg-gray-500"
}\`}`}</code>
        </pre>
      </div>

      <p>2. 配列</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`const className= [
	"rounded",
	"px-4",
	active && "bg-blue-500",
]
	.filter(Boolean)
	.join(" ");`}</code>
        </pre>
      </div>

      <p>3. clsx</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className={clsx(
	"rounded px-4 py-2",
  active && "bg-blue-500",
  disabled && "opacity-50"
)}`}</code>
        </pre>
      </div>
    </div>
  );
}
