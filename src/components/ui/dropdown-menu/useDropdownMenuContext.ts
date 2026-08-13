import { useContext } from "react";
import { DropdownMenuContext } from "./DropdownMenuContext";

//カスタムHook をつくる
/* 
このファイルの拡張子が、.ts である理由
→ 「JSXを直接書いていないから」

.ts と .tsx の違い

TypeScriptでは基本的に、

.ts → TypeScriptのコード
.tsx → TypeScript + JSX

という使い分けをします。
*/
export function useDropdownMenuContext() {
  /* 
  useDropdownMenuContext()
        ↓
  useContext(DropdownMenuContext)
          ↓
  Contextを取得
  
  という関係
  */
  const context = useContext(DropdownMenuContext);

  /*
  これもまとめたので、コンポーネント側では
  const { open, onOpenChange } = useDropdownMenuContext();
  だけですむ

[重要]
<DropdownMenuTrigger>
  メニュー
</DropdownMenuTrigger>

だけを単独で使った場合に、
DropdownMenuTrigger
       ↓
useDropdownMenuContext()
       ↓
Providerがない
       ↓
エラー
とするため
つまり、

DropdownMenuTrigger は DropdownMenu の中で使ってください

というルールをコードで保証しています。


  */
  if (!context) {
    throw new Error("useDropdownMenuContext must be used within DropdownMenu");
  }

  return context;
}

/* 
なぜ専用Hookを作るのか？
単純にコードを短くするだけが目的ではありません。
専用Hookを作ることで、
Dropdown MenuのContextを利用する方法を1か所に集約できる
というメリットがある

例えば今後Contextに、

type DropdownMenuContextValue = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled: boolean;
  closeOnSelect: boolean;
};

などが増えても、
各コンポーネントがContextの仕組みを直接意識する必要がありません。

const {
  open,
  onOpenChange,
  disabled,
  closeOnSelect,
} = useDropdownMenuContext();

と利用できます。

「Contextを隠す」という考え方
コンポーネント側から見ると、

useContext(DropdownMenuContext)

を直接使う必要はありません。
代わりに、

useDropdownMenuContext()

を使います。
つまり
┌──────────────────────────┐
│ DropdownMenu内部の仕組み │
│                          │
│ createContext             │
│ Provider                  │
│ useContext                │
└────────────┬─────────────┘
             │
             ▼
   useDropdownMenuContext()
             │
             ▼
      Trigger / Content

となり、内部実装と利用側を分離している
つまり今回の学習では、Tabsで覚えたContextを、

「ただ使える」から「再利用できる設計パターンとして理解する」

段階へ進めています。
*/
