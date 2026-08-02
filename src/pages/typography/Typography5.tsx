import { Link } from "react-router-dom";

export default function Typography5() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 行間・文字間（Line Height & Letter Spacing）(leading-* /
        tracking-* )
      </h1>

      <p>行間（Line Height）(leading-*)</p>
      <p>leading-4</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="leading-4">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>leading-6</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="leading-6">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>leading-7 ※ニュースやブログでよく使われる！</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="leading-7">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>leading-8</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="leading-8">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>文字間（Letter Spacing）(tracking-*)</p>
      <p>tracking-tight</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="tracking-tight">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>tracking-normal</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="tracking-normal">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>tracking-wide</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="tracking-wide">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>tracking-wider</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="tracking-wider">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>tracking-widest</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="tracking-widest">
          Tailwind CSS は Utility First の CSS Framework です。 HTML の class
          に直接 スタイルを書いていくため 非常に高速に画面を作成できます。
        </p>
      </div>

      <p>組み合わせて使う</p>
      <p>text-3xl font-bold tracking-tight</p>
      <div className="border-2 border-blue-500 p-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Tailwind CSS は Utility First の CSS Framework です。
        </h1>
      </div>

      <p>text-base leading-7 text-gray-700</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-base leading-7 text-gray-700">
          Tailwind CSS は Utility First の CSS Framework です。Tailwind CSS は
          Utility First の CSS Framework です。Tailwind CSS は Utility First の
          CSS Framework です。
        </p>
      </div>
    </div>
  );
}
