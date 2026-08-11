import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "rounded-md border px-4 py-2",
          "bg-white text-sm font-medium",
          "hover:bg-gray-50",
        )}
      >
        メニュー
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-0 top-full z-10 mt-2",
            "w-40 rounded-md border bg-white p-1 shadow-md",
          )}
        >
          <button
            type="button"
            className={cn(
              "block w-full rounded px-3 py-2",
              "text-left text-sm",
              "hover:bg-gray-100",
            )}
          >
            編集
          </button>

          <button
            type="button"
            className={cn(
              "block w-full rounded px-3 py-2",
              "text-left text-sm",
              "hover:bg-gray-100",
            )}
          >
            コピー
          </button>

          <button
            type="button"
            className={cn(
              "block w-full rounded px-3 py-2",
              "text-left text-sm",
              "hover:bg-gray-100",
            )}
          >
            削除
          </button>
        </div>
      )}
    </div>
  );
}
