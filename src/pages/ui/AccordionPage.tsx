import Accordion from "@/components/ui/accordion/Accordion";
import { Link } from "react-router-dom";

//ここが最重要、この配列がAccordionの設計そのものになる
//データ → UI
const items = [
  {
    //id は一意の値で識別子になってる、あとでopenItemと比較する
    //openItem → "react" ならReactだけ開く
    id: "react",
    //ボタン部分になる
    title: "Reactとは？",
    //本文になり、開いた時だけ表示される
    //childrenn部分、なんでも表示できる、children:ReactNode だから
    content: (
      <p>Reactはユーザーインターフェースを構築するためのライブラリです。</p>
    ),
  },
  {
    id: "typescript",
    title: "TypeScriptとは？",
    content: <p>TypeScriptはJavaScriptに型を追加した言語です。</p>,
  },
  {
    id: "tailwind",
    title: "Tailwind CSSとは？",
    // 「追加」 これにすると、AccordionItemでdisabled=true → button disabled となる、つまり押せなくなる
    disabled: true,
    content: (
      <p>Tailwind CSSはユーティリティファーストなCSSフレームワークです。</p>
    ),
  },
];

export default function AccordionPage() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="text-2xl font-bold">React UI Components Accordion</h1>

      {/* 画面中央に寄せています。 */}
      <div className="mx-auto max-w-xl space-y-6 p-8">
        {/* 一番大事、これだけ 
        内部では、items.map(...) が実行され、items → 3件 作られる
        つまり、AccordionItem が3件できる
        配列 → UI に変換している、Reactらしい設計
        ここでの肝は、items というデータを渡している → 渡した数分コンポーネントができる
        
        [追加] defaultValue="react"にしたので、最初はReactを開く
        collapsible にしたので、開いている項目を再クリックしたら閉じる*/}
        {/* <Accordion items={items} defaultValue="react" collapsible /> */}

        {/* 比較のため2つのAccordionを表示 */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">1つだけ開く</h2>

          {/* 最初はReactが開いている、他をクリックするとそちらが開き、Reactは閉じる */}
          <Accordion items={items} defaultValue="react" collapsible />
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">複数開く</h2>

          {/* 最初は何も開いていない、クリッしたもの全てが開く */}
          <Accordion items={items} multiple />
        </section>
      </div>
    </div>
  );
}
