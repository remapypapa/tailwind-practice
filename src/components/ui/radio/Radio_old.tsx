import { cn } from "@/lib/utils";
import { useId } from "react";

type RadioProps = {
  id?: string;

  name: string;

  value: string;
  checked: boolean;

  onChange: (value: string) => void;

  label?: string;

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
  const generatedId = useId();
  const radioId = id ?? generatedId;

  return (
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
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        className={cn(
          "h-4 w-4 border-gray-300 text-blue-600",
          "focus:ring-blue-500",
        )}
      />

      {label && <span>{label}</span>}
    </label>
  );
}
