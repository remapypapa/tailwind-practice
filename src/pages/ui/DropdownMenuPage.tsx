import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent";
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

      {/* 現状ではクリックしても開閉しない
        現在は
        DropdownMenu
          │
          ├── open = false
          │
          ├── Trigger
          │
          └── Content

ところが、

Trigger
   ↓
「クリックされた」
   ↓
どうやって親のopenを変更する？

という問題があります。→ ❌ Triggerからopenを変更できない

そして、

Content
   ↓
openはtrue？
   ↓
どうやって親のopenを取得する？

という問題もあります。 → ❌ Contentからopenを取得できない
      */}
      <DropdownMenu>
        <DropdownMenuTrigger>メニュー</DropdownMenuTrigger>

        <DropdownMenuContent>
          <div className="px-3 py-2 text-sm">メニュー内容</div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
