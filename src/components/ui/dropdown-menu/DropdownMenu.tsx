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
};

export default function DropdownMenu({ children }: DropdownMenuProps) {
  //この状態では、TriggerやContent から利用できない
  /*
  最終的には以下の状態にする
  DropdownMenu
      │
      ▼
DropdownMenuContext
      │
 ┌────┴─────┐
 ▼          ▼
Trigger    Content
  
Context に open と setOpen を入れれば、
Trigger でopen を変更する、Contentで Openを確認する ことができる
  */
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
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
        open,
        onOpenChange: handleOpenChange,
      }}
    >
      <div className="relative">{children}</div>
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
