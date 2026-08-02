import { useState } from "react";

import Checkbox from "@/components/ui/checkbox/Checkbox";
import { Link } from "react-router-dom";

export default function CheckboxPage() {
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);

    if (!agree) return;

    alert("送信しました");
  };

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components Checkbox
      </h1>

      <div className="mx-auto max-w-md space-y-6 p-8">
        <Checkbox
          required
          checked={agree}
          onChange={setAgree}
          label="利用規約に同意する"
          helperText="ヘルパーテキスト"
          error={submitted && !agree ? "利用規約に同意してください" : undefined}
        />

        <p>
          状態：
          {agree ? "同意済み" : "未同意"}
        </p>

        <button
          onClick={handleSubmit}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          送信
        </button>
      </div>
    </div>
  );
}
