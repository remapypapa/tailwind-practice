import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean; //追加
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center gap-2",

        "rounded font-medium transition",

        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",

        variant === "secondary" && "bg-gray-300 hover:bg-gray-400",

        variant === "danger" && "bg-red-500 text-white hover:bg-red-600",

        size === "sm" && "px-2 py-1 text-sm",

        size === "md" && "px-4 py-2",

        size === "lg" && "px-6 py-3 text-lg",

        "...",

        className,
      )}
      {...props}
    >
      {loading ? "保存中..." : children}
    </button>
  );
}
