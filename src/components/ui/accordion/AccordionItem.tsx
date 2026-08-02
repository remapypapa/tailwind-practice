import { cn } from "@/lib/utils";

//AccordionItem はuseState()がない、つまり状態を持たない=開いているか、閉じているかを知らない
//全部親から教えてもらう
type AccordionItemProps = {
  id: string;
  title: string;
  // childrenとは、<AccordionItem>....ここの部分...</AccordionItem>
  //childrenパターンという
  children: React.ReactNode;
  //親からtrue が来たら内容を表示
  //{isOpen && (...)} → Reactで一番使う条件分岐
  isOpen: boolean;
  //クリックされたら呼び出す、自分では開くも閉じるもしない、全て親まかせ
  onToggle: () => void;
  disabled?: boolean;
};

export default function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  disabled = false,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border",
        disabled && "opacity-50",
      )}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-gray-100",
          disabled && "cursor-not-allowed hover:bg-transparent",
        )}
      >
        <span>{title}</span>

        <span
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        >
          ▶
        </span>
      </button>

      {/* isOpen={true} なら開く、isOpen={false} なら閉じる */}
      {isOpen && (
        //
        <div className={cn("border-t bg-gray-50 px-4 py-3")}>{children}</div>
      )}
    </div>
  );
}
