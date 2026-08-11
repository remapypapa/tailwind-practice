import { cn } from "@/lib/utils";

type DropdownMenuContentProps = {
  children: React.ReactNode;
};

export default function DropdownMenuContent({
  children,
}: DropdownMenuContentProps) {
  return (
    <div
      className={cn(
        "absolute left-0 top-full z-10 mt-2",
        "w-40 rounded-md border bg-white p-1 shadow-md",
      )}
    >
      {/* childrenを受け取っている */}
      {children}
    </div>
  );
}
