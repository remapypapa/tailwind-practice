import { cn } from "@/lib/utils";
import { useState } from "react";

//TabItemの型を定義
type TabItem = {
  //idは単なる番号ではない、id → 現在選択されているTab → 表示するPanel という関係を作るためのもの
  //activeTab === item.id のようにする
  //id → プログラム内部で使う値、
  id: string;
  //label → ユーザーに見せる文字
  label: string;
  //Tabs側はコンテンツの具体的な中身を知らなくていい
  content: React.ReactNode; //Reactで表示できるものなら何でも渡せる
  //各Itemが自分自身の状態を持つようにする
  disabled?: boolean; //追加
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
  //
  const handleChange = (nextValue: string) => {
    //itemsがreact、typescript、javascriptの時、nextValue = "typescript" なら
    //items.find((item) => item.id === nextValue) により
    /* 
    {
      id: "typescript",
      label: "TypeScript",
  ...
    }
    が取得できる
    */
    const item = items.find((item) => item.id === nextValue);

    if (!item || item.disabled) {
      return;
    }

    setInternalValue(nextValue);
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
            //disabled={true} なら無効になる、disabled={false} なら通常のボタン
            //item.disabled がundifinedでも問題ない
            //disabled = true → 無効、disabled = false → 有効、disabled = undefined → 通常
            disabled={item.disabled}
            onClick={() => handleChange(item.id)}
            className={cn(
              "border-b-2 border-transparent px-4 py-2 text-sm font-medium",
              "hover:text-gray-900",
              //item.disabled === true ならreturn; する、つまり何もしない
              //item.disabled === false なら State変更
              item.disabled &&
                "cursor-not-allowed opacity-50 hover:text-gray-500",
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
