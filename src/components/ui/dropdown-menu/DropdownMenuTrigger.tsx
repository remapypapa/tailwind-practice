import { cn } from "@/lib/utils";

type DropdownMenuTriggerProps = {
  children: React.ReactNode;
};

export default function DropdownMenuTrigger({
  children,
}: DropdownMenuTriggerProps) {
  return (
    //ここでは、まだonClick を設定していない
    //openを変更するための情報がTriggerに届いていないから
    <button
      type="button"
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
