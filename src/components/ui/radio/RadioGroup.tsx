import { cn } from "@/lib/utils";
import Radio from "./Radio";

//options={[...]} を書くため
type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  name: string;

  //value, onChange, options の3つが最重要！
  value: string;

  onChange: (value: string) => void;

  options: Option[];

  //性別
  label?: string;

  //*を表示するだけ
  required?: boolean;

  //あとから変更できます
  helperText?: string;

  //選択してください
  error?: string;

  disabled?: boolean;

  className?: string;
};

export default function RadioGroup({
  name,
  value,
  onChange,
  options,
  label,
  required = false,
  helperText,
  error,
  disabled = false,
  className,
}: RadioGroupProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium">
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div className="space-y-2">
        {/* ここがReactで最重要！ //これにより、男性、女性、その他
        を自動生成している →optionsの要素が100あったら、Radioも100できる！ */}
        {options.map((option) => (
          //Radioへname, value, checked, label 全部渡している
          //Radioは何も考えていない、RadioGroupが全て管理している
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            // ここが一番重要！ femaleなら male==female false、 female==female true
            //other==female false なので、○ 男性 ● 女性 ○ その他 になる
            checked={value === option.value}
            onChange={onChange}
            label={option.label}
            disabled={disabled}
          />
        ))}
      </div>
      {/* ここに置く理由は、Radio全体のエラーだから、Radio1個ではない*/}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* helperTextも同様 */}
      {!error && helperText && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
