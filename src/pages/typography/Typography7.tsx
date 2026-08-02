import { Link } from "react-router-dom";

export default function Typography7() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 練習7 Webフォント
      </h1>
      <p>(方法1)Google Fonts を使う</p>
      <p>例: Inter を使う</p>
      <p className="pt-4">1. index.html の head に追加。</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link 
	href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" 
	rel="stylesheet"
/>`}
          </code>
        </pre>
      </div>
      <p className="pt-4">2. tailwind.config.js を編集</p>
      <p>extend: {}内にfontFamily: としてinter を追加</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`module.exports= {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter","sans-serif"],
      },
    },
  },
}`}
          </code>
        </pre>
      </div>
      <p className="pt-4">3. 使用する</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`<h1 className="font-inter text-4xl">
  Tailwind CSS
</h1>`}
          </code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <p>フォント: inter</p>
        <h1 className="font-inter text-4xl">Tailwind CSS</h1>
      </div>
      <p className="mt-4">(方法2)Tailwind v4</p>
      <p>Tailwind v4ではCSSだけで設定可能</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`@import "tailwindcss"; 
@theme {
  --font-inter:"Inter",sans-serif;
}`}
          </code>
        </pre>
      </div>
      <p className="mt-4">使用は同じ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`<p className="font-inter">
  Hello
</p>`}
          </code>
        </pre>
      </div>

      <p className="pt-4">(方法3)ローカルフォント</p>
      <p>ダウンロードしたフォントを使用可能 → Notionのまとめ参照</p>

      <p className="pt-4">(方法4)CSSで直接指定</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`<p style={{ fontFamily: "Inter" }}>
  Hello
</p>`}
          </code>
        </pre>
      </div>

      <p className="pt-4">
        Tailwindを使うなら**font-interのようなクラスにまとめた方が管理しやすい**
      </p>

      <p className="pt-4">フォントの読み込み方法について</p>
      <p>
        最近のReact + Viteプロジェクトでは、index.html に link
        を直接書くよりも、CSSで @import を使って読み込むケースも増えている
      </p>
      <p className="pt-4">src/index.css の先頭に追加</p>
      <p>※ Inter と Noto Sans JP を同時に読み込む例</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </code>
        </pre>
      </div>

      <p className="pt-4">日本語サイトでおすすめのWebフォント</p>
      <p>日本語は文字数が多いため、対応フォントを選ぶことが重要</p>
      <ul className="list-disc p-4">
        <li>
          Noto Sans
          JP：最も定番。読みやすく、多くのWebサイトで採用されています。
        </li>
        <li>M PLUS 1p：やわらかい印象でUIにも使いやすいです。</li>
        <li>Zen Kaku Gothic New：モダンで見やすいゴシック体です。</li>
        <li>
          BIZ UDPゴシック：可読性を重視したフォントで、長文にも向いています。
        </li>
      </ul>

      <p>※ Inter と 上記4書体を同時に読み込む例</p>
      <p>src/index.css</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+JP:wght@100..900&family=M+PLUS+1p:wght@100;300;400;500;700;800&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&family=BIZ+UDPGothic:wght@400;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </code>
        </pre>
      </div>

      <p className="mt-4">tailwind.config.js</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
        mplus: ["M PLUS 1p", "sans-serif"],
        zen: ["Zen Kaku Gothic New", "sans-serif"],
        biz: ["BIZ UDPGothic", "sans-serif"],
      },
    },
  },

  plugins: [],
};`}
          </code>
        </pre>
      </div>

      <p className="mt-4">使用例</p>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="space-y-4 text-2xl">
          <p className="text-base">(font-inter)</p>
          <p className="font-inter">Inter - Hello World 123</p>

          <p className="text-base">(font-noto)</p>
          <p className="font-noto">Noto Sans JP - あいうえお ABC123</p>

          <p className="text-base">(font-mplus)</p>
          <p className="font-mplus">M PLUS 1p - あいうえお ABC123</p>

          <p className="text-base">(font-zen)</p>
          <p className="font-zen">Zen Kaku Gothic New - あいうえお ABC123</p>

          <p className="text-base">(font-biz)</p>
          <p className="font-biz">BIZ UDPGothic - あいうえお ABC123</p>
        </div>
      </div>

      <p className="mt-4">デフォルトフォントの変更方法</p>
      <p>tailwind.config.js</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>
            {`fontFamily: {
  sans: ["Noto Sans JP", "sans-serif"],

  inter: ["Inter", "sans-serif"],
  noto: ["Noto Sans JP", "sans-serif"],
  mplus: ["M PLUS 1p", "sans-serif"],
  zen: ["Zen Kaku Gothic New", "sans-serif"],
  biz: ["BIZ UDPGothic", "sans-serif"],
},`}
          </code>
        </pre>
      </div>

      <p>この設定で、</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<p className="font-sans">`}</code>
        </pre>
      </div>

      <p>だけで Noto Sans JP が使われます。</p>
      <div className="mt-4 border border-blue-500 p-4">
        <p>(font-sans) ※ これだけでNoto Sans JPが適用</p>
        <p className="font-sans text-xl">あいうえお ABC123</p>
      </div>

      <p className="pt-4">
        Tailwind CSS v4 に移行した場合は、tailwind.config.js を使わず、CSSの
        @theme でフォントを定義する方法が推奨されています。
      </p>
    </div>
  );
}
