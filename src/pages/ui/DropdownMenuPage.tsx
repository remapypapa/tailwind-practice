import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent";
import DropdownMenuGroup from "@/components/ui/dropdown-menu/DropdownMenuGroup";
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger";
//追加
import DropdownMenuCheckboxItem from "@/components/ui/dropdown-menu/DropdownMenuCheckboxItem";
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

      {/* 一時的に配置 */}
      <p className="mt-4">Menu: {open ? "Open" : "Closed"}</p>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>メニュー</DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>設定</DropdownMenuLabel>

            <DropdownMenuCheckboxItem>通知を受け取る</DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem defaultChecked>
              ダークモード
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/*
設定
☐ 通知を受け取る
☑ ダークモード

のような状態になる
クリックすると
☐ → ☑
☑ → ☐

と変化する
重要なのは、Menu自体は閉じない こと


*/
