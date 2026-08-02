import Input from "@/components/ui/input/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InputPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components Input
      </h1>
      <div className="mx-auto max-w-md space-y-4 border border-blue-300 p-8">
        <Input
          label="ユーザー名"
          required={true}
          value={name}
          onChange={setName}
          placeholder="名前を入力してください"
          helperText="8文字以上入力してください"
          error={name ? undefined : "入力してください"}
        />
        <p>入力値：{name}</p>

        <Input
          type="password"
          label="パスワード"
          value={password}
          onChange={setPassword}
        />
        <p>入力値：{password}</p>

        <Input
          type="email"
          label="メールアドレス"
          value={email}
          onChange={setEmail}
        />
        <p>入力値：{email}</p>

        <Input type="tel" label="電話番号" value={tel} onChange={setTel} />
        <p>入力値：{tel}</p>

        <Input type="date" label="日付" value={date} onChange={setDate} />
        <p>入力値：{date}</p>

        <Input type="number" label="年齢" value={age} onChange={setAge} />
        <p>入力値：{age}</p>
      </div>
      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>親コンポーネントが状態を管理する（Controlled Component）</li>
        <li>value と onChange の組み合わせでデータをやり取りする</li>
        <li>label、error、helperText などをPropsで柔軟に表示する</li>
        <li>className でスタイルを拡張できるようにする</li>
        <li>type や disabled などHTML標準の機能もPropsとして受け取る</li>
      </ul>
    </div>
  );
}
