import { Link } from "react-router-dom";

export default function Etc6() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習6 Arbitrary Values（[]）(アービトラリー・バリューズ)
      </h1>
      <p>Arbitrary Valuesとは？</p>
      <p>Tailwindに用意されていない値を、その場だけ指定できる</p>
      <p>例</p>
      <p>w-[350px] → width:350px; の意味</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`className="w-[350px]"
className="mt-[37px]"
className="text-[15px]"`}</code>
        </pre>
      </div>
      <p className="pt-4">1. Width</p>
      <p>Tailwindには</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`w-64`}</code>
        </pre>
      </div>
      <p>がありますが、350pxはない</p>
      <p>※ 64/4=16rem=16x16=256px</p>
      <p className="pt-4">そこで</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="w-[350px] rounded bg-blue-500 p-4 text-white">
      Width 350px
</div>`}</code>
        </pre>
      </div>
      <p>w-[350px] rounded bg-blue-500 p-4 text-white</p>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="w-[350px] rounded bg-blue-500 p-4 text-white">
          Width 350px
        </div>
      </div>
      <p className="pt-4">2. Height</p>
      <p>h-[250px] w-64 rounded bg-green-500</p>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="h-[250px] w-64 rounded bg-green-500"></div>
      </div>
      <p className="pt-4">3. Margin</p>
      <p>通常 mt-4 だが微調整するときに使う</p>
      <p>※ mt-4 4/4=1rem=16px</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="mt-[37px] bg-blue-300 p-4">mt-[37px]</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="mt-[37px] bg-blue-300 p-4">mt-[37px]</div>
      </div>
      <p className="pt-4">4. Padding</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="bg-blue-300 p-[18px]">p-[18px]</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="bg-blue-300 p-[18px]">p-[18px]</div>
      </div>
      <p className="pt-4">5. Font Size</p>
      <p>※ デザインカンプに 15px と書かれている場合</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<p className="text-[15px]">text-[15px]</p>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <p className="text-[15px]">text-[15px]</p>
      </div>
      <p className="pt-4">6. Border Radius</p>
      <p>Tailwindにない角丸も簡単</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="rounded-[18px] bg-blue-300 p-4">
  rounded-[18px]
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="rounded-[18px] bg-blue-300 p-4">rounded-[18px]</div>
      </div>
      <p className="pt-4">7. Color</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="bg-[#4F46E5] p-4">bg-[#4F46E5]</div>
<p className="p-4 text-[#E11D48]">text-[#E11D48]</p>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="bg-[#4F46E5] p-4">bg-[#4F46E5]</div>
        <p className="p-4 text-[#E11D48]">text-[#E11D48]</p>
      </div>
      <p className="pt-4">8. RGBA</p>
      <p>半透明にする、モーダル背景などで便利</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="bg-[rgba(0,0,0,0.5)] p-4">
  bg-[rgba(0,0,0,0.5)]
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="bg-[rgba(0,0,0,0.5)] p-4">bg-[rgba(0,0,0,0.5)]</div>
      </div>
      <p className="pt-4">9. Grid</p>
      <p>親: grid grid-cols-[200px_1fr] gap-4</p>
      <p>※ コラム幅を200px固定(Sidebar) + 残り全て(Main) に指定</p>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <aside className="bg-gray-200 p-4">Sidebar</aside>
          <main className="bg-blue-200 p-4">Main</main>
        </div>
      </div>
      <p className="pt-4">10. Position</p>
      <p>ヘッダー高さが72pxの場合</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="top-[72px]"></div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="top-[72px] bg-blue-300 p-4">top-[72px]</div>
      </div>
      <p className="pt-4">11. Z-index</p>
      <p>特殊な場合に使用</p>
      <p>※ 通常は z-10, 20, 50 で十分</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="z-[100] bg-blue-300 p-4">z-[100]</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="top-[72px]">
          <div className="z-[100] bg-blue-300 p-4">z-[100]</div>
        </div>
      </div>
      <p className="pt-4">12. Shadow</p>
      <p>※ パラメーターは、_(アンダーバー)で繋ぐ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="shadow-[0_8px_24px_4px_rgba(0,0,0,0.2)]"></div>`}</code>
        </pre>
      </div>
      <p>各パラメータの意味</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
            <td className="border p-2">効果</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">0</td>
            <td className="border p-2">offset-x</td>
            <td className="border p-2">左右には影をずらさない</td>
          </tr>
          <tr>
            <td className="border p-2">8px</td>
            <td className="border p-2">offset-y</td>
            <td className="border p-2">下方向へ8px影をずらす</td>
          </tr>
          <tr>
            <td className="border p-2">24px</td>
            <td className="border p-2">blur-radius</td>
            <td className="border p-2">
              24pxぼかす（数字が大きいほどふんわり）
            </td>
          </tr>
          <tr>
            <td className="border p-2">4px</td>
            <td className="border p-2">spread-radius(省略可)</td>
            <td className="border p-2">4px分、影を外側へ広げる</td>
          </tr>
          <tr>
            <td className="border p-2">rgba(0,0,0,0.2)</td>
            <td className="border p-2">色</td>
            <td className="border p-2">黒色・透明度20%</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="bg-blue-300 p-4 shadow-[0_8px_24px_4px_rgba(0,0,0,0.2)]">
          shadow-[0_8px_24px_4px_rgba(0,0,0,0.2)]
        </div>
      </div>
      <p className="pt-4">13. Background Image</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="
          h-64 
          bg-[url('https://picsum.photos/1200/600')] 
          bg-cover 
          bg-center">
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="h-64 bg-[url('https://picsum.photos/1200/600')] bg-cover bg-center"></div>
      </div>
      <p className="pt-4">14. calc()</p>
      <p>CSSそのまま書ける、ヘッダー・サイドバーなどで便利</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="
          w-[calc(100%-80px)] 
          bg-blue-300 
          p-4">
            w-[calc(100%-80px)]
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="w-[calc(100%-80px)] bg-blue-300 p-4">
          w-[calc(100%-80px)]
        </div>
      </div>
      <p className="pt-4">15. CSS変数</p>
      <p>TailwindとCSS変数を組み合わせられる</p>
      <p>index.css に</p>
      <p>--primary: #2563eb;</p>
      <p>--secondary: #f97316;</p>
      <p>を指定しておく</p>
      <p className="pt-4">index.css</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`@tailwindbase;
@tailwindcomponents;
@tailwindutilities;

:root {
	--primary: #2563eb;
	--secondary: #f97316;
}`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="bg-[var(--primary)] p-4">
  bg-[var(--primary)] 
<div className="bg-[var(--secondary)] p-4">
  bg-[var(--secondary)] </div>
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="bg-[var(--primary)] p-4">bg-[var(--primary)] </div>
        <div className="bg-[var(--secondary)] p-4">bg-[var(--secondary)] </div>
      </div>
      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>bg-[...]：Arbitrary Values（任意値）で背景色を指定</li>
        <li>var(--primary)：CSS変数 -primary の値を取得</li>
        <li>最終的なCSSは background-color: var(--primary);</li>
        <li>
          テーマカラーやダークモード対応、ブランドカラーの一元管理で非常によく使われる書き方。
        </li>
      </ul>
      <p className="pt-4">よく使う例1</p>
      <p>カード</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="
          max-w-[420px] 
          rounded-xl 
          bg-blue-300 
          p-4 
          shadow
">カード
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="max-w-[420px] rounded-xl bg-blue-300 p-4 shadow">
          カード
        </div>
      </div>
      <p className="pt-4">よく使う例2</p>
      <p>Grid</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="grid grid-cols-[280px_1fr] gap-8">
  <div className="bg-blue-300 p-4">Sidebar</div>
  <div className="bg-green-300 p-4">Main</div>
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="grid grid-cols-[280px_1fr] gap-8">
          <div className="bg-blue-300 p-4">Sidebar</div>
          <div className="bg-green-300 p-4">Main</div>
        </div>
      </div>
      <p className="pt-4">よく使う例3</p>
      <p>デザインカンプ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<p className="
          text-[15px] 
          leading-[22px]
">
          text-[15px] leading-[22px]
</p>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <p className="text-[15px] leading-[22px]">text-[15px] leading-[22px]</p>
      </div>
      <p className="pt-4">よく使う例4</p>
      <p>角丸</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="
          rounded-[28px] 
          bg-blue-300 
          p-4
">
          rounded-[28px]
</div>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <div className="rounded-[28px] bg-blue-300 p-4">rounded-[28px]</div>
      </div>
      <p className="pt-4">Arbitrary Properties</p>
      <p>さらに高度な使い方として、CSSプロパティそのものを指定できます</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="[scrollbar-gutter:stable]"></div>`}</code>
        </pre>
      </div>
      <p className="pt-4">これは</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`scrollbar-gutter: stable;`}</code>
        </pre>
      </div>
      <p>になり、他にも</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="
  [mask-image:linear-gradient(to_bottom,black,transparent)]">
</div>`}</code>
        </pre>
      </div>
      <p>も可能</p>
      <p className="pt-4">よくある失敗</p>
      <p>× 何でも[]にする</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="mt-[16px]"></div>`}</code>
        </pre>
      </div>
      <p className="pt-4">既存クラスを優先する</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="mt-4"></div>`}</code>
        </pre>
      </div>
      <p className="pt-4">○ 必要な時だけ</p>
      <p>※ 18pxなら意味がある</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="mt-[18px]"></div>`}</code>
        </pre>
      </div>
      <p className="pt-4">× 同じ値を何度も使う</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`text-[15px]
text-[15px]
text-[15px]
text-[15px]`}</code>
        </pre>
      </div>
      <p className="pt-4">何度も出てくるなら、以下を検討</p>
      <ul className="list-disc p-4">
        <li>Tailwindのテーマに追加する</li>
        <li>デザインルールを見直す</li>
      </ul>
      <p className="pt-4">○ 一度だけ使う</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`w-[382px]`}</code>
        </pre>
      </div>
      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>
          Arbitrary
          Values（[]）は「Tailwindにない値」をその場だけ指定できる機能。
        </li>
        <li>
          まずは Tailwind の標準クラスを使い、足りない場合だけ [] を使う。
        </li>
        <li>
          grid-cols-[200px_1fr] や text-[15px] は実務でも非常によく使われる。
        </li>
        <li>
          同じ [] の値を何度も使うなら、テーマ化やデザインの見直しを検討する。
        </li>
        <li>
          Arbitrary Properties（[scrollbar-gutter:stable]
          など）も使えるが、まずは値を指定する [] をしっかり覚える。
        </li>
      </ul>

      <p className="pt-4">実務で最もよく使う5つ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`w-[350px]
text-[15px]
rounded-[18px]
grid-cols-[240px_1fr]
top-[72px]`}</code>
        </pre>
      </div>
    </div>
  );
}
