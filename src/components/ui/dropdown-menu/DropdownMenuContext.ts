import { createContext } from "react";

//JSX構文がないため、このファイルの拡張子は、 .ts
type DropdownMenuContextValue = {
  //Context に open と openを変更する関数を入れ共有する
  /* 
  イメージは
  DropdownMenuContext
  │
  ├── open
  │
  └── onOpenChange()
  */
  open: boolean;
  //なぜ onOpenChange という名前なのか？
  //setOpen という名前でも動くが、Contextの外側から見ると、
  //setOpen は ReactのState setterそのものという印象になる
  //onOpenChange なら、openの値が変更されたときに呼び出すものというコンポーネントAPIとしての意味になる
  //これは、onChange と同じ考え方
  onOpenChange: (open: boolean) => void;
};

/* 
Contextの型は、DropdownMenuContextValue または undefined
そのため、const context = useContext(DropdownMenuContext); の結果は
context
  ↓
DropdownMenuContextValue
または
undefined
になる、よって

if (!context) {
  throw new Error(...);
}
でチェックしている、これにより、チェック後はTypeScriptが、
「ここから先のcontextはundefinedではない」 と判断できる
*/
export const DropdownMenuContext = createContext<
  DropdownMenuContextValue | undefined
>(undefined);
