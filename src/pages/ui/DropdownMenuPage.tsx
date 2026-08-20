import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem";
//追加
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger";
//追加
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel";
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
          <DropdownMenuLabel>アカウント</DropdownMenuLabel>

          <DropdownMenuItem onSelect={() => console.log("プロフィール")}>
            プロフィール
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={() => console.log("設定")}>
            設定
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>その他</DropdownMenuLabel>

          <DropdownMenuItem onSelect={() => console.log("ログアウト")}>
            ログアウト
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/*
3種類を比較
現在、Contentの中には、

DropdownMenuLabel
DropdownMenuItem
DropdownMenuSeparator
がある

役割の違い
コンポーネント	        役割	                  操作
DropdownMenuLabel	    メニューのグループ名・説明	しない
DropdownMenuItem	    メニュー項目	            する
DropdownMenuSeparator	項目の区切り	            しない

Item と Label を同じコンポーネントにしない理由
<DropdownMenuItem>
  アカウント
</DropdownMenuItem>
として
アカウント
プロフィール
設定
を全部Itemにすることも技術的には可能

しかし、
アカウント はクリックして何かを実行するものではない
一方
プロフィール
設定
は操作対象

UIの構造として、
アカウント
 ├── プロフィール
 └── 設定
という意味の違いがある

よって
<DropdownMenuLabel>
  アカウント
</DropdownMenuLabel>
と
<DropdownMenuItem>
  プロフィール
</DropdownMenuItem>
に分ける

コードから
アカウント
 ├─ プロフィール
 └─ 設定

────────────

その他
 └─ ログアウト

というUIの意味・構造がコードから読み取れる
これがCompound Componentsの大きなメリット

「見た目」ではなく「役割」でコンポーネントを分ける
Label
↓
説明・分類

Item
↓
操作

Separator
↓
区切り

という役割の違いがある
実務では、この「役割」を意識してコンポーネントを分割することが非常に重要

現在のDropdown Menuを整理
DropdownMenu
│
├── DropdownMenuTrigger
│
└── DropdownMenuContent
    │
    ├── DropdownMenuLabel
    ├── DropdownMenuItem
    ├── DropdownMenuItem
    ├── DropdownMenuSeparator
    ├── DropdownMenuLabel
    └── DropdownMenuItem

さらにContextによって、
DropdownMenu
      │
      ▼
DropdownMenuContext
      │
 ┌────┼───────────────┐
 ▼    ▼               ▼
Trigger Content       Item

とStateが共有されている

一方
Label
Separator

は現在、Menuの開閉Stateを必要としていない
この違いも重要

Contextを「何でも共有する場所」にしない
const context = {
  open,
  onOpenChange,
  disabled,
  className,
  label,
  ...
};
のように、何でもContextに入れてしまう設計は避ける
Contextに入れるべきなのは、
Compound Components間で共有する必要がある状態・機能

今回であれば、
open
onOpenChange

DropdownMenuLabel はこれを必要としていないので、Contextを使いません。
*/
