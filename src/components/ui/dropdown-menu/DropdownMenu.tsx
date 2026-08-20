import { useState } from "react";
import { DropdownMenuContext } from "./DropdownMenuContext";

type DropdownMenuProps = {
  /*
  DropdownMenu
      │
      └── children
           ├── Trigger
           └── Content
  の構造になる
  */
  children: React.ReactNode;
  defaultOpen?: boolean; //追加
  /* 
  以下の追加で
  <DropdownMenu
    open={open}
    onOpenChange={setOpen}
  >
    が使えるようになる
  */
  open?: boolean; //追加
  onOpenChange?: (open: boolean) => void; //追加
};

export default function DropdownMenu({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: DropdownMenuProps) {
  //この状態では、TriggerやContent から利用できない
  /*
  defaultOpen がundefinedになる可能性があるため
  defaultOpen が null または undefined なら falseを使う という意味

  <DropdownMenu> なら
  defaultOpen
  ↓
  undefined
  ↓
  false
  となり

  <DropdownMenu defaultOpen> なら
  defaultOpen
  ↓
  true
  となる

  defaultOpen = true なら
  最初
  ↓
  Open

  その後
  ↓
  Triggerで閉じる
  ↓
  再び開く
  となる
  */

  /* 
  状態を2つに分ける
  internalOpen
  ↓
  Uncontrolled用の内部State

  open
  ↓
  Controlled用に親から渡されるState

  actualOpen
  ↓
  実際に現在Openなのか？
  */
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  /* 
  open が指定されている場合
  <DropdownMenu open={true}> なら
  actualOpen
  ↓
  true

  open が指定されていない場合
  <DropdownMenu> なら
  open = undefined
  ↓
  internalOpenを使う

  openがある
  ↓
  Controlled

  openがない
  ↓
  Uncontrolled
  */
  const actualOpen = open ?? internalOpen;

  /* 
  handleOpenChange
        │
        ├── 内部Stateを更新
        │
        └── 親にも通知
  
  なぜ nextOpen という名前なのか？
  nextValue と同じように「変更後の値」という意味
  nextOpen = true なら、「これからOpenになる値」
  nextOpen = false なら、「これからCloseになる値」

  Controlledの場合、
  <DropdownMenu
    open={open}
    onOpenChange={setOpen}
  >
    なので
    Item
    ↓
    onOpenChange(false)
    ↓
    親のsetOpen(false)
    ↓
    openがfalseになる
    ↓
    actualOpen = false
    となる、これは正常

    Controlled / Uncontrolledを図で理解する
    Uncontrolled
    <DropdownMenu /> の場合
    DropdownMenu
        │
        ▼
    internalOpen
        │
        ▼
    actualOpen
    
    StateをDropdownMenu自身が持っています。

    Controlled
    <DropdownMenu
      open={open}
      onOpenChange={setOpen}
    />
    の場合、

    親
    │
    ├── open
    │
    └── setOpen
          │
          ▼
    DropdownMenu
          │
          ▼
    actualOpen

    Stateの所有者は親です。
  */
  const handleOpenChange = (nextOpen: boolean) => {
    setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    //Provider はこの中にいる子コンポーネントにContextの値を提供する
    /* 
    今回は
    Provider
    │
    ├── DropdownMenuTrigger
    │
    └── DropdownMenuContent
    となる

    Providerの value に、
    {
      open,
      onOpenChange: handleOpenChange,
    }
    を渡している
    つまり
    Trigger
      ↑
    open / onOpenChange

    Content
      ↑
    open / onOpenChange
    という状態
    */
    <DropdownMenuContext.Provider
      value={{
        /* 
        Contextには actualOpen を渡す
        TriggerやContentは、
        const { open, onOpenChange } = useDropdownMenuContext();
        として利用する

        DropdownMenu
        │
        │ 状態管理の複雑な部分
        ▼
      Context
        │
        ├── Trigger
        ├── Content
        └── Item
        */
        open: actualOpen,
        onOpenChange: handleOpenChange,
      }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}
/* 
現在の構造
DropdownMenu
│
├── DropdownMenuTrigger
│
└── DropdownMenuContent
    │
    ├── DropdownMenuItem
    ├── DropdownMenuItem
    └── DropdownMenuItem

Contexは、
DropdownMenu
      │
      ▼
DropdownMenuContext
      │
 ┌────┼──────────────┐
 ▼    ▼              ▼
Trigger Content      Item

かなりCompound Componentsらしくなった


*/
