import { useState } from "react";

import RadioGroup from "@/components/ui/radio/RadioGroup";
import { Link } from "react-router-dom";

export default function RadioPage() {
  //ここはReactのstateだけ
  const [gender, setGender] = useState("male");

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components Radio
      </h1>
      <div className="mx-auto max-w-md p-8">
        {/* <RadioGroup へ全て渡している */}
        <RadioGroup
          name="gender"

          label="性別"

          required

          value={gender}

          // ここも重要、Radioがクリックされると
          //Radio → RadioGroup → setGender → Page となる
          //つまり、状態を持つのは Pageだけ
          onChange={setGender}

          helperText="あとから変更できます"

          // これが一番便利、かなりすっきりする、以前は<Radio/> を複数書いていた
          options={[
            {
              label: "男性",
              value: "male",
            },
            {
              label: "女性",
              value: "female",
            },
            {
              label: "その他",
              value: "other",
            },
          ]}
        />

        <p className="mt-6">選択：{gender}</p>
      </div>
    </div>
  );
}
