import Tabs from "@/components/ui/tabs/Tabs";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const items = [
  {
    id: "react",
    label: "React",
    content: (
      <div>
        <h2 className={cn("mb-2 text-lg font-bold")}>React</h2>

        <p>ReactはUIを構築するためのJavaScriptライブラリです。</p>
      </div>
    ),
  },
  {
    id: "typescript",
    label: "TypeScript",
    content: (
      <div>
        <h2 className={cn("mb-2 text-lg font-bold")}>TypeScript</h2>

        <p>TypeScriptはJavaScriptに型システムを追加した言語です。</p>
      </div>
    ),
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    content: (
      <div>
        <h2 className={cn("mb-2 text-lg font-bold")}>Tailwind CSS</h2>

        <p>Tailwind CSSはユーティリティクラスを使ってUIを構築します。</p>
      </div>
    ),
  },
];

export default function TabsPage() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">React UI Components Tabs</h1>
      <div>
        <div className={cn("p-8")}>
          <h1 className={cn("mb-6 text-2xl font-bold")}>Tabs</h1>

          <Tabs items={items} defaultValue="react" />
        </div>
      </div>
    </div>
  );
}
