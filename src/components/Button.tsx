// ButtonPropsという**型(Type)**を作っています
// このButtonコンポーネントが受け取れるデータは
// children → <Button>保存</Button> の場合、"保存"部分がchildren、children="保存"
// だけですよ、という意味
// //childrenにはReactで表示できるものなら何でも入れていい、文字でもアイコンでもhtmlでも可能

type ButtonProps = {
  children: React.ReactNode;

  //ボタンの色、サイズを選べるようにする
  //? は省略可能の意味、初期値をそれぞれprimary、mdとしている
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  //Propsを受け取っている、childrenはボタン名、valiant、sizeは初期値
  children,
  variant = "primary",
  size = "md",
}: ButtonProps) {
  // 色のバリエーションを準備、hover時の色も指定
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  //ボタンのサイズ(テキストのサイズ)を指定
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  //HTMLを返す
  return (
    <button
      //className ="文字列"の文字列部分を組み立てる
      //${variantStyles[variant]}、${sizeStyles[size]}、ここで指定した内容におき変わる
      //danger、lgをした場合、"bg-red-500 hover:bg-red-600 px-6 py-3 text-lg"が生成される
      className={`rounded-lg text-white transition ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </button>
  );
}
