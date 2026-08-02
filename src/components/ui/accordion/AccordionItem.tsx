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
  id, //追加
  title,
  children,
  isOpen,
  onToggle,
  disabled = false,
}: AccordionItemProps) {
  // id="react" の場合、react-content という contentIdになる
  const contentId = `${id}-content`; //追加

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
        //スクリーンリーダーなどに、状態を伝えられる
        aria-expanded={isOpen} //追加、開いている場合 true、閉じている場合 false
        aria-controls={contentId} //追加、
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-gray-100",
          disabled && "cursor-not-allowed hover:bg-transparent",
        )}
      >
        <span>{title}</span>

        <span
          //単なる視覚的なアイコンなので、スクリーンリーダーには読み上げてもらう必要がない
          aria-hidden="true" //追加
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
        // contentId が divのidになり、ボタンがこのコンテンツを操作している
        <div id={contentId} className={cn("border-t bg-gray-50 px-4 py-3")}>
          {children}
        </div>
      )}
    </div>
  );
}
