import { useState } from "react";

import Radio from "@/components/ui/radio/Radio";
import { Link } from "react-router-dom";

export default function RadioPage() {
  const [gender, setGender] = useState("male");

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components Radio
      </h1>

      <div className="mx-auto max-w-md space-y-6 p-8">
        <label className="mb-2 block font-medium">
          性別
          <span className="ml-1 text-red-500">*</span>
        </label>
        <Radio
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={setGender}
          label="男性"
        />

        <Radio
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={setGender}
          label="女性"
        />

        <Radio
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={setGender}
          label="その他"
        />
        <p className="text-sm text-red-500">性別を選択してください</p>
        <p className="text-sm text-gray-500">あとから変更できます</p>
        <p>選択：{gender}</p>
      </div>
    </div>
  );
}
