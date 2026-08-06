import { cn } from "@/lib/utils";
import { useTabsContext } from "./TabsContext";

type TabsTriggerProps = {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export default function TabsTrigger({
  value,
  children,
  disabled = false,
  className,
}: TabsTriggerProps) {
  const { activeTab, onChange } = useTabsContext();

  //自分は現在選択されている？を判断
  const isActive = activeTab === value;

  const tabId = `tab-${value}`;
  const panelId = `panel-${value}`;

  return (
    <button
      id={tabId}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      disabled={disabled}
      //親のState変更を要求
      onClick={() => onChange(value)}
      className={cn(
        "border-b-2 border-transparent px-4 py-2",
        "text-sm font-medium",
        "hover:text-gray-900",
        disabled && "cursor-not-allowed opacity-50",
        isActive && "border-blue-500 text-blue-600",
        className,
      )}
    >
      {children}
    </button>
  );
}
