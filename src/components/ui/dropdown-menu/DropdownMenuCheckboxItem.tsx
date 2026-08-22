import { cn } from "@/lib/utils";
import { useState } from "react";

//Stateを持つUncontrolled版
type DropdownMenuCheckboxItemProps = {
  children: React.ReactNode;
  /**
   defaultChecked の意味
   これはAccordionやTabsで学習した、defaultValue と同じ考え方
   最初の状態 を指定する

   例
   <DropdownMenuCheckboxItem defaultChecked>
    通知を受け取る
   </DropdownMenuCheckboxItem>
   なら
   初期状態
    ↓
    ✓ 通知を受け取る

    クリックすると、
    ✓
    ↓
    クリック
    ↓
    未チェック
   */
  defaultChecked?: boolean;
  className?: string;
};

export default function DropdownMenuCheckboxItem({
  children,
  defaultChecked = false,
  className,
}: DropdownMenuCheckboxItemProps) {
  /* 
  StateはCheckboxItem自身が持っている = Uncontrolled

  checked
  ↓
  現在チェックされているか？
  を管理している

  例えば
  <DropdownMenuCheckboxItem /> なら
  defaultChecked
  ↓
  undefined
  ↓
  false
  となる

  一方
  <DropdownMenuCheckboxItem defaultChecked> なら
  defaultChecked
  ↓
  true

  */
  const [checked, setChecked] = useState(defaultChecked);

  const handleClick = () => {
    /* 
    これはReactのState更新で非常に重要な書き方

    setChecked(!checked);
    でも動くケースは多いが
    setChecked((prev) => !prev);
    なら
    現在のStateを基準に次のStateを計算する
    ことが明確、つまり
    prev = false
    ↓
    !prev
    ↓
    true

    次は
    prev = true
    ↓
    !prev
    ↓
    false
    */
    setChecked((prev) => !prev);
  };

  return (
    <div
      /* 
      Menuの中にあるチェック可能な項目
      通常のItemなら
      role="menuitem"

      CheckboxItemなら
      role="menuitemcheckbox"
      */
      role="menuitemcheckbox"
      /* 
      現在チェックされているかを伝える
      checked = true なら
      aria-checked="true"
      */
      aria-checked={checked}
      onClick={handleClick}
      className={cn(
        "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100",
        className,
      )}
    >
      <span className="w-4">{checked ? "✓" : ""}</span>

      <span>{children}</span>
    </div>
  );
}

/* 
なぜ input type="checkbox" ではないのか？
普通のCheckboxなら、
<input type="checkbox" />
という選択肢がある

Dropdown Menuの中では、Menu
 └── Menu Item
      └── Checkbox Item

というUIパターンがある

そこで
role="menuitemcheckbox"

というARIA roleを使う
「これは通常のフォームCheckboxではなく、Menuの中にあるCheckbox型のMenu Item」 という意味

次の段階でControlledにする
現在は、
const [checked, setChecked] = useState(defaultChecked);
なので、StateはCheckboxItem自身が持っています。 = Uncontrolled

しかし実務では、
const [notifications, setNotifications] = useState(true);

をPage側で持ちたい場合があります。
例
<DropdownMenuCheckboxItem
  checked={notifications}
  onCheckedChange={setNotifications}
>
  通知を受け取る
</DropdownMenuCheckboxItem>

Page
│
└── notifications
        │
        ▼
CheckboxItem
となる

open
↓
Controlled

internalOpen
↓
Uncontrolled
という関係

DropdownMenuとCheckboxItemを比較
DropdownMenu
const [internalOpen, setInternalOpen] = useState(defaultOpen);
const actualOpen = open ?? internalOpen;

CheckboxItem
const [checked, setChecked] = useState(defaultChecked);

次の段階
const [internalChecked, setInternalChecked] =
  useState(defaultChecked);

const actualChecked =
  checked ?? internalChecked;
という形にできます。

DropdownMenu
    open
      ↓
Controlled / Uncontrolled

CheckboxItem
    checked
      ↓
Controlled / Uncontrolled

という同じ設計パターン

なぜCheckboxだけでControlledを学ぶのか
ここまでのAccordion、Tabs、DropdownMenuで、
defaultValue
value
onChange

というパターンを学びました。
Checkboxでは、
defaultChecked
checked
onCheckedChange

という形になります。

Uncontrolled	    Controlled
defaultOpen	      open
defaultValue	    value
defaultChecked	  checked
内部State	         親のState

Reactでは
「状態を誰が所有するのか？」
が非常に大事


*/
