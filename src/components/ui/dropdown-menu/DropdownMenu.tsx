import { useState } from "react";

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

  return <div className="relative">{children}</div>;
}
