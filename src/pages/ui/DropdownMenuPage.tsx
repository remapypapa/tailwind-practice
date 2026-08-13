import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger";
import { Link } from "react-router-dom";

export default function DropdownMenuPage() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components DropdownMenu
      </h1>

      <DropdownMenu>
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

          <DropdownMenuItem onSelect={() => console.log("削除")}>
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/*
ここまでで、Dropdown Menuの基本的なCompound Components構造が完成
*/
