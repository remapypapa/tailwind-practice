import { cn } from "@/lib/utils";
import { useDropdownMenuContext } from "./useDropdownMenuContext";

type DropdownMenuContentProps = {
  children: React.ReactNode;
};

export default function DropdownMenuContent({
  children,
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
        "absolute left-0 top-full z-10 mt-2",
        "w-40 rounded-md border bg-white p-1 shadow-md",
      )}
    >
      {children}
    </div>
  );
}
