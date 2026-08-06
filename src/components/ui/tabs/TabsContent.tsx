import { cn } from "@/lib/utils";
import { useTabsContext } from "./TabsContext";

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export default function TabsContent({
  value,
  children,
  className,
}: TabsContentProps) {
  const { activeTab } = useTabsContext();

  //activeTab = "react"なら、
  //TabsContent value="react" → 表示
  //TabsContent value="typescript" → null
  //TabsContent value="tailwind" → null
  if (activeTab !== value) {
    return null;
  }

  const tabId = `tab-${value}`;
  const panelId = `panel-${value}`;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      className={cn("p-4", className)}
    >
      {children}
    </div>
  );
}
