import { cn } from "@/lib/utils";
import { useDropdownMenuContext } from "./useDropdownMenuContext";

type DropdownMenuTriggerProps = {
  children: React.ReactNode;
  className?: string; //追加
};

export default function DropdownMenuTrigger({
  children,
  className,
}: DropdownMenuTriggerProps) {
  //カスタムHook を使うことでスッキリする
  const { open, onOpenChange } = useDropdownMenuContext();

  const handleClick = () => {
    onOpenChange(!open);
  };

  return (
    <button
      type="button"
      //このTriggerが操作する対象が現在展開されているかを支援技術に伝える属性
      //状態によって、aria-expanded="false"、aria-expanded="true" になる
      //aria-selected と同じく、ReactのStateをARIA属性に反映させる
      aria-expanded={open}
      onClick={handleClick}
      className={cn("rounded border px-4 py-2", className)}
    >
      {children}
    </button>
  );
}
