import { cn } from "@/lib/utils";

type DropdownMenuLabelProps = {
  //表表示する文字列や要素が必要なため
  //React.ReactNodeとすることでなんでも表示することができる
  //disabled がないのはLabelは、「これは○○関連のメニューです」と説明するためだけに必要だから
  /* 
  Item
  ↓
  ユーザーが操作する

  Label
  ↓
  ユーザーに情報を提示するだけ
  よって、
  disabled?: boolean;
  はLabelには基本的に必要ない
  */
  children: React.ReactNode;
  /* 
  利用側からスタイルを変更できるため必要、cn()のパターン

  Labelに role は必要？
  現段階では必ずしも独自の role を付ける必要はない、通常のテキストとして扱う
  */
  className?: string;
};

export default function DropdownMenuLabel({
  children,
  className,
}: DropdownMenuLabelProps) {
  return (
    <div
      className={cn("px-3 py-2 text-sm font-semibold text-gray-500", className)}
    >
      {children}
    </div>
  );
}
