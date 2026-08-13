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
src/
└── components/
    └── ui/
        └── dropdown-menu/
            ├── DropdownMenu.tsx
            ├── DropdownMenuContext.tsx
            ├── useDropdownMenuContext.ts
            ├── DropdownMenuTrigger.tsx
            └── DropdownMenuContent.tsx

役割もかなり明確です。
DropdownMenu.tsx
    ↓
Stateを持つ / Providerを提供

DropdownMenuContext.tsx
    ↓
Contextの型とContext本体

useDropdownMenuContext.ts
    ↓
Contextを安全に取得

DropdownMenuTrigger.tsx
    ↓
openを変更

DropdownMenuContent.tsx
    ↓
openを見て表示・非表示

今回の学習ポイント

useContextを直接使う
const context = useContext(DropdownMenuContext);

でも動く
専用Hookを作る
const { open, onOpenChange } =
  useDropdownMenuContext();

ことで、
・Context取得処理を共通化できる
・エラーチェックを共通化できる
・コンポーネント側がContextの内部構造を意識しなくてよい
・Contextの仕様変更に強くなる
・コードが読みやすくなる

というメリットがある
*/
