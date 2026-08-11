// Tailwind CSSのクラスを結合するため。
import { cn } from "@/lib/utils";
//Tabs.tsxがContextに登録した、activeTab onChange のうち、今回は activeTab だけを取得するために使う
import { useTabsContext } from "./TabsContext";

//Propsの定義、TabsContentが受け取るProps
type TabsContentProps = {
  //<TabsContent value="react">Reactの説明</TabsContent>なら
  //このContentは「react」Tabに対応しています という意味
  //TabsTriggerにも、<TabsTrigger value="react">と同じvalueを指定します。
  /* 
  TabsTrigger             TabsContent
  value="react"    ←→    value="react"

  という対応関係
  */
  value: string;
  //実際に表示するコンテンツ
  //<TabsContent value="react"><p>ReactはUIを作るためのライブラリです。</p></TabsContent> なら
  //children → ReactはUIを作るためのライブラリです。
  children: React.ReactNode;
  //外部から追加のTailwind CSSを指定できます
  /* 
  <TabsContent
  value="react"
  className="bg-gray-50"

  のようにできる
  >
  */
  className?: string;
};

//TabsTriggerと対になる重要なコンポーネント
//現在選択されているTabに対応するコンテンツだけを表示するコンポーネント
//Propsを分割代入している
/* 
<TabsContent
  value="react"
  className="bg-gray-50"
>
  Reactの説明
</TabsContent>
なら
value     → "react"
className → "bg-gray-50"
children  → "Reactの説明"
となる
*/
export default function TabsContent({
  value,
  children,
  className,
}: TabsContentProps) {
  //ここがこのコンポーネントの中心
  /* 
  Tabs.tsxで、
  <TabsProvider
  value={{
    activeTab,
    onChange: handleChange,
  }}
  >
  としていたので、TabsContentはContextから
  activeTab
  を取得できます。

  例えば現在Reactが選択されているなら、
  activeTab = "react"
  */

  //最重要
  /* 
  activeTab = "react"なら
  TabsContent value="react"
        ↓
      表示

  TabsContent value="vue"
        ↓
      非表示

  TabsContent value="typescript"
        ↓
      非表示
  */
  const { activeTab } = useTabsContext();

  //表示するかどうかを判定、ここがTabsContentの最重要部分
  //現在選択されているTabと、自分のvalueが違うなら何も表示しない
  //activeTab = "react" とし、<TabsContent value="react"> なら
  //"react" !== "react" → false、つまり return nullは実行されません
  //TabsContent value="react" → 表示
  //TabsContent value="typescript" → null、つまり表示されない
  //TabsContent value="tailwind" → null、つまり表示されない
  if (activeTab !== value) {
    //何も描画しない という意味
    /* 
    自分のvalueとactiveTabが違う
        ↓
       null
        ↓
    何も描画しない
    */
    return null;
  }

  //TabとPanelのIDを作る、TabsTrigger.tsxと対になっています
  const tabId = `tab-${value}`;
  const panelId = `panel-${value}`;

  return (
    <div
      //Tabの中身を表示する領域
      //panelId がid、つまり panelId が "panel-react" なら それが id になる
      /* 
      Tab
      id="tab-react"
        │
        │ aria-controls="panel-react"
        ▼
      Panel
      id="panel-react"

      という関係
      */
      id={panelId}
      //これはアクセシビリティ用
      //TabsListには、role="tablist"、TabsTriggerには、role="tab"があり
      //今回は、role="tabpanel"
      /* 
      つまり、
      tablist
      │
      ├ ── tab
      ├── tab
      └── tab

      tabpanel

      というTabsの構造をブラウザやスクリーンリーダーに伝えています。
      */
      role="tabpanel"
      //これもアクセシビリティに関係します。
      //tabId = "tab-react" なら aria-labelledby="tab-react" になる
      //このPanelはtab-reactというTabによって説明・関連付けられています という関係を示します。
      /* 
      ARIA属性を整理
      TabsList
        role="tablist" → Tabのグループ

      TabsTrigger
        role="tab"
        aria-selected={isActive}
        aria-controls={panelId}
        ↓
      これはTabです
      現在選択されているか
      どのPanelを操作するか

      TabsContent
        role="tabpanel"
        aria-labelledby={tabId}
        ↓
      これはTabのコンテンツです
      どのTabに対応しているか
      */
      aria-labelledby={tabId}
      //基本スタイルとして、p-4、classNameで親から追加スタイルを受け取ります。
      className={cn("p-4", className)}
    >
      {/* ここに実際のコンテンツが表示される 
      
      <TabsContent value="react">
        <p>Reactの説明です。</p>
      </TabsContent>

      なら
      <div>
      <p>Reactの説明です。</p>
      </div>
      になる
      */}

      {children}
    </div>
  );
}

/* 
TabsTriggerとの連携

<Tabs>
  <TabsList>
    <TabsTrigger value="react">
      React
    </TabsTrigger>

    <TabsTrigger value="vue">
      Vue
    </TabsTrigger>
  </TabsList>

  <TabsContent value="react">
    Reactの説明
  </TabsContent>

  <TabsContent value="vue">
    Vueの説明
  </TabsContent>
</Tabs>

とする

最初
activeTab = "react"

すると
TabsTrigger "react"
    ↓
isActive = true

TabsTrigger "vue"
    ↓
isActive = false

そしてContent側は、
TabsContent "react"
    ↓
"react" === "react"
    ↓
表示

TabsContent "vue"
    ↓
"react" !== "vue"
    ↓
return null

Vueをクリックすると？
TabsTrigger側で、
onClick={() => onChange(value)}
が実行されます。

Vueのvalueは、
"vue" 
なので
onChange("vue")
↓
Tabs.tsx
handleChange("vue")
↓
internalValue = "vue"
↓
activeTab = "vue"

となります。
するとTabsContentも再評価されます。

TabsContent "react"
    ↓
"vue" !== "react"
    ↓
return null

TabsContent "vue"
    ↓
"vue" !== "vue"
    ↓
表示

結果
React    Vue
          ───

Vueの説明

になります。


┌────────────────────────────┐
│ Tabs.tsx                   │
│                            │
│ activeTabを管理            │
│ onChangeを管理             │
└─────────────┬──────────────┘
              │
              ▼
┌────────────────────────────┐
│ TabsProvider               │
│                            │
│ activeTab                  │
│ onChange                   │
└───────┬──────────┬─────────┘
        │          │
        ▼          ▼
┌────────────┐  ┌──────────────┐
│ TabsTrigger│  │ TabsContent  │
│            │  │              │
│ value      │  │ value        │
│     ↓      │  │      ↓       │
│ activeTab  │  │ activeTab    │
│ と比較     │  │ と比較       │
└────────────┘  └──────────────┘

TabsTriggerとTabsContentは、同じvalueを使ってペアになる

という設計

value="react"

TabsTrigger ───────── TabsContent
     │                    │
     │                    │
   React               Reactの内容

   これが今回のTabsコンポーネントの基本設計
*/
