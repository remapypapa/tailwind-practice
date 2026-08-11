import { cn } from "@/lib/utils";
import { useState } from "react";
import { TabsProvider } from "./TabsContext"; //追加

//Tabsが受け取るPropsを定義
type TabsProps = {
  //最初はどのTabを開いておくか → Uncontrolledモードの初期値
  //<Tabs defaultValue="react"> なら最初だけReactが選択される、その後は内部Stateが管理
  defaultValue?: string;
  //現在どのTabを選択しているか → Controlledモードで使う
  //<Tabs value={activeTab}> なら親コンポーネントが状態を管理
  value?: string; //追加
  //タブが変更された時に呼ばれる関数
  //const handleTabChange = (value: string) => {console.log(value);}; なら
  //コンソールにvalueが表示される
  onChange?: (value: string) => void; //追加
  //親からスタイルを追加できる
  //例えば、<Tabs className="max-w-md">
  className?: string;
  //TabListやTabPanelが入る
  children: React.ReactNode;
};

export default function Tabs({
  defaultValue,
  value,
  onChange,
  className,
  children,
}: TabsProps) {
  //ここで内部Stateを作っている
  //例えば、Tabs defaultValue="react"> なら最初は internalValue = "react" になる
  const [internalValue, setInternalValue] = useState(defaultValue);
  //ここがControlled / Uncontrolledを切り替える重要な部分
  //valueがある場合 → <Tabs value="vue"> internalValue = "react"
  //activeTab = "vue" になる、つまり親が管理する
  //valueがない場合 → <Tabs defaultValue="react"> なら value = undefined
  //activeTab = internalValue つまり自分自身が管理する
  // ??の意味は、value が null または undefined のときだけ internalValue を使う
  const activeTab = value ?? internalValue;

  //タブがクリックされた時に実行される関数
  //例えば、現在 React → Vueをクリック → handleChange("vue") が呼ばれる
  //nextValue は「現在の値ではなく、これから状態にセットする値」という意図の変数名
  const handleChange = (nextValue: string) => {
    setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  return (
    //ここがContextへ値を渡している場所
    <TabsProvider
      //渡している値
      //例えば、activeTab = "react"、onChange = handleChange がContextへ保存される
      value={{
        activeTab,
        onChange: handleChange,
      }}
    >
      {/* Tabs全体を包むラッパー */}
      <div className={cn("w-full", className)}>
        {/* ここへ、<TabList />  <TabPanel /> などが表示される*/}
        {children}
      </div>
    </TabsProvider>
  );
}
