import Select from "@/components/ui/select/Select";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectPage() {
  const [fruit, setFruit] = useState("");

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components Select
      </h1>

      <div className="mx-auto max-w-md space-y-6 border border-blue-300 p-8">
        <Select
          id="fruit"
          label="果物"
          required //={true}は省略可能
          value={fruit}
          onChange={setFruit}
          helperText={"リストから選択できます"}
          error={fruit ? undefined : "果物を選択してください"}
          options={[
            {
              label: "りんご",
              value: "apple",
            },
            {
              label: "みかん",
              value: "orange",
            },
            {
              label: "バナナ",
              value: "banana",
            },
          ]}
        />

        <p>選択した値：{fruit}</p>
      </div>
    </div>
  );
}
