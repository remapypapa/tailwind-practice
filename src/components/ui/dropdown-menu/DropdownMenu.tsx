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
ContextをDropdownMenu.tsxに直接書かない理由 → 責務を分けるため

DropdownMenu.tsx
    ↓
Dropdown Menu本体の管理

DropdownMenuContext.tsx
    ↓
共有Stateの定義

この設計にすることで、
ContextはUIそのものではなく、コンポーネント間で共有する状態を管理する仕組み
ということが分かりやすくなる

現在のファイル構成
src/
├── components/
│   └── ui/
│       └── dropdown-menu/
│           ├── DropdownMenu.tsx
│           ├── DropdownMenuContext.tsx
│           ├── DropdownMenuTrigger.tsx
│           └── DropdownMenuContent.tsx
│
└── pages/
    └── ui/
        └── DropdownMenuPage.tsx

ここまでで、
DropdownMenu
     │
     ▼
 Context
     │
 ┌───┴────────┐
 ▼            ▼
Trigger      Content

Compound Components + Contextの基本形ができた

理解すべきこと
親コンポーネント
    │
    │ Stateを持つ
    ▼
DropdownMenu
    │
    │ Contextで共有
    ▼
DropdownMenuContext
    │
    ├──────────────┐
    ▼              ▼
Trigger          Content
    │              │
    │ useContext   │ useContext
    ▼              ▼
open変更         open参照
*/
