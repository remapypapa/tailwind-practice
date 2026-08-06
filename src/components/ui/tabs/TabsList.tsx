import { cn } from "@/lib/utils";

//Tabを並べる場所を提供するだけで、Satateを持たない
type TabsListProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn("flex border-b border-gray-200", className)}
    >
      {children}
    </div>
  );
}
