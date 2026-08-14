import { cn } from "@/lib/utils";
import { useDropdownMenuContext } from "./useDropdownMenuContext";

type DropdownMenuItemProps = {
  children: React.ReactNode;
  /* 
  なぜ onClick ではなく onSelect にするか？
  これはDropdown Menuというコンポーネントの意味に合わせるため

  普通のButtonなら、onClick で十分
  しかしMenuの場合、「Itemが選択された」 というイベントとして扱う方が意味が明確

  例えば
  <DropdownMenuItem
    onSelect={() => {
      console.log("編集");
    }}
  >
    編集
  </DropdownMenuItem>
  となる
  */
  onSelect?: () => void; //追加
  /* 
  disabled を ItemのPropsにした理由
  <DropdownMenu disabled>
  とすると、Menu全体が利用できない という意味になるため

  以下を追加することで、Item単位のdisabledを実装
  <DropdownMenuItem disabled> // 削除というMenu Itemは現在利用できないという意味
    削除
  </DropdownMenuItem>
  
  同様に、以下もItem単位でclassNameの追加が可能になるようにしている
  <DropdownMenuItem className="font-bold">
    編集
  </DropdownMenuItem>
  が可能になる
  */
  disabled?: boolean; //追加
  className?: string; //追加
};

export default function DropdownMenuItem({
  children,
  onSelect,
  /* 
  デフォルト値を false にする、
  disabledは
    boolean
    または
    undefined

  これにより、
  <DropdownMenuItem> なら
  disabled = false
  として扱われる

  <DropdownMenuItem disabled> なら
  disabled = true
  */
  disabled = false,
  className,
}: DropdownMenuItemProps) {
  //これにより、Itemも親のStateを共有できる
  const { onOpenChange } = useDropdownMenuContext();

  /*
  これによって
  Itemの選択
  ↓
  利用側の処理
  ↓
  Menuを閉じる

  という一連の動作を実現
  */
  const handleClick = () => {
    //[追加]disabledなら何もしない
    if (disabled) {
      return;
    }

    /* 
    onSelect が存在するなら実行する の意味

    例えば、
    <DropdownMenuItem>
      編集
    </DropdownMenuItem>
    なら
    onSelect
    ↓
    undefined
    なので何もしません。

    一方、
    <DropdownMenuItem
      onSelect={() => {
        console.log("編集");
      }}
    >
      編集
    </DropdownMenuItem>
    なら、
    onSelect
    ↓
    関数が存在
    ↓
    実行される

handleClick の流れ
Itemクリック
    ↓
handleClick()
    ↓
onSelect()
    ↓
利用側の処理
    ↓
onOpenChange(false)
    ↓
Menuを閉じる

重要なのは、
利用側の処理とDropdown Menu自身の処理を分けていること

利用側ではこう書ける
<DropdownMenuItem
  onSelect={() => {
    console.log("編集");
  }}
>
  編集
</DropdownMenuItem>

<DropdownMenuItem
  onSelect={() => {
    console.log("コピー");
  }}
>
  コピー
</DropdownMenuItem>
も可能

DropdownMenu側は、「何をするか」 を知りません。
ただ、「Itemが選択されたら、その処理を実行してMenuを閉じる」 だけを担当する

    */
    onSelect?.();
    onOpenChange(false);
  };
  return (
    <button
      type="button"
      /* 
      disabled をbuttonに渡す
      これによって、ブラウザ自身が
      ・クリックできない
      ・フォーカスできない
      ・disabled状態として扱う

      といった処理をしてくれます。
      */
      disabled={disabled} //追加
      onClick={handleClick}
      className={cn(
        //基本スタイル
        "block w-full rounded px-3 py-2",
        "text-left text-sm",
        "hover:bg-gray-100",

        //disabled時の追加スタイル
        disabled && "cursor-not-allowed opacity-50", //追加

        //className を最後に置く理由
        // cn() の中で tailwind-merge が働くことで、競合するTailwindクラスを整理できる
        //classNameは利用側から追加できる = スタイルを後で変更できる
        className, //追加
      )}
    >
      {children}
    </button>
  );
}

/* 
なぜ Item もコンポーネントにするのか？
例えばPage側で直接、

  <button>編集</button>
  <button>コピー</button>
  <button>削除</button>

と書いても動きます。
しかし、それぞれのボタンに毎回、
  width
  padding
  text-align
  font-size
  hover
  border-radius
などを書く必要があります。

<DropdownMenuItem>
  編集
</DropdownMenuItem>

すると、
DropdownMenuItem
        ↓
見た目を統一
        ↓
利用側は「メニュー項目」という意味だけを書く

「責務分離」
これは実務でも非常に重要です。

DropdownMenu
  Menu全体の状態を管理
Trigger
  Menuを開閉する
Content
  Menuを表示する
Item
  Itemが選択されたことを通知する
  Menuを閉じる
利用側
  編集・削除など、具体的な処理を決める

つまり、
「編集」という処理
        ↑
   利用側が決める

「Menuを閉じる」
        ↑
DropdownMenuItemが担当

という分担です。
この分離ができると、再利用性が高くなります

onClick ではなく onSelect にした理由
今回の onSelect は、Dropdown MenuコンポーネントとしてのAPI設計を意識したもの

利用側からすると、
onSelect={() => {
  // 編集する
}}

の方が、
onClick={() => {
  // 編集する
}}

より、「このMenu Itemが選択されたときの処理」 という意味が明確
ただし、内部ではHTMLの、
onClick={handleClick}
を使っている

HTML
 ↓
onClick

DropdownMenu API
 ↓
onSelect

これは内部実装と外部APIを分離している
*/
