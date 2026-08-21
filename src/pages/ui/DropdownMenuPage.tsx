import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem";
import DropdownMenuLabel from "@/components/ui/dropdown-menu/DropdownMenuLabel";
import DropdownMenuSeparator from "@/components/ui/dropdown-menu/DropdownMenuSeparator";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger";
//追加
import DropdownMenuGroup from "@/components/ui/dropdown-menu/DropdownMenuGroup";
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
          <DropdownMenuGroup>
            <DropdownMenuLabel>アカウント</DropdownMenuLabel>

            <DropdownMenuItem onSelect={() => console.log("プロフィール")}>
              プロフィール
            </DropdownMenuItem>

            <DropdownMenuItem onSelect={() => console.log("設定")}>
              設定
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>その他</DropdownMenuLabel>

            <DropdownMenuItem onSelect={() => console.log("ログアウト")}>
              ログアウト
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

/*
div の意味を考える
Groupの実装は、
<div>
  {children}
</div>

HTMLだけを見ると、ただのdiv

role="group" を追加すると
ただのdiv
↓
グループという意味を持つ要素 になる
これはReactのコンポーネント設計で重要な考え方
コンポーネントの価値は、必ずしも複雑なロジックにあるわけではない

Group自身はStateを持つべきか？
今回、const [open, setOpen] = useState(...) 
のようなStateは持たない

Groupの責任は、Itemをグループとしてまとめる
Menuの開閉は、DropdownMenu の責任

Groupは、DropdownMenuGroup の責任として構造をまとめるだけ
これは、Single Responsibilityの考え方にもつながる

Contextも使わない
同じ理由で、
useDropdownMenuContext() も使わない

現在Contextには、
open
onOpenChange
がある

Groupはこれらを必要としない
DropdownMenuGroup
       │
       └── Context不要
これは前回のLabel、Separatorとも同じ

Dropdown Menuの責任分担
コンポーネント	          主な責任
DropdownMenu	          開閉State
DropdownMenuTrigger	    開閉操作
DropdownMenuContent	    Menu本体の表示
DropdownMenuItem	      選択可能な項目
DropdownMenuLabel	      グループの見出し
DropdownMenuSeparator	  区切り
DropdownMenuGroup	      関連項目のグループ化

DropdownMenuGroup と DropdownMenuContent の違い
どちらも、children を持つ
何が違うのか？

Content
Menuそのもの

Contextから
open
を取得して
if (!open) {
  return null;
}
などを行う

Group
Menu内部の一部分、開閉Stateを知る必要はない

つまり
DropdownMenuContent
↓
Menuの表示責任

DropdownMenuGroup
↓
Menu内部の構造化

Compound Componentsとしての現在の構造
DropdownMenu
│
├── Trigger
│
└── Content
    │
    ├── Group
    │   ├── Label
    │   ├── Item
    │   └── Item
    │
    ├── Separator
    │
    └── Group
        ├── Label
        └── Item

Stateは
DropdownMenu
      │
      ▼
 Context
      │
 ┌────┼──────┐
 ▼    ▼      ▼
Trigger Content Item

Group / Label / Separatorは、現時点ではContextを必要としない
「必要なコンポーネントだけContextに依存する」

実際のDropdown Menuでは、
Group
├── Label
├── Item
├── Item
└── Item

だけでなく
Group
├── Label
├── Item
│   ├── Icon
│   └── Shortcut
├── Item
└── Item
などにもなる

さらに、

・サブメニュー
・Checkbox Item
・Radio Group
・Shortcut表示
・Icon
・destructive item
・disabled item

などが追加されます。

*/
