//cn()を読み込む、cn()はTailwindのクラス名をまとめるための関数
import { cn } from "@/lib/utils";

//複数のTabボタンを横並びにして、その集まりが「TabList」であることをブラウザに伝えるコンポーネント
//Tabs.tsxが状態管理の司令塔だったのに対して、TabsList.tsxはTabをまとめる箱という役割です。
//Tabを並べる場所を提供するだけで、Satateを持たない = 状態を管理しない

//TabsListが受け取るPropsを定義、Propsは2つだけ
type TabsListProps = {
  //ここにはTabが入ります。
  /*
  children
   │
   ├── React Tab
   ├── Vue Tab
   └── Angular Tab
  */
  children: React.ReactNode;
  //?が付いているので省略可能
  //呼び出し側から追加のTailwindクラスを渡せ
  className?: string;
};

//Propsを受け取ってる
export default function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      //アクセシビリティのための属性
      //このdivはTabをまとめているTabListですよ と意味を伝えている
      role="tablist"
      className={cn("flex border-b border-gray-200", className)}
    >
      {/* ここに実際のTabが入る */}
      {children}
    </div>
  );
}
