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

  defaultValue?: string[]; //配列型に修正

  value?: string[]; //追加

  onChange?: (openItems: string[]) => void; //追加

  collapsible?: boolean;
  //[追加]複数のAccordionItemが開けるようになる
  multiple?: boolean;

  className?: string;
};

export default function Accordion({
  items,
  defaultValue = [], //配列型に修正
  value, //追加
  onChange, //追加
  collapsible = true,
  // 初期値はfalse、つまり1つだけ開く
  multiple = false,
  className,
}: AccordionProps) {
  //Uncontrolledの場合、defaultValueの値、その後の状態管理をAccordion自身がやる
  const [internalOpenItems, setInternalOpenItems] =
    useState<string[]>(defaultValue);

  //valueが渡されている？ Yes → Controlled、No → Uncontrolled
  const isControlled = value !== undefined;

  const openItems = isControlled ? value : internalOpenItems;

  //Accordionの開閉状態を更新するための関数
  const updateOpenItems = (nextItems: string[]) => {
    //Uncontrolledなら、自分自身のStateを更新する
    if (!isControlled) {
      setInternalOpenItems(nextItems);
    }
    //onChange が指定されていれば、親にも通知
    //onChangeが存在する？ YES → 実行、NO  → 何もしない
    onChange?.(nextItems);
  };

  const handleToggle = (id: string) => {
    const isOpen = openItems.includes(id);

    if (multiple) {
      if (isOpen) {
        updateOpenItems(openItems.filter((itemId) => itemId !== id));
      } else {
        updateOpenItems([...openItems, id]);
      }

      return;
    }

    if (isOpen) {
      if (collapsible) {
        updateOpenItems([]);
      }

      return;
    }

    updateOpenItems([id]);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openItems.includes(item.id)}
          disabled={item.disabled}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
