import { Link } from "react-router-dom";

export default function Typography6() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 練習6
        フォントファミリー(書体)・フォントサイズ・文字の太さ・文字色・テキストの配置・行の高さ・文字間隔・文字装飾・イタリック・文字の変換
      </h1>

      <p>フォントファミリー(書体)</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">CSS</td>
            <td className="border p-2">用途</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">font-sans</td>
            <td className="border p-2">sans-serif</td>
            <td className="border p-2">一般的なWebサイト（デフォルト）</td>
          </tr>
          <tr>
            <td className="border p-2">font-serif</td>
            <td className="border p-2">serif</td>
            <td className="border p-2">明朝体のような書体</td>
          </tr>
          <tr>
            <td className="border p-2">font-mono</td>
            <td className="border p-2">monospace</td>
            <td className="border p-2">プログラムコード</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 border border-blue-500 p-4">
        <p className="font-sans">Sans Serif</p>
        <p className="font-serif">Serif</p>
        <p className="font-mono">Monospace</p>
      </div>

      <p className="pt-4">文字サイズ</p>
      <Link to="/typography/1" className="text-blue-600 hover:underline">
        <p>練習1 フォントサイズ参照</p>
      </Link>

      <p className="pt-4">文字の太さ</p>
      <Link to="/typography/2" className="text-blue-600 hover:underline">
        <p>練習2 文字の太さ参照</p>
      </Link>

      <p className="pt-4">文字色</p>
      <Link to="/typography/3" className="text-blue-600 hover:underline">
        <p>練習3 文字色参照</p>
      </Link>

      <p className="pt-4">テキストの配置</p>
      <Link to="/typography/4" className="text-blue-600 hover:underline">
        <p>練習4 行揃え参照</p>
      </Link>

      <p className="pt-4">文字間隔</p>
      <Link to="/typography/5" className="text-blue-600 hover:underline">
        <p>練習5 行間・文字間参照</p>
      </Link>

      <p className="pt-4">文字装飾</p>
      <div className="mt-4 border border-blue-500 p-4">
        <p>(underline)</p>
        <p className="underline">下線</p>
        <p>(line-through)</p>
        <p className="line-through">取り消し線</p>
        <p>(overline)</p>
        <p className="overline">上線</p>
        <p>(no-underline)</p>
        <p className="no-underline">下線なし</p>
      </div>

      <p className="pt-4">イタリック</p>
      <div className="mt-4 border border-blue-500 p-4">
        <p>(italic)</p>
        <p className="italic">Italic</p>
        <p>(not-italic)</p>
        <p className="not-italic">Normal</p>
      </div>

      <p className="pt-4">文字の変換</p>
      <div className="mt-4 border border-blue-500 p-4">
        <p>(uppercase) ※大文字</p>
        <p className="uppercase">hello world</p>
        <p>(lowercase) *小文字</p>
        <p className="lowercase">HELLO WORLD</p>
        <p>(capitalize) ※1文字目大文字</p>
        <p className="capitalize">hello world</p>
      </div>

      <p className="mt-4">実務で最もよく使う組み合わせ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <p>見出し</p>
        <p>(text-4xl font-bold text-gray-900)</p>
        <h1 className="text-4xl font-bold text-gray-900">Tailwind CSS</h1>

        <p className="pt-4">本文</p>
        <p>(text-base leading-relaxed text-gray-700)</p>
        <p className="text-base leading-relaxed text-gray-700">
          Tailwind CSSはUtility FirstのCSSフレームワークです。
        </p>

        <p className="pt-4">ボタン</p>
        <p>(rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white)</p>
        <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white">
          保存
        </button>
      </div>
    </div>
  );
}
