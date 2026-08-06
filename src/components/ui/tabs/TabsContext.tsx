import { createContext, useContext } from "react";

type TabsContextValue = {
  //Contextから子へ渡す情報です
  //activeTab = "react" なら現在Reactが選択されている という情報
  activeTab: string | undefined;
  onChange: (value: string) => void;
};

//Tabsに関する共有データを入れておく場所
const TabsContext = createContext<TabsContextValue | undefined>(undefined);

//これがContextを提供する親
export function TabsProvider({
  value,
  children,
}: {
  value: TabsContextValue;
  children: React.ReactNode;
}) {
  // TabsContext.Providerの中にある子コンポーネントはContextを取得できる
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabsContext must be used within Tabs");
  }

  return context;
}
