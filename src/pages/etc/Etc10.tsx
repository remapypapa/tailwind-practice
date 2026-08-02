import { Link } from "react-router-dom";

export default function Etc10() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習10 Tailwind + React の実践（ポートフォリオ制作）
      </h1>

      <p>目標</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
+------------------------------------------------------+
| Header                                               |
+------------------------------------------------------+

 Hero Section

+------------------------------------------------------+

 最新記事

+----------+ +----------+ +----------+
|  Card    | |  Card    | |  Card    |
+----------+ +----------+ +----------+

+------------------------------------------------------+

 Skills

 React
 Java
 Spring Boot
 PostgreSQL

+------------------------------------------------------+

 Footer          
          `}</code>
        </pre>
      </div>

      <p>ステップ1 コンポーネントを分割する</p>
      <p>まずは画面を部品に分けます。</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
App

├── Header
├── Hero
├── SectionTitle
├── Card
├── Button
├── SkillCard
├── ContactForm
├── Footer          
          `}</code>
        </pre>
      </div>

      <p>ステップ2 ディレクトリ構成</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
src/

├── components/
│
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   └── Avatar.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── Skills.tsx
│       ├── Works.tsx
│       └── Contact.tsx
│
├── lib/
│   └── utils.ts
│
├── assets/
│
├── App.tsx
│
└── main.tsx
          `}</code>
        </pre>
      </div>

      <p>ステップ3 レイアウトを作る</p>
      <p>まずHeaderだけ作ります。</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <h1 className="text-xl font-bold">
          Portfolio
        </h1>

        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Works</a>
          <a href="#">Skills</a>
        </nav>

      </div>
    </header>
  );
}
          `}</code>
        </pre>
      </div>

      <p>ここまでで、以下を使用</p>
      <ul className="list-disc p-4">
        <li>Flex</li>
        <li>Position</li>
        <li>z-index</li>
      </ul>

      <p>ステップ4 Hero</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
<section className="bg-slate-100 py-24">

<div className="mx-auto max-w-6xl px-6">

<h2 className="text-5xl font-bold">

Hello

</h2>

<p className="mt-6 max-w-xl">

React Developer

</p>

<Button>

お問い合わせ

</Button>

</div>

</section>          
          `}</code>
        </pre>
      </div>

      <p>ここまでで、以下を使用</p>
      <ul className="list-disc p-4">
        <li>Spacing</li>
        <li>Typography</li>
      </ul>

      <p>ステップ5 Card</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
<Card>

<img
className="
aspect-video
w-full
object-cover
"
/>

<div className="p-6">

<h2>

React

</h2>

</div>

</Card>          
          `}</code>
        </pre>
      </div>

      <p>ここでは、以下を使用</p>
      <ul className="list-disc p-4">
        <li>Object Fit</li>
        <li>Aspect Ratio</li>
        <li>Shadow</li>
      </ul>

      <p>ステップ6 Grid</p>
      <p>レスポンシブの基本</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<Card />

<Card />

<Card />

</div>
          `}</code>
        </pre>
      </div>

      <p>ステップ7 Button</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
<Button>

詳細を見る

</Button>          
          `}</code>
        </pre>
      </div>

      <p>Buttonの中では</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
className={cn(

"rounded-lg bg-blue-500",

className

)}          
          `}</code>
        </pre>
      </div>

      <p>ステップ8 Modal</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
<Modal open={open}>

...

</Modal>          
          `}</code>
        </pre>
      </div>

      <p>ここでは、以下を使用</p>
      <ul className="list-disc p-4">
        <li>Position</li>
        <li>Overflow</li>
        <li>z-index</li>
      </ul>

      <p>ステップ9 Form</p>
      <p>Peerを使用</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
<input

className="
peer
rounded
border
"
/>

<p className="peer-focus:text-blue-500">          
          `}</code>
        </pre>
      </div>

      <p>ステップ10 完成</p>
      <p>完成すると</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
Header

↓

Hero

↓

Works

↓

Skills

↓

Contact

↓

Footer          
          `}</code>
        </pre>
      </div>

      <p>画面を見たら考えること</p>
      <p>「どう実装するか」を考える癖を付ける</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
┌─────────────────────┐

画像

タイトル

説明

ボタン

└─────────────────────┘          
          `}</code>
        </pre>
      </div>

      <p>コンポーネントとTailwindクラスに分解して考えるのがコツ</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`
Card

↓

rounded-xl

↓

shadow

↓

overflow-hidden

↓

object-cover

↓

Button

↓

group-hover          
          `}</code>
        </pre>
      </div>

      <p>この章で覚えるべきこと</p>
      <ul className="list-disc p-4">
        <li>UIは「画面」ではなく「部品（コンポーネント）」として考える。</li>
        <li>
          まずレイアウト（Header・Hero・Section）を作り、その中にCardやButtonを配置する。
        </li>
        <li>
          Tailwindはコンポーネント内に閉じ込め、Propsで見た目を切り替える。
        </li>
        <li>レスポンシブ対応は最初から意識する。</li>
        <li>
          画面を見たら「どのコンポーネントに分けられるか」を考える癖を付ける。
        </li>
      </ul>
    </div>
  );
}
