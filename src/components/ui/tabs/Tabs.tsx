import { cn } from "@/lib/utils";
import { useState } from "react";
import { TabsProvider } from "./TabsContext"; //追加

type TabsProps = {
  //最初はどのTabを開いておくか
  defaultValue?: string;
  //現在どのTabを選択しているか
  value?: string; //追加
  onChange?: (value: string) => void; //追加
  className?: string;
  children: React.ReactNode;
};

export default function Tabs({
  defaultValue,
  value,
  onChange,
  className,
  children,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeTab = value ?? internalValue;

  const handleChange = (nextValue: string) => {
    setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  return (
    <TabsProvider
      value={{
        activeTab,
        onChange: handleChange,
      }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </TabsProvider>
  );
}
