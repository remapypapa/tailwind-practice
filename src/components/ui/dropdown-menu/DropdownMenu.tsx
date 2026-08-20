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
  defaultOpen?: boolean; //追加
  /* 
  以下の追加で
  <DropdownMenu
    open={open}
    onOpenChange={setOpen}
  >
    が使えるようになる
  */
  open?: boolean; //追加
  onOpenChange?: (open: boolean) => void; //追加
};

export default function DropdownMenu({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: DropdownMenuProps) {
  //この状態では、TriggerやContent から利用できない
  /*
  defaultOpen がundefinedになる可能性があるため
  defaultOpen が null または undefined なら falseを使う という意味

  <DropdownMenu> なら
  defaultOpen
  ↓
  undefined
  ↓
  false
  となり

  <DropdownMenu defaultOpen> なら
  defaultOpen
  ↓
  true
  となる

  defaultOpen = true なら
  最初
  ↓
  Open

  その後
  ↓
  Triggerで閉じる
  ↓
  再び開く
  となる
  */

  /* 
  状態を2つに分ける
  internalOpen
  ↓
  Uncontrolled用の内部State

  open
  ↓
  Controlled用に親から渡されるState

  actualOpen
  ↓
  実際に現在Openなのか？
  */
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  /* 
  open が指定されている場合
  <DropdownMenu open={true}> なら
  actualOpen
  ↓
  true

  open が指定されていない場合
  <DropdownMenu> なら
  open = undefined
  ↓
  internalOpenを使う

  openがある
  ↓
  Controlled

  openがない
  ↓
  Uncontrolled
  */
  const actualOpen = open ?? internalOpen;

  /* 
  handleOpenChange
        │
        ├── 内部Stateを更新
        │
        └── 親にも通知
  
  なぜ nextOpen という名前なのか？
  nextValue と同じように「変更後の値」という意味
  nextOpen = true なら、「これからOpenになる値」
  nextOpen = false なら、「これからCloseになる値」

  Controlledの場合、
  <DropdownMenu
    open={open}
    onOpenChange={setOpen}
  >
    なので
    Item
    ↓
    onOpenChange(false)
    ↓
    親のsetOpen(false)
    ↓
    openがfalseになる
    ↓
    actualOpen = false
    となる、これは正常

    Controlled / Uncontrolledを図で理解する
    Uncontrolled
    <DropdownMenu /> の場合
    DropdownMenu
        │
        ▼
    internalOpen
        │
        ▼
    actualOpen
    
    StateをDropdownMenu自身が持っています。

    Controlled
    <DropdownMenu
      open={open}
      onOpenChange={setOpen}
    />
    の場合、

    親
    │
    ├── open
    │
    └── setOpen
          │
          ▼
    DropdownMenu
          │
          ▼
    actualOpen

    Stateの所有者は親です。
  */
  const handleOpenChange = (nextOpen: boolean) => {
    setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
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
        /* 
        Contextには actualOpen を渡す
        TriggerやContentは、
        const { open, onOpenChange } = useDropdownMenuContext();
        として利用する

        DropdownMenu
        │
        │ 状態管理の複雑な部分
        ▼
      Context
        │
        ├── Trigger
        ├── Content
        └── Item
        */
        open: actualOpen,
        onOpenChange: handleOpenChange,
      }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}
/* 
現在の構造
DropdownMenu
│
├── DropdownMenuTrigger
│
└── DropdownMenuContent
    │
    ├── DropdownMenuItem
    ├── DropdownMenuItem
    ├── DropdownMenuSeparator
    └── DropdownMenuItem

DropdownMenu
という一つの巨大なコンポーネントを作るのではなく、
役割ごとに小さなコンポーネントへ分割している

「大きなコンポーネント」と比較
<DropdownMenu
  items={[
    { label: "編集" },
    { label: "コピー" },
    { separator: true },
    { label: "削除" },
  ]}
/>

としてしまう設計もあるが、UIの自由度が下がる
Compound Componentsなら、
<DropdownMenuContent>
  <DropdownMenuItem>編集</DropdownMenuItem>

  <DropdownMenuItem>コピー</DropdownMenuItem>

  <DropdownMenuSeparator />

  <DropdownMenuItem>削除</DropdownMenuItem>
</DropdownMenuContent>

とかける

HTMLを書く感覚に近い形でUI構造を表現できる
これはCompound Componentsの大きなメリット

実務では両方ある
Compound Components型
<DropdownMenu>
  <DropdownMenuTrigger>
    メニュー
  </DropdownMenuTrigger>

  <DropdownMenuContent>
    <DropdownMenuItem>編集</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>削除</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

データ駆動型
<DropdownMenu
  items={[
    { label: "編集" },
    { label: "削除" },
  ]}
/>

どちらが絶対に正しいということではない

今回のProps設計
type DropdownMenuSeparatorProps = {
  className?: string;
};

のみ、かなり少ない
Propsは、
「将来使いそうだから、とりあえず増やす」 のではなく
そのコンポーネントに本当に必要な情報だけ持たせる
のが基本


*/
