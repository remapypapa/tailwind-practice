import { cn } from "@/lib/utils";
import { useDropdownMenuContext } from "./useDropdownMenuContext";

type DropdownMenuTriggerProps = {
  children: React.ReactNode;
};

export default function DropdownMenuTrigger({
  children,
}: DropdownMenuTriggerProps) {
  //カスタムHook を使うことでスッキリする
  const { open, onOpenChange } = useDropdownMenuContext();

  return (
    <button
      type="button"
      //このTriggerが操作する対象が現在展開されているかを支援技術に伝える属性
      //状態によって、aria-expanded="false"、aria-expanded="true" になる
      //aria-selected と同じく、ReactのStateをARIA属性に反映させる
      aria-expanded={open}
      onClick={() => onOpenChange(!open)}
      className={cn(
        "rounded-md border px-4 py-2",
        "bg-white text-sm font-medium",
        "hover:bg-gray-50",
      )}
    >
      {children}
    </button>
  );
}
