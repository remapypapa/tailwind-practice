import Accordion from "@/components/ui/accordion/Accordion";
import { useState } from "react";
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
    // 「追加」 disabled: trueにすると、AccordionItemでdisabled=true → button disabled となる、つまり押せなくなる
    disabled: true,
    content: (
      <p>Tailwind CSSはユーティリティファーストなCSSフレームワークです。</p>
    ),
  },
];

export default function AccordionPage() {
  // openItems は現在開いているAccordionのIDを持つ
  // 「"react"」なら Reactとは？ → 開いている、複数開いている場合は、["react", "typescript"]
  // string[]は文字列の配列、([])は初期値、つまり何も開いていない状態になる
  // setOpenItems は openItemsを変更するための関数、変更した場合は再レンダリング → 画面更新
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <div className="mx-auto max-w-xl space-y-8 p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="text-2xl font-bold">React UI Components Accordion</h1>

      {/* AccordionコンポーネントにPropsを渡す */}
      <Accordion
        //このページ(親)のitems → Accordion(子)のitemsへ渡している
        items={items}
        //現在どの項目が開いているかをAccordionに教える
        value={openItems}
        //Accordion側で開閉状態が変わったら、setOpenItemsを呼んでくださいの意味
        onChange={setOpenItems}
        //multiple={true} の意味、["react", "typescript"] が可能
        //これがないと、開くのは1つだけ
        multiple
      />

      <div className="rounded-md border p-4">
        <p className="font-medium">現在開いている項目</p>

        {/* Accordionの現在の状態を確認するためのデバッグ表示 */}
        <p className="mt-2 text-sm text-gray-600">
          {/* openItems.length は配列の要素数
          要素数が0より大きければ、要素を , で区切って文字列を作成 (三項演算子) 
          なければ、なし 表示*/}
          {openItems.length > 0 ? openItems.join(", ") : "なし"}
        </p>
      </div>
    </div>
  );
}

//このコードのデータの流れ
/* 
items
            │
            ▼
    ┌────────────────┐
    │    Accordion   │
    └────────────────┘
            │
       ユーザー操作
            │
            ▼
       onChange(...)
            │
            ▼
      setOpenItems(...)
            │
            ▼
       openItems更新
            │
       ┌────┴─────┐
       ▼          ▼
  Accordion    状態表示
   に反映       に反映

Accordionの状態をAccordion自身に完全に任せているわけではありません。
AccordionPage
が状態を管理しています。

AccordionPage
│
│  openItems
│
├───────────────┐
│               │
▼               ▼
Accordion       状態表示
│
│ value
│ onChange
│
▼
ユーザー操作

AccordionPage が親。
Accordion が子。

親から子へ、

value={openItems}

で現在の状態を渡します
子から親へ、

onChange={setOpenItems}

を通して変更を伝えます。

これはReactで非常によく使う、
状態を親で管理する設計
   */
