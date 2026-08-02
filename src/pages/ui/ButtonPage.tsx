import Button from "@/components/ui/button/Button";
import { Link } from "react-router-dom";

export default function ButtonPage() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components Button
      </h1>

      <div className="flex flex-col space-y-4 p-8">
        <p>variant 指定なし</p>
        <Button>保存</Button>

        <p>variant="secondary"</p>
        <Button variant="secondary">キャンセル</Button>

        <p>variant="danger"</p>
        <Button variant="danger">削除</Button>

        <p>size="sm"</p>
        <Button size="sm">小さい</Button>

        <p>size="lg"</p>
        <Button size="lg">大きい</Button>

        <p>disabled</p>
        <Button disabled>無効</Button>

        <p>onClick={`() => alert("クリック")`}</p>
        <Button onClick={() => alert("クリック")}>Click</Button>

        <p>実務でよくある追加機能 1 className</p>
        <p>className="w-full"</p>
        <Button className="w-full">ログイン</Button>

        <p>実務でよくある追加機能 2 アイコン</p>
        <div>
          <pre>
            <code>{`<span>💾</span>`}</code>
          </pre>
        </div>
        <Button>
          <span>💾</span>
          保存
        </Button>

        <p>実務でよくある追加機能 3 loading</p>
        <Button loading>保存</Button>

        <p>実務でよくある追加機能 4 submit</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("送信しました");
          }}
        >
          <Button type="submit">登録</Button>
        </form>

        <p>実務でよくある追加機能 5 tailwind-merge</p>
        <p>className="px-10" を指定しているのでこれが効いている</p>
        <Button className="px-10">保存</Button>
      </div>

      <div className="p-4">
        <p>ポイント</p>
        <pre>
          <code>{`
Button.tsx
├── ボタンの機能を作る
├── Propsを定義する
├── Tailwindを書く
└── ボタンの見た目を決める

        ↑

ButtonPage.tsx
├── Buttonをimport
├── Propsを渡す
└── ボタンを配置する
            `}</code>
        </pre>
      </div>
    </div>
  );
}
