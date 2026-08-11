import { createContext, useContext } from "react";

//Tabsコンポーネント専用のContextを作成しているファイル
//Tabs → TabList → Tab → TabPanel のような親子コンポーネント間で状態を共有するための仕組み
type TabsContextValue = {
  //Contextから子へ渡す情報 = Contextに何を入れるかを定義
  //activeTab = "react" なら現在Reactが選択されている という情報
  //{activeTab onChange} というオブジェクトを共有することになる
  //{activeTab: "react", onChange: setActiveTab}のような感じになる
  activeTab: string | undefined;
  //function(value: string)という関数
  //onChange("vue") とすると、親コンポーネントで setActiveTab("vue")が実行されるイメージ
  onChange: (value: string) => void;
};

//Tabsに関する共有データを入れておく場所を作り、TabsContextへ代入
//TabsContextには activeTab と onChangeが入っているイメージ
//TabsContextは、TabsContextValue | undefined の値を持つ = 型、初期値は undefined
const TabsContext = createContext<TabsContextValue | undefined>(undefined);

//これがContextを提供する親、Contextへ値を入れるためのコンポーネント
export function TabsProvider({
  // Props は2つ
  value,
  children,
}: {
  //{activeTab, onChange} が渡される
  //<TabsProvider value={{activeTab, onChange: handleChange}} > こんな感じ
  value: TabsContextValue;
  //Providerで囲む中身
  //<TabsProvider value={...}> <TabList /> <TabPanel /> </TabsProvider> なら
  //TabList TabPanel が childrenになる
  children: React.ReactNode;
}) {
  // TabsContext.Providerの中にある子コンポーネントはContextを取得できる
  //ここで、Contextへ value を入れている
  //valueはTabsContextValue、つまり、activeTab = "react" onChange = handleChange そして
  //このProviderの中にある、Tab TabPanel TabList などから Contextを読めるようになる
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

//これはカスタムHook
export function useTabsContext() {
  //Contextの中身を取得している
  //例えば、{activeTab: "react", onChange: handleChange}が返ってくる
  const context = useContext(TabsContext);

  //エラーチェック
  if (!context) {
    //Providerが無ければ、context = undefined となり、以下を実行
    //TabsProviderで囲まれていないですよ！の意味
    //<Tab />だけを書くと、Providerが存在しない → context = undefined になる
    //そのまま context.activeTab とすると Cannot read property...のような分かりにくいエラーになる
    //そのため、throw new Error(...)として、...に原因が分かりやすいエラーを出す
    throw new Error("useTabsContext must be used within Tabs");
  }
  //エラーが出なければ、Contextは存在するのでそれを出力
  //呼び出し側では、const { activeTab, onChange } = useTabsContext(); として使える
  //TabsContextValue として扱われる
  return context;
}

/*
このファイル全体の流れ
① 型を作る
        ↓
TabsContextValue

        ↓

② Contextを作る
        ↓
TabsContext

        ↓

③ Providerを作る
        ↓
<TabsProvider value={...}>
    ...
</TabsProvider>

        ↓

④ 子コンポーネントで使う
        ↓
const { activeTab, onChange } =
    useTabsContext();
*/
