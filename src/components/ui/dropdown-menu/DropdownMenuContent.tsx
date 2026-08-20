import { cn } from "@/lib/utils";
import { useDropdownMenuContext } from "./useDropdownMenuContext";

type DropdownMenuContentProps = {
  children: React.ReactNode;
  className?: string; //追加
};

export default function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  //カスタムHook を使う
  const { open } = useDropdownMenuContext();

  if (!open) {
    return null;
  }
  //open = true → Contentを描画
  return (
    <div
      className={cn(
        "mt-2 w-48 rounded border bg-white p-1 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
