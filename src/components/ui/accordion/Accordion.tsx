import { cn } from "@/lib/utils";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

type Item = {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
};

//Accordion は複数のItemを持つ
type AccordionProps = {
  items: Item[];

  defaultValue?: string;

  collapsible?: boolean;
  //[追加]複数のAccordionItemが開けるようになる
  multiple?: boolean;

  className?: string;
};

export default function Accordion({
  items,
  defaultValue,
  collapsible = true,
  // 初期値はfalse、つまり1つだけ開く
  multiple = false,
  className,
}: AccordionProps) {
  //一番重要、現在開いているItemを保存している、最初はnull つまり閉じている
  //Reactをクリック → openItem → "react"になり、React → 開く になる
  //TypeScriptをクリック → openItem → "typescript"になり、React は閉じてTypescriptだけ開く
  //[追加]defaultValue がreact だったら "react"になる、つまりopenItem="react"
  //ここではdefaultValue が undefined なら null にするという意味
  // 旧 → const [openItem, setOpenItem] = useState<string | null>(defaultValue ?? null);
  //AccordionItemを複数開けるように配列型に変更
  //openItems → [react] のように配列で管理、値は複数を想定、何個でも保存可能
  const [openItems, setOpenItems] = useState<string[]>(
    //デフォルト値も複数対応
    defaultValue ? [defaultValue] : [],
  );

  //引数はid、Reactを押したら、id → "react" が渡される
  const handleToggle = (id: string) => {
    //prev とは前回のstate
    setOpenItems((prev) => {
      //prev = ["react", "typescript"]の状態で、id = "react"の時
      //prev.includes("react")はtrue、逆にid = "tailwind"ならfalse
      //このItemは現在開いている？ を調べている
      const isOpen = prev.includes(id);

      // 複数開くモード
      if (multiple) {
        //すでに開いている場合
        //prev = ["react", "typescript"]の状態の場合、id = "react"ならfilter()によって["typescript"] になる
        //つまりReactを閉じる ということ
        if (isOpen) {
          //filterの意味 → id と違うものだけ残す という意味
          //["react", "typescript", "tailwind"] から"typescript"を削除すると["react", "tailwind"]になる
          return prev.filter((itemId) => itemId !== id);
        }
        //開いていない場合
        // ...prev はprevをコピーの意味、ReactではStateの配列を直接変更せず、新しい配列を作る
        //prev = ["react"]で、id = "typescript"なら ["react", "typescript"] になる
        return [...prev, id];
      }

      // 1つだけ開くモード
      if (isOpen) {
        //ここは以前の処理を配列版に変更したもの
        //openItems = ["react"]でReactをクリック → collapsible=true で return []; 全部閉じる
        //return prev; そのまま
        return collapsible ? [] : prev;
      }
      //別のItemをクリックした場合、openItems = ["react"] で TypeScriptをクリック → return [id];  → ["typescript"] となる
      //つまり、Reactは閉じ、Typescript が開く
      return [id];
    });
  };

  return (
    //Accordion全体
    <div className={cn("space-y-2", className)}>
      {/* ここも重要、mapにより、Itemの数分、AccorionItem を作る */}
      {items.map((item) => (
        <AccordionItem
          //これはReact専用
          //react、typescript、tailwind がある場合、Reactは、これはreact、これはtypescriptを覚えている
          //よって、更新する時高速化できる
          //※ key={index} としがちだが、key={item.id}にすると途中で追加・削除しても正しく区別できる
          key={item.id}
          id={item.id}
          title={item.title}
          //openItem=["react", "typescript"] ならReactはtrue、TypeScriptもtrue、Tailwindはfalse になる
          isOpen={openItems.includes(item.id)}
          disabled={item.disabled}
          //Reactなら、handleToggle("react") になる、TypeScriptなら、handleToggle("typescript")になる
          //つまり、それぞれ自分のIDを親に渡している
          onToggle={() => handleToggle(item.id)}
        >
          {/* item.content が children になる、 */}
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
