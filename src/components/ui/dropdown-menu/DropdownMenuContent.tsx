import { cn } from "@/lib/utils";
import { useContext } from "react";
import { DropdownMenuContext } from "./DropdownMenuContext";

type DropdownMenuContentProps = {
  children: React.ReactNode;
};

export default function DropdownMenuContent({
  children,
}: DropdownMenuContentProps) {
  //Contextを取得
  const context = useContext(DropdownMenuContext);

  //Context の値がない場合はエラーメッセージ ↓ を表示
  if (!context) {
    throw new Error("DropdownMenuContent must be used within DropdownMenu");
  }
  //取得したContextからopen を取得
  const { open } = context;

  //open = false → Contentを描画しない
  if (!open) {
    return null;
  }
  //open = true → Contentを描画
  return (
    <div
      className={cn(
        "absolute left-0 top-full z-10 mt-2",
        "w-40 rounded-md border bg-white p-1 shadow-md",
      )}
    >
      {children}
    </div>
  );
}
