import { cn } from "@/lib/utils";

type DropdownMenuGroupProps = {
  /* 
  Groupは中に、
  Label
  Item
  Item
  などを入れるためのコンポーネント
  よって、children: React.ReactNode; が必要
  */
  children: React.ReactNode;
  //拡張させるため必要
  className?: string;
};

export default function DropdownMenuGroup({
  children,
  className,
}: DropdownMenuGroupProps) {
  return (
    /* 
    今回、Group自身にデフォルトのTailwindクラスがない
    className={className} でも動作する

    今後内部のデフォルトスタイルを追加しても、設計を変えなくて済むようにしている
    例
    className={cn(
      "space-y-1",
      className
    )}

    role="group" は複数の関連する要素を1つのグループとして扱う
    ことを支援技術に伝える
    例
    アカウント
      ├── プロフィール
      └── 設定
    
    */
    <div role="group" className={cn(className)}>
      {children}
    </div>
  );
}

/* 
ここでのGroupは、

「中に何を入れるか」

を自分で決めない

利用側が自由に子コンポーネントを組み合わせる
例
<DropdownMenuGroup>
  <DropdownMenuLabel>
    アカウント
  </DropdownMenuLabel>

  <DropdownMenuItem>
    プロフィール
  </DropdownMenuItem>

  <DropdownMenuItem>
    設定
  </DropdownMenuItem>
</DropdownMenuGroup>

Labelとの違い
<DropdownMenuLabel>
  アカウント
</DropdownMenuLabel>

は、「この下のメニューはアカウント関連です」という表示上の説明

一方
<DropdownMenuGroup>
は、「このItemたちは論理的に同じグループです」という構造上の意味を持たせる
Label
↓
ユーザーに見せる見出し

Group
↓
UIの構造・意味をまとめる

LabelとGroupを組み合わせる
<DropdownMenuGroup>
  <DropdownMenuLabel>
    アカウント
  </DropdownMenuLabel>

  <DropdownMenuItem>
    プロフィール
  </DropdownMenuItem>

  <DropdownMenuItem>
    設定
  </DropdownMenuItem>
</DropdownMenuGroup>

構造として
Group
│
├── Label
│
├── Item
│
└── Item

Label = グループ名
Group = グループそのもの
と考える

*/
