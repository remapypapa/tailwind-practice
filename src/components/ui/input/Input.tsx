import { cn } from "@/lib/utils";

type InputProps = {
  id?: string;
  label?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
};

export default function Input({
  id,
  label,
  required = false,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  helperText,
  className,
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-lg border px-3 py-2",
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500",
          "focus:outline-none",
          disabled && "cursor-not-allowed bg-gray-100",
          className,
        )}
      />
      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : (
        helperText && <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
