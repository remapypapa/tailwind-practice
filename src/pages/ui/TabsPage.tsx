import Tabs from "@/components/ui/tabs/Tabs";
import TabsContent from "@/components/ui/tabs/TabsContent";
import TabsList from "@/components/ui/tabs/TabsList";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TabsPage() {
  //重要、状態を持つ = 親がStateを持っている
  /*Tabクリック
   ↓
Tabs
   ↓
onChange("typescript")
   ↓
TabsPage
   ↓
setActiveTab("typescript")
   ↓
再レンダリング
   ↓
Tabsにvalue="typescript"
   ↓
TypeScript Panel表示

という流れになり、これがReactにおける Stateのリフトアップ（State Lifting） の基本的な考え方
複数のUIで同じStateを使いたいなら、共通の親へStateを持ち上げる
*/
  //activeTabの初期値は、"react"、つまり読み込み時はReact タブが開いている
  const [activeTab, setActiveTab] = useState("react");
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">React UI Components Tabs</h1>
      <div>
        <div className={cn("p-8")}>
          {/* <h1 className={cn("mb-6 text-2xl font-bold")}>Tabs</h1> */}

          <p className="bg-red-600 p-2 text-white">現在選択中: {activeTab}</p>

          <Tabs value={activeTab} onChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="react">React</TabsTrigger>

              <TabsTrigger value="typescript">TypeScript</TabsTrigger>

              <TabsTrigger value="tailwind" disabled>
                Tailwind CSS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="react">
              <h2 className={cn("mb-2 text-lg font-bold")}>React</h2>

              <p>Reactの説明です。</p>
            </TabsContent>

            <TabsContent value="typescript">
              <h2 className={cn("mb-2 text-lg font-bold")}>TypeScript</h2>

              <p>TypeScriptの説明です。</p>
            </TabsContent>

            <TabsContent value="tailwind">
              <h2 className={cn("mb-2 text-lg font-bold")}>Tailwind CSS</h2>

              <p>Tailwind CSSの説明です。</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

/* 
この設計にすると、UIを自由に組み立てられるようになる

<TabsTrigger value="react">
  React
</TabsTrigger>

を
<TabsTrigger value="react">
  <span>React</span>
  <Badge>New</Badge>
</TabsTrigger>

のようにできる

<TabsTrigger value="react">
  <Icon />
  React
</TabsTrigger>

これも可能
そして、

<TabsContent value="react">
  ...
</TabsContent>

も自由なReactNodeを受け取れる

今回の設計
                    Tabs
                     │
             activeTab / onChange
                     │
                  Context
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
      TabsTrigger           TabsContent
          │                     │
          │ value               │ value
          ↓                     ↓
      "react"               "react"
          │                     │
          └─────── 一致 ─────────┘

TabsTrigger value="react"
と
TabsContent value="react"
が
"react"
という同じ値によって関連付けられてい

id
 ↓
Tab ↔ Panel

という設計を、コンポーネントレベルに発展させたもの

今回の実装にはまだ改善点がある

<TabsTrigger value="react">
  React
</TabsTrigger>

<TabsContent value="typescript">
  TypeScript
</TabsContent>

のように、対応関係を間違えてもTypeScriptは検出できません。

<Tabs>
  <TabsTrigger value="react" />
</Tabs>

だけでも動いてしまいます。

Tabs全体として正しい構造を強制する仕組み
までは作っていません。

今回重要なのは
<Tabs>
  <TabsList>
    <TabsTrigger />
  </TabsList>

  <TabsContent />
</Tabs>

という**Compound Component（複合コンポーネント）**という考え方
これはReactのUIライブラリで非常によく登場する設計パターン
*/
