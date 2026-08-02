//cn() は clsx + tailwind-merge
//条件分岐、className追加、Tailwind競合解決 を全部やってくれる
import { cn } from "@/lib/utils";
import { useId } from "react";

//親から受け取るデータ を定義
type SwitchProps = {
  id?: string;

  checked: boolean;
  onChange: (checked: boolean) => void;

  label?: string;

  disabled?: boolean;

  helperText?: string;
  error?: string;

  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "danger";

  name?: string;

  className?: string;

  onBlur?: () => void;
};

export default function Switch({
  id,
  checked, //props.checked ではなく checkedだけで使えるようにしている
  onChange,
  label,
  disabled = false, //デフォルト値
  helperText,
  error,
  size = "md", //デフォルト値
  color = "primary", //デフォルト値
  name,
  className,
  onBlur,
}: SwitchProps) {
  ////:r0: :r1: :r2: のような一意なIDを生成します。
  //これにより、<label htmlFor={switchId}>と<button id={switchId}>を紐付けられます。
  const generatedId = useId();
  //idがある場合はそれを使い、なければgeneratedId を使う
  const switchId = id ?? generatedId;

  //ここが一番重要、SwitchボタンのサイズごとのCSS一覧
  //trackは背景、Thumbは◯、translateはThumbがどれくらい動くか の指定をサイズごとに指定している
  //
  const sizeClasses = {
    sm: {
      //高さ5 → 5/4=1.25rem 1.25x16=20px、横幅9 → 9/4=2.25rem 2.25x16=36px
      track: "h-5 w-9",
      //直径4 → 4/4=1rem=16px 0.5/4=0.125 0.125x16=2px 左2px、上2pxずらす
      thumb: "h-4 w-4 left-0.5 top-0.5",
      //thumbの移動量、x 方向、つまり右に4=1rem=16px
      translate: "translate-x-4",
    },
    md: {
      track: "h-6 w-11",
      thumb: "h-5 w-5 left-0.5 top-0.5",
      translate: "translate-x-5",
    },
    lg: {
      track: "h-7 w-14",
      thumb: "h-6 w-6 left-0.5 top-0.5",
      translate: "translate-x-7",
    },
  };

  //色指定一覧
  const colorClasses = {
    primary: "bg-blue-600",
    success: "bg-green-600",
    danger: "bg-red-600",
  };

  //画面表示、Switch helperText error を縦に並べている
  return (
    <div className={cn("space-y-1", className)}>
      <label
        htmlFor={switchId}
        className={cn(
          //横並び指定
          "inline-flex cursor-pointer items-center gap-3",
          //disabled=true なら 半透明になる
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <button
          id={switchId}
          type="button"
          role="switch" //スクリーンリーダーが「これはSwitchです」と認識
          aria-checked={checked} //ON なら aria-checked=true、OFF なら false
          aria-invalid={!!error}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          //ここが重要、checked=true なら !checked → false になる、つまり ON → OFF、逆も同じ
          onClick={() => onChange(!checked)}
          //ここは背景
          className={cn(
            "relative rounded-full transition-colors",
            sizeClasses[size].track, //sizeによってtrackの値を変更
            //checkedであれば、color=primary つまり、bg-blue(デフォルト値)、OFFならbg-gray
            checked ? colorClasses[color] : "bg-gray-300",
          )}
        >
          {/* rounded-fullなので ◯ 、absoluteなのでTrackの上に乗る
          checked なら translate-x-5 になる、つまりx方向に5 動く*/}
          <span
            className={cn(
              "absolute rounded-full bg-white transition-transform",
              sizeClasses[size].thumb,
              checked && sizeClasses[size].translate,
            )}
          />
        </button>

        {/* labelがあるときだけダークモードを表示*/}
        {label && <span className="text-sm font-medium">{label}</span>}
      </label>

      {/* helperTextあり、errorなし の時だけ helperText ("メール通知を受け取ります。") を表示*/}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
      {/* エラーがあれば赤文字表き(エラーがあります)になる */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
