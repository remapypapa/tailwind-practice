import { cn } from "@/lib/utils";
import { useId } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];

  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  helperText?: string;
};

export default function Select({
  id,
  value,
  onChange,
  options,
  label,
  required = false,
  placeholder = "選択してください",
  disabled = false,
  className,
  error,
  helperText,
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <select
        id={selectId}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-lg border bg-white px-3 py-2",
          "focus:outline-none",
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500",
          disabled && "cursor-not-allowed bg-gray-100",
          className,
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : (
        helperText && <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
