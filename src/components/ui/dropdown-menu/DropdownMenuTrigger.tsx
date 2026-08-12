import { cn } from "@/lib/utils";
import { useContext } from "react";
import { DropdownMenuContext } from "./DropdownMenuContext";

type DropdownMenuTriggerProps = {
  children: React.ReactNode;
};

export default function DropdownMenuTrigger({
  children,
}: DropdownMenuTriggerProps) {
  /* 
  Trigger側からContextを取得

  useContext() の役割
  Provider
    ↓
  valueを提供
    ↓
  useContext()
    ↓
  子コンポーネントが取得
  */
  const context = useContext(DropdownMenuContext);

  if (!context) {
    throw new Error("DropdownMenuTrigger must be used within DropdownMenu");
  }

  /* 
  これにより、open, onOpenChange をTrigger が使えるようになる
  onClick={() => onOpenChange(!open)} が可能になる
  */
  const { open, onOpenChange } = context;

  return (
    <button
      type="button"
      //このTriggerが操作する対象が現在展開されているかを支援技術に伝える属性
      //状態によって、aria-expanded="false"、aria-expanded="true" になる
      //aria-selected と同じく、ReactのStateをARIA属性に反映させる
      aria-expanded={open}
      onClick={() => onOpenChange(!open)}
      className={cn(
        "rounded-md border px-4 py-2",
        "bg-white text-sm font-medium",
        "hover:bg-gray-50",
      )}
    >
      {children}
    </button>
  );
}

/* 
現在の構造は、
DropdownMenu
│
├── useState
│     └── open
│
├── Context.Provider
│     │
│     ├── Trigger
│     │     └── useContext()
│     │
│     └── Content
│           └── useContext()
│

Triggerをクリックすると
Trigger
 ↓
onOpenChange(!open)
 ↓
DropdownMenu
 ↓
setOpen()
 ↓
open変更
 ↓
再レンダリング
 ↓
Contentのopenも更新
 ↓
Menu表示

という流れ
*/
