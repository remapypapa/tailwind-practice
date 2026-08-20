import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem";
//追加
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenuPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components DropdownMenu
      </h1>

      {/* 
      Page
      │
      └── open
            │
            ▼
      DropdownMenu
            │
            ▼
      Context
            │
      ├── Trigger
      ├── Content
      └── Item

      の構造に変更
      */}
      {/* 一時的に配置 */}
      <p className="mt-4">Menu: {open ? "Open" : "Closed"}</p>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>メニュー</DropdownMenuTrigger>

        <DropdownMenuContent>
          {/* 現状ではクリックしても何も起こらない
          onClick={() => ...} を渡せるようにすれば、処理はできます。
          <DropdownMenuItem
            onClick={() => console.log("編集")}
          >
            編集
          </DropdownMenuItem>

          しかし、Dropdown Menuにはもう一つやるべきことがある
          Itemを選択したらMenuを閉じたい。

          Menuを閉じる処理は誰が担当する？
          流れとしては、

            Itemクリック
              ↓
            編集処理
              ↓
            Menuを閉じる

            となります。

            DropdownMenuItem
            は親の、

            open
            onOpenChange

            を知る必要があります
            すでにContextがあります

            DropdownMenu
                  │
                  ▼
            Context
                  │
                  ├── Trigger
                  ├── Content
                  └── Item
          
            なのでItemからも、
            const { onOpenChange } =
              useDropdownMenuContext();
            
            と取得できます。
          */}
          <DropdownMenuItem onSelect={() => console.log("編集")}>
            編集
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={() => console.log("コピー")}>
            コピー
          </DropdownMenuItem>
          {/* 追加 
            区切り線 自体は
            <div className="my-1 h-px bg-gray-200" />
            と書くことも可能だが、これでは意味がわからない
            コンポーネント化することで意味(=区切り線)が伴う
          */}
          <DropdownMenuSeparator />

          {/* disabled 指定 */}
          <DropdownMenuItem disabled>削除</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/*
今回起きていることを図にする
現在、Pageでは、
const [open, setOpen] = useState(false); がある

そして
<DropdownMenu
  open={open}
  onOpenChange={setOpen}
>
です

Triggerをクリックすると、
Trigger
   │
   │ onOpenChange(true)
   ▼
DropdownMenu
   │
   │ onOpenChange?.(true)
   ▼
Page
   │
   │ setOpen(true)
   ▼
open = true
   │
   ▼
DropdownMenu
   │
   │ actualOpen = true
   ▼
Context
   │
   ├── Trigger
   ├── Content
   └── Item

となる


*/
