import { cn } from "@/lib/utils";

type DropdownMenuSeparatorProps = {
  className?: string;
};

export default function DropdownMenuSeparator({
  className,
}: DropdownMenuSeparatorProps) {
  return (
    <div role="separator" className={cn("my-1 h-px bg-gray-200", className)} />
  );
}

/* 
なぜ children がないのか？
DropdownMenuItem は、
<DropdownMenuItem>
  編集
</DropdownMenuItem>

なので、
childrenn が必要だった

一方、
<DropdownMenuSeparator />
は
「ここに区切り線を表示する」 だけなので、
children: React.ReactNode; は必要ない

className はなぜ必要？
<DropdownMenuSeparator className="my-2" />
のように、利用側から見た目を調整できるようにする。

cn() を使う理由
基本スタイルは
"my-1 h-px bg-gray-200"

そこに、className を追加、よって
className={cn(
  "my-1 h-px bg-gray-200",
  className
)}

とする

<DropdownMenuSeparator className="my-3" /> とすると
内部:
my-1

利用側:
my-3
となり、tailwind-merge によって競合するTailwindクラスを整理できます。

role="separator" は何？
HTMLとしては、
<div></div>
だが、
role="separator" をつけることで、
これはコンテンツを区切るためのセパレーターです」
と支援技術に意味を伝えられます。

<div
  role="separator"
>

見た目
↓
横線

意味
↓
コンテンツの区切り

aria と role の違いを軽く整理
Tabsで使った
role="tab"
role="tabpanel"
role="tablist"

role="separator"
role は、「この要素は何なのか？」 を伝えるもの

role="button"
role="tab"
role="tabpanel"
role="separator"
など

一方
aria-expanded
aria-selected
aria-controls

は、「現在どういう状態なのか？」 や 「どの要素と関係しているのか？」 
を伝えるために使う



*/
