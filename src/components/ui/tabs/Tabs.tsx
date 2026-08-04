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
  //最初はどのTabを開いておくか
  defaultValue?: string;
  //現在どのTabを選択しているか
  value?: string; //追加
  onChange?: (value: string) => void; //追加
  className?: string;
};

export default function Tabs({
  items,
  defaultValue,
  value,
  onChange,
  className,
}: TabsProps) {
  //internalValue は、Tabs自身が管理している現在のTab
  //defaultValue="react"なら、internalValue → "react"
  //TypeScriptをクリック → setInternalValue("typescript"); となる
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? items[0]?.id,
  );
  //現在値value が存在すれば value を使い、なければ internalValue を使う
  //親から activeTab を渡されることで、value値が入る → 初期値は"react"
  //つまり、Controlledなら親のState、Uncontrolledなら内部Stateを使う
  const activeTab = value ?? internalValue;
  //Tabをクリックすると、onClick={() => handleChange(item.id)}が実行される
  //TypeScriptをクリック → handleChange("typescript")
  //その中で、setInternalValue("typescript"); と onChange?.("typescript"); を実行
  const handleChange = (nextValue: string) => {
    setInternalValue(nextValue);
    //重要、if (onChange) {onChange(nextValue);} と同じ意味
    //つまり、onChangeが渡されている場合だけ実行します。
    //<Tabs items={items}/> なら onchangeはない、よって何もしない
    //一方、<Tabs items={items} onChange={(value) => {console.log(value); }}/> なら 実行される
    onChange?.(nextValue);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Tab */}
      <div className={cn("flex border-b border-gray-200")}>
        {/* Tabを自動生成する */}
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleChange(item.id)}
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
