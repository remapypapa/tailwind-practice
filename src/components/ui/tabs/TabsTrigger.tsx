//Tailwind CSSのクラス名をまとめるため。
import { cn } from "@/lib/utils";
//先ほど作ったカスタムHook
import { useTabsContext } from "./TabsContext";

//TabsTriggerが受け取るProps
type TabsTriggerProps = {
  //そのTabを識別するための値
  //<TabsTrigger value="react">React</TabsTrigger>なら、
  //表示文字 → React、識別値 → react
  //「画面に表示する文字」と「Tabを識別する値」は別物
  value: string;
  //Tabに表示する内容
  //<TabsTrigger value="react">React</TabsTrigger>なら、
  //children は React
  children: React.ReactNode;
  //Tabを無効化するためのProps
  /*
  <TabsTrigger
  value="react"
  disabled
  >
  React
  </TabsTrigger>

  のようにできる
  */
  disabled?: boolean;
  className?: string;
};

//クリックされるTabそのもの」を担当するコンポーネント
/* 
TabsTriggerは、

1. Contextから現在のTabを取得
2. 自分自身が選択中か判定
3. クリックされたらonChange()を呼ぶ
4. 選択中なら見た目を変える
5. アクセシビリティ用の属性を設定

という仕事をしています。
*/

export default function TabsTrigger({
  value,
  children,
  disabled = false, //デフォルト値
  className,
}: TabsTriggerProps) {
  //TabsContextの、activeTab, activeTab が使われる
  //[重要]ContextからTabsの状態を取得
  const { activeTab, onChange } = useTabsContext();

  //[重要]C自分は現在選択されている？を判断
  //activeTab = "react" で
  //<TabsTrigger value="react"> なら
  //"react" === "react" なので isActive = true になる
  //<TabsTrigger value="vue"> なら
  //"react" === "vue" なので isActive = false
  //現在選択中 → isActive = true、それ以外   → isActive = false
  const isActive = activeTab === value;

  //value = "react" なら tabId = "tab-react"
  const tabId = `tab-${value}`;
  //value = "react" なら panelId = "panel-react"
  const panelId = `panel-${value}`;

  /*
  この2つは後で非常に重要になる
  Tab
  id="tab-react"
      ↓ 対応関係
  Panel
  id="panel-react"

  この関係をARIA属性によってブラウザや支援技術に伝える
  */

  return (
    //Tabは実際にはbuttonとして作っている、Tabはクリックして状態を変更するUIなので<button> が自然
    <button
      //tabId = "tab-react" なら id = "tab-react"
      id={tabId}
      //このボタンがformの中に入った場合、<button> のデフォルトは送信ボタンとして扱われる可能性がある
      //<button type="button"> として このボタンはフォーム送信用ではありません と明示している
      type="button"
      //これはアクセシビリティのため
      /* 
      <div role="tablist"> //TabsList にある
        <button role="tab">
        <button role="tab">
        <button role="tab">
      </div>
      という関係

      tablist
        ├── tab
        ├── tab
        └── tab
        という意味をブラウザやスクリーンリーダーに伝えている
      */
      role="tab"
      //このTabは現在選択されていますか？ を伝える属性
      //Reactが選択中なら、aria-selected="true"
      //Vueなら、aria-selected="false" という状態になる
      aria-selected={isActive}
      //panelId = "panel-react" なら、aria-controls="panel-react"
      //このTabはpanel-reactというPanelを操作しています という関係を示します
      /* 
      tab-react
        │
        │ aria-controls
        ▼
      panel-react
      という関係
      */
      aria-controls={panelId}
      //Propsで指定した値を、そのままHTMLのdisabled属性に渡しています
      //<TabsTrigger value="react" disabled> なら <button disabled> になる
      //ブラウザ標準のボタン無効化も働きます
      disabled={disabled}
      //これがクリック時の処理、親のState変更を要求
      //<TabsTrigger value="vue"> をクリックしたら、onChange("vue") が実行される
      //Contextから取得したonChangeは、元をたどるとTabs.tsxの
      /* 
      const handleChange = (nextValue: string) => {
        setInternalValue(nextValue);
        onChange?.(nextValue);
      };

      したがって
      Vue Tabをクリック
          ↓
      onChange("vue")
          ↓
      Tabs.tsxのhandleChange()
          ↓
      internalValue = "vue"
          ↓
      activeTab = "vue"
          ↓
      再レンダリング
          ↓
      VueがisActive=true

      という流れ、ここは今回のTabsの心臓部
      */
      //[重要]クリックで親側の状態を変更
      //自分のvalueをContext経由で親側へ伝える
      onClick={() => onChange(value)}
      //状態に応じてCSSを変えています
      className={cn(
        //下側に2pxのボーダーを用意、通常時は透明
        "border-b-2 border-transparent px-4 py-2",
        //文字を小さめ＋少し太め
        "text-sm font-medium",
        //マウスを乗せたときに文字色を変更
        "hover:text-gray-900",
        //状態によって見た目を変更、条件付きclassName、
        //State → UI というReactの基本的な考え方
        //disabledがfalse → false && "..." → false なのでクラスは追加されません
        //disabledがtrue → "cursor-not-allowed opacity-50" が追加されます
        disabled && "cursor-not-allowed opacity-50",
        //isActive時、選択中なら、border-blue-500 text-blue-600 が追加される
        //下線と文字色が変わります
        isActive && "border-blue-500 text-blue-600",
        className,
      )}
    >
      {/* Tabの文字を表示 
      <TabsTrigger value="react">
        React
      </TabsTrigger>
      なら
      <button>
        React
      </button>
      になる
      */}
      {children}
    </button>
  );
}

/* 
全体を一本の流れで見る
例えば
<Tabs defaultValue="react">
  <TabsList>
    <TabsTrigger value="react">
      React
    </TabsTrigger>

    <TabsTrigger value="vue">
      Vue
    </TabsTrigger>
  </TabsList>
</Tabs>
とすると、

internalValue = "react"
activeTab = "react"

React Tab
value = "react" なので
isActive = "react" === "react"
↓
true

Vue Tab
value = "vue" なので
isActive = "react" === "vue"
↓
false

画面としては、
React     Vue
────────
のようになります。

border-blue-500
text-blue-600
が付きます。

そしてVueをクリックすると、
Vueクリック
   ↓
onChange("vue")
   ↓
Tabs.tsx
   ↓
setInternalValue("vue")
   ↓
activeTab = "vue"
   ↓
再レンダリング

となります。
すると今度は、
React     Vue
          ─────
という状態になります。

今回の構造では、

             Tabs
              │
       ┌──────┴──────┐
       │             │
   activeTab      onChange
       │             │
       └──── Context ┘
              │
       ┌──────┴──────┐
       ↓             ↓
   TabsTrigger   TabsPanel

   となっています
   今回のContextを使ったCompound Component的なTabs設計の核心部分
*/
