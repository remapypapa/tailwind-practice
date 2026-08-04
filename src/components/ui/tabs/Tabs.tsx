import { cn } from "@/lib/utils";
import { useState } from "react";

//TabItemの型を定義
type TabItem = {
  //idは単なる番号ではない、id → 現在選択されているTab → 表示するPanel という関係を作るためのもの
  //activeTab === item.id のようにする
  //id → プログラム内部で使う値、
  id: string;
  //label →
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
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? items[0]?.id,
  );

  const activeTab = value ?? internalValue;

  const handleChange = (nextValue: string) => {
    const item = items.find((item) => item.id === nextValue);

    if (!item || item.disabled) {
      return;
    }

    setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div
        //Tabをまとめている要素に tablist という役割を与えている
        role="tablist"
        className={cn("flex border-b border-gray-200")}
      >
        {items.map((item) => {
          //item.id = "react" なら、tabId → "tab-react"、panelId → "panel-react"
          //TypeScriptなら、tab-typescript、panel-typescript
          //データとしてのIDとDOM上のIDを分ける
          //item.idはコンポーネント内部のデータ識別子
          //id: "react" DOMでは、tab-react、panel-react という用途別のIDにする
          //これにより、TabとPanelを間違えにくくなります。
          const tabId = `tab-${item.id}`;
          const panelId = `panel-${item.id}`;

          //この1つのState判定から
          //aria-selected={isActive} と isActive && "border-blue-500 text-blue-600" を作っている
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              //isActive を利用
              aria-selected={isActive}
              aria-controls={panelId}
              disabled={item.disabled}
              onClick={() => handleChange(item.id)}
              className={cn(
                "border-b-2 border-transparent px-4 py-2 text-sm font-medium",
                "hover:text-gray-900",
                item.disabled &&
                  "cursor-not-allowed opacity-50 hover:text-gray-500",
                //isActive を利用
                isActive && "border-blue-500 text-blue-600",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {items.map((item) => {
        if (item.id !== activeTab) {
          return null;
        }

        const tabId = `tab-${item.id}`;
        const panelId = `panel-${item.id}`;

        return (
          <div
            key={item.id}
            id={panelId}
            //Panelには、role="tabpanel" をつける
            // 「これはTabによって切り替えられるコンテンツ領域です」 という意味
            role="tabpanel"
            //このPanelはどのTabに対応しているのかが分かる
            //<div id="panel-react" role="tabpanel" aria-labelledby="tab-react"> なら
            //panel-react → tab-react → React という関係
            aria-labelledby={tabId}
            className={cn("p-4")}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
