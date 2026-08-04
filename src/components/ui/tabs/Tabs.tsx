import { cn } from "@/lib/utils";
import { useState } from "react";

//TabItemの型を定義
type TabItem = {
  id: string;
  label: string;
  //Tabs側はコンテンツの具体的な中身を知らなくていい
  content: React.ReactNode; //Reactで表示できるものなら何でも渡せる
};

type TabsProps = {
  items: TabItem[]; //items は TabItem型の配列
  defaultValue?: string;
  className?: string;
};

export default function Tabs({ items, defaultValue, className }: TabsProps) {
  //最重要
  //const [state, setState] = useState(初期値); が基本系
  //defaultValue ?? items[0]?.id は、初期値を示している
  //defaultValueが nullでもundefinedでもなければdefaultValueを使う。そうでなければitems[0]?.idを使う。
  //??は Null合体演算子（Nullish Coalescing Operator）
  //items[0]?.id は、最初の要素のid の意味、?. はオプショナルチェーン
  //items[0].id にすると、items[0]が存在しない場合にエラーになる可能性があるが、
  //items[0]?.id にすることで、items[0]が存在しない場合にundefinedになる
  //const [activeTab, setActiveTab] = useState<string>();なので、開くのは1つのみ
  const [activeTab, setActiveTab] = useState(defaultValue ?? items[0]?.id);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab */}
      <div className={cn("flex border-b border-gray-200")}>
        {/* Tabを自動生成する */}
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium",
              "border-b-2 border-transparent",
              "hover:text-gray-900",
              //activeTab = "typescript"の場合、
              //id = "react"、"tailwind"は不一致、"typescript" 一致する
              //そのため、activeTab === item.id が true になる時CSSが追加される
              //これは、StateがUIの見た目を決めていることになる = Reactの重要な考え方
              activeTab === item.id && "border-blue-500 text-blue-600",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className={cn("p-4")}>
        {items.map((item) => {
          //現在選択されているTabのコンテンツだけが表示される
          if (item.id !== activeTab) {
            return null;
          }

          return <div key={item.id}>{item.content}</div>;
        })}
      </div>
    </div>
  );
}
