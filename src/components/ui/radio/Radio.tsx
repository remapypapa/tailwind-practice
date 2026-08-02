import { cn } from "@/lib/utils";
import { useId } from "react";

type RadioProps = {
  //必須ではない
  //const generatedId = useId(); で自動生成するから
  //<Radio ... />だけでも使える
  id?: string;

  //最重要！Radioをグループ化するもの
  name: string;
  //Radio自身が持つ値(male, femail,otherなど)
  value: string;
  //RadioGroupが checked={value === option.value} を計算して渡す
  //Radio自身は、私はチェックされていますか？ しか知りません。
  checked: boolean;
  //チェックされたら、male などを親に返す
  onChange: (value: string) => void;

  label: string;

  disabled?: boolean;

  className?: string;
};

export default function Radio({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
  className,
}: RadioProps) {
  //例えば、id="radio-1" を毎回考える必要がありません。
  //:r0: :r1: :r2: のように一意なidを作ってくれます
  const generatedId = useId();
  //idがある → それを使う ない → useId
  const radioId = id ?? generatedId;

  return (
    //<label が重要！、<input />や<span>男性</span>だけだと
    //丸をクリックしないとチェックできません
    //labelにすると ○ 男性 全部クリックできます、UXがかなり良くなります。
    <label
      htmlFor={radioId}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}

        //ここがReact、HTMLだけなら checked だが、Reactでは、checked={checked}になる
        //つまり、Reactのstateと同期しています
        checked={checked}
        disabled={disabled}

        //クリック → male → 親へ渡す
        onChange={() => onChange(value)}
        className={cn(
          "h-4 w-4 border-gray-300 text-blue-600",
          "focus:ring-blue-500",
        )}
      />
      {/* 表示する文字、男性 のこと */}
      <span>{label}</span>
    </label>
  );
}
