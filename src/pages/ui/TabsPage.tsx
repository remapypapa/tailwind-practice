import Tabs from "@/components/ui/tabs/Tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: "react",
    label: "React",
    content: (
      <div>
        <h2 className={cn("mb-2 text-lg font-bold")}>React</h2>

        <p>ReactはUIを構築するためのJavaScriptライブラリです。</p>
      </div>
    ),
  },
  {
    id: "typescript",
    label: "TypeScript",
    content: (
      <div>
        <h2 className={cn("mb-2 text-lg font-bold")}>TypeScript</h2>

        <p>TypeScriptはJavaScriptに型システムを追加した言語です。</p>
      </div>
    ),
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    content: (
      <div>
        <h2 className={cn("mb-2 text-lg font-bold")}>Tailwind CSS</h2>

        <p>Tailwind CSSはユーティリティクラスを使ってUIを構築します。</p>
      </div>
    ),
  },
];

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
          <h1 className={cn("mb-6 text-2xl font-bold")}>Tabs</h1>

          <p className="bg-red-600 p-2 text-white">現在選択中: {activeTab}</p>

          {/* value={activeTab}は現在値、onChange={setActiveTab} 値が変更されたことを親に通知 */}
          <Tabs items={items} value={activeTab} onChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
