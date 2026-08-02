import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ImageCard from "../../components/ImageCard";
import Modal from "../../components/Modal";

export default function Etc8() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習8 コンポーネント設計（Button・Card・Modal）
      </h1>

      <p>コンポーネントとは？</p>
      <p>例えば、このようなボタンが画面中に30個あるとします。</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
  保存
</button>`}</code>
        </pre>
      </div>
      <p>これを30回書くのは大変</p>
      <p>そこで</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Button>保存</Button>`}</code>
        </pre>
      </div>

      <p>だけで使えるようにします。</p>

      <p className="pt-4">React + Tailwindの考え方</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`App

├── Button
├── Card
├── Modal
├── Input
├── Badge
├── Avatar
├── Header
└── Footer`}</code>
        </pre>
      </div>

      <p>一つ一つを部品として作る</p>

      <p className="pt-4">Button.tsx</p>
      <ul className="list-disc p-4">
        <li>ボタンの色、サイズのバリエーションを準備</li>
        <li>
          使用時にボタンに値(Props)を与えることで、色、サイズを指定できて便利
        </li>
        <li>
          ボタンのバリエーションを用意することで、用途別に対応でき、どこからも呼べる、変更もここだけ修正すればいいので効率的
        </li>
      </ul>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={\`rounded-lg text-white transition \${variantStyles[variant]} \${sizeStyles[size]}\`}
    >
      {children}
    </button>
  );
}`}</code>
        </pre>
      </div>

      <p>Tailwindを書くのは一度だけ</p>
      <p className="pt-4">使用例</p>
      <p>※ components/Button.tsxから読み込んでいる</p>
      <p>(mt-4 flex flex-col gap-4 border border-blue-500 p-4)</p>
      <div className="mt-4 flex flex-col gap-4 border border-blue-500 p-4">
        (指定なし(初期値): variant = "primary" size = "md")
        <Button>保存</Button>
        (size = "sm")
        <Button size="sm">削除</Button>
        (variant = "secondary" size = "md")
        <Button variant="secondary" size="md">
          更新
        </Button>
        (variant="danger" size="lg")
        <Button variant="danger" size="lg">
          危険
        </Button>
      </div>

      <p className="pt-4">2. Propsで色を変える</p>
      <p>上記参照</p>

      <p className="pt-4">3. Cardコンポーネント</p>
      <p>Card.tsx</p>
      <ul className="list-disc p-4">
        <li>
          CardPropsという型を定義、引数はchildrenのみ、childrenは文字でも写真でもなんでもいい
        </li>
        <li>ここでカードの形状や書式を決めている</li>
        <li>具体的な中身は使用時に指定する</li>
      </ul>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`type CardProps= {
  children:React.ReactNode;
};
export default function Card({ children }:CardProps) {
	return (
		<div className="rounded-xl bg-gray-300 p-6 shadow-md">
        {children}
    </div>
  );
}`}</code>
        </pre>
      </div>

      <p>使用例</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Card>
	<h2>React</h2>
	<p>Tailwind CSS</p>
</Card>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <Card>
          <h2>React</h2>
          <p>Tailwind CSS</p>
        </Card>
      </div>

      <p className="pt-4">4. ImageCard</p>
      <p className="pt-4">ImageCard.tsx</p>
      <ul className="list-disc p-4">
        <li>
          CardPropsという型を定義、title(string)、image(string)を引数としてもつ
          <li>返すJSX内に、imageとtitleの表示書式を定義</li>
          <li>
            使用時にそれらに値を与えることで、このフォーマットを使いまわせる
          </li>
        </li>
      </ul>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`type CardProps= {
  title:string;
  image:string;
};
export default function ImageCard({
  title,
  image,
}:CardProps) {
	return (
		<div className="overflow-hidden rounded-xl shadow transition hover:shadow-lg">
		<img
			src={image}
			className="
              aspect-video
              w-full
              object-cover
              transition-transform
              duration-300
              hover:scale-110
        "
        />
     <div className="p-4">
	     <h2 className="font-bold">
          {title}
        </h2>
     </div>
   </div>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">使用例</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<ImageCard
	title="Tailwind"
	image="https://picsum.photos/800/500"
/>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <ImageCard title="Tailwind" image="https://picsum.photos/800/500" />
      </div>

      <p className="pt-4">5. Modal</p>
      <p className="pt-4">Modal.tsx</p>
      <ul className="list-disc p-4">
        <li>ModalPropsを定義、引数はopen(boolean)、children</li>
        <li>openがtrueならモーダルを表示し、falseなら何も表示しない</li>
        <li>
          左右中央配置、最前面、常時表示、ウィンドウ幅96/4=24rem=16x24=384px、高さは文字量による、余白上24/4=6rem=16x6=96px
        </li>
        <li>角丸、背景白、50%透過、余白などの設定がされている</li>
      </ul>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`type ModalProps= {
  open:boolean;
  children:React.ReactNode;
};
export default function Modal({
  open,
  children,
}:ModalProps) {
	if (!open)return null;
	return (
		<div className="fixed inset-0 z-50 bg-black/50">
		  <div className="mx-auto mt-24 w-96 rounded-xl bg-white p-6">
          {children}
          </div>
        </div>
  );
}`}</code>
        </pre>
      </div>

      <p className="pt-4">使用例</p>
      <p>openの値をMpdal 開始タグの中に記述</p>
      <p>childrenの値(なんでも可)はModalタグの間に記述</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Modal open={true}>
  <h2>確認</h2>
  <p>削除しますか？</p>
</Modal>`}</code>
        </pre>
      </div>

      <p className="pt-4">※ Modalなのでここには表示されない</p>
      <div className="mt-4 border border-blue-500 p-4">
        {/* <Modal open={true}> //Modal表示 */}
        <Modal open={false}>
          {" "}
          //Modal表示
          <p>(5. Modal)</p>
          <h2>確認</h2>
          <p>削除しますか？</p>
        </Modal>
      </div>

      <p className="pt-4">6. Avatar</p>
      <p className="pt-4">Avatar.tsx</p>
      <ul className="list-disc p-4">
        <li>AvatarPropsを定義、引数はsrc(string)</li>
        <li>srcは画像のURLを想定</li>
        <li>W-16 =1rem=16px の円の中に画層を表示</li>
      </ul>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`type AvatarProps= {
  src: string;
};
export default function Avatar({
  src,
}: AvatarProps) {
	return (
		<img 
			src={src}
			className="
        aspect-square
        w-16
        rounded-full
        object-cover
      "
    />
  );
}`}</code>
        </pre>
      </div>
      <p className="pt-4">使用例</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Avatar
	src="https://picsum.photos/300"
/>`}</code>
        </pre>
      </div>
      <div className="mt-4 border border-blue-500 p-4">
        <Avatar src="https://picsum.photos/300" />
      </div>

      <p className="pt-4">7. Badge</p>
      <p className="pt-4">Badge.tsx</p>
      <ul className="list-disc p-4">
        <li>BadgeProps を定義、children のみ</li>
        <li>Badgeの形状(円 - 楕円)、書式定義(背景赤、文字色白)</li>
        <li>中に入れる文字は使用時に指定(children)</li>
      </ul>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`type BadgeProps = {
  children:React.ReactNode;
};
export default function Badge({
  children,
}: BadgeProps) {
	return (
		<span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
      {children}
    </span>
  );
}`}</code>
        </pre>
      </div>
      <p className="pt-4">使用例</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Badge>NEW</Badge>
<Badge>SALE</Badge>`}</code>
        </pre>
      </div>
      <div className="mt-4 flex gap-4 border border-blue-500 p-4">
        <Badge>NEW</Badge>
        <Badge>SALE</Badge>
        <Badge>1</Badge>
      </div>

      <p className="pt-4">コンポーネント設計の基本ルール</p>
      <p>1. 一つの役割だけ持たせる</p>
      <ul className="list-disc p-4">
        <li>Button</li>
        <li>Card</li>
        <li>Avatar</li>
      </ul>
      <p>✖︎</p>
      <p className="list-disc p-4">ButtonCardModalHeaderFooter</p>
      <p>のように何でも入れない。</p>

      <p className="pt-4">2. Propsで変更する</p>
      <p>悪い例</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<ButtonBlue />
<ButtonRed />
<ButtonGreen />`}</code>
        </pre>
      </div>

      <p>良い例</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Button variant="primary"/>
<Button variant="danger"/>
<Button variant="success"/>`}</code>
        </pre>
      </div>
      <p className="pt-4">3. childrenを活用する</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Card>
何でも書ける
</Card>`}</code>
        </pre>
      </div>

      <p className="pt-4">4. Tailwindはコンポーネント内へ閉じ込める</p>
      <p>※ 使用側はこれだけ</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Button>
保存
</Button>`}</code>
        </pre>
      </div>

      <p className="pt-4">よくある失敗</p>
      <p>✖︎ コピペする</p>
      <p>※ 修正が大変</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<button className="...">
<button className="...">
<button className="...">
<button className="...">`}</code>
        </pre>
      </div>

      <p>○ Button化</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Button />
<Button />
<Button />`}</code>
        </pre>
      </div>

      <p>× Propsを増やし過ぎる</p>
      <p>※ 増え過ぎると管理が大変</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<Button
red
blue
green
large
small
rounded
shadow
...`}</code>
        </pre>
      </div>

      <p>× コンポーネントを細かく分け過ぎる</p>
      <p>最初から細かくしすぎると逆に使いづらくなります。</p>
      <div className="mb-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`Title

Subtitle

CardTitle

CardBody

CardText

CardFooter

...`}</code>
        </pre>
      </div>
    </div>
  );
}
