import { cn } from "@/lib/utils";
import { useId } from "react";

type CheckboxProps = {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;

  label?: string;
  required?: boolean;

  disabled?: boolean;

  helperText?: string;
  error?: string;

  className?: string;
};

export default function Checkbox({
  id,
  checked,
  onChange,
  label,
  required,
  disabled = false,
  helperText,
  error,
  className,
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex cursor-pointer items-center gap-2",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          required={required}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />

        {label && <span>{label}</span>}
      </label>

      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : (
        helperText && <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
