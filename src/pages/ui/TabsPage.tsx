//全体の状態管理・Context提供
import Tabs from "@/components/ui/tabs/Tabs";
//Tabに対応する内容
import TabsContent from "@/components/ui/tabs/TabsContent";
//Tabをまとめる
import TabsList from "@/components/ui/tabs/TabsList";
//クリックするTab
import TabsTrigger from "@/components/ui/tabs/TabsTrigger";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

//ページコンポーネント
export default function TabsPage() {
  //重要、状態を持つ = 親がStateを持っている = 状態の所有者がTabsPage、よって Controlled Component
  /* 
   Tabs.tsxのState 
   const [internalValue, setInternalValue] =
  useState(defaultValue);

  これは、Uncontrolledとして使う場合に必要
  <Tabs defaultValue="react">とした場合、
    TabsPage
      │
      │ 状態を持っていない
      ↓
    Tabs
      │
      └── internalValue

  */
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
  //Controlled ComponentとしてTabsを使っているから、TabsPageにもStateがある
  const [activeTab, setActiveTab] = useState("react");
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">React UI Components Tabs</h1>
      <div>
        {/* ページ全体にp-8を設定 */}
        <div className={cn("p-8")}>
          {/* <h1 className={cn("mb-6 text-2xl font-bold")}>Tabs</h1> */}

          <p className="bg-red-600 p-2 text-white">現在選択中: {activeTab}</p>
          {/* [重要] Page側の activeTab を Tabsのvalue として渡しています
          TabsPage
            │
            │ activeTab
            ▼
          Tabs
            │
            ▼
          TabsProvider
            │
            ▼
          TabsTrigger / TabsContent
          
          */}
          {/* onChange={setActiveTab} → Tabが変更されたらsetActiveTabを呼んでください の意味
          onChange("typescript") の場合、setActiveTab("typescript") が実行
          結果、activeTab が、"react" → "typescript" となる

Controlled Componentとしての流れ
① TypeScript Tabをクリック
        ↓
② TabsTrigger
   onChange("typescript")
        ↓
③ Tabs.tsx
   handleChange("typescript")
        ↓
④ TabsPage
   setActiveTab("typescript")
        ↓
⑤ activeTabが更新
        ↓
⑥ Tabsへvalue="typescript"
        ↓
⑦ ContextへactiveTab="typescript"
        ↓
⑧ TabsTrigger / TabsContentが再評価
        ↓
⑨ TypeScript Tabがactive
        ↓
⑩ TypeScript Contentが表示

これが今回のTabsの状態変更の全ルート

          */}
          <Tabs value={activeTab} onChange={setActiveTab}>
            {/* Tabをまとめる領域 */}
            <TabsList>
              {/* React Tab 
                value = "react"、表示文字は、React
              */}
              <TabsTrigger value="react">React</TabsTrigger>
              {/* TypeScript Tab 
                value = "typescript"、表示文字は、TypeScript
              */}
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
              {/* Tailwind Tab 
                value = "tailwind"、表示文字は、Tailwind
                ここでは、disabled を指定、これは disabled={true} と同じ意味
                これにより、
                ・クリックできない
                ・ブラウザ標準のdisabled状態になる
                ・cursor-not-allowed
                ・opacity-50
                が適用される
              */}
              <TabsTrigger value="tailwind" disabled>
                Tailwind CSS
              </TabsTrigger>
            </TabsList>

            {/* 各Tabに対応するコンテンツです。
            TabsTrigger
            value="react"

                  ↕ 対応

            TabsContent
            value="react"
            */}
            {/* React Content 
              activeTab = "react" なら表示
            */}
            <TabsContent value="react">
              <h2 className={cn("mb-2 text-lg font-bold")}>React</h2>

              <p>Reactの説明です。</p>
            </TabsContent>

            {/* TypeScript Content 
              activeTab = "typescript" なら表示
            */}
            <TabsContent value="typescript">
              <h2 className={cn("mb-2 text-lg font-bold")}>TypeScript</h2>

              <p>TypeScriptの説明です。</p>
            </TabsContent>

            {/* Tailwind Content 
              activeTab = "tailwind" なら表示、だが今回は、TabsTriggerがdisabledのため、
              クリックができなくなっている → 表示もされない
            */}
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
このページで実際に何が起こっているか
最初は
activeTab = "react"

画面は
Tabs

React     TypeScript     Tailwind CSS
─────
React
Reactの説明です。

そしてTypeScriptをクリック。
TypeScript
    ↓
onChange("typescript")
    ↓
setActiveTab("typescript")
↓

activeTab = "typescript"

↓

TabsContent value="react"
    ↓
return null

TabsContent value="typescript"
    ↓
表示

画面は
React     TypeScript     Tailwind CSS
           ─────────
TypeScript
TypeScriptの説明です。
になる



*/

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
