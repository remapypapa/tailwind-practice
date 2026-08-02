import { Link } from "react-router-dom";

export default function Size2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Size 練習2 高さ(Height)</h1>

      <p>Heightは、要素の高さを指定する</p>
      <p>h-* 高さのサイズ h-16は、16/4=4rem 16 x 4 = 64px</p>
      <div className="h-16 border-2 border-blue-500 bg-blue-200">h-16</div>
      <p>h-* 高さのサイズ h-32は、32/4=8rem 16 x 8 = 128px</p>
      <div className="h-32 border-2 border-blue-500 bg-blue-200">h-32</div>

      <p>h-full 高さのサイズ h-fullは、親要素の高さと同じ</p>
      <p>
        以下の例では、親にh-64を指定、子要素にh-fullを指定することで、親要素の高さと同じになる
      </p>
      <div className="h-64 border border-red-500 bg-blue-200">
        <div className="h-full border-2 border-blue-500 bg-blue-200">
          親要素と高さ同じになる h-64
        </div>
      </div>

      <p>h-screen 画面いっぱいの高さ(ブラウザの高さ)</p>
      <div className="h-screen border-2 border-blue-500 bg-blue-200">
        h-screen
      </div>

      <p>h-fit 中身に合わせた高さ</p>
      <div className="h-fit border-2 border-blue-500 bg-blue-200">
        h-fit h-fit h-fit h-fit h-fit h-fit h-fit h-fit h-fit h-fit h-fit h-fit
        h-fit h-fit h-fit h-fit h-fit h-fit h-fit h-fit
      </div>

      <p>h-min-h-screen 最低でも画面いっぱいの高さ</p>
      <p>h-screen と h-min-h-screen の違い</p>
      <p>
        h-screenはブラウザの高さ、h-min-h-screen
        はコンテンツが増えると伸びる(こちらの使用頻度が高い)
      </p>
      <div className="h-min-h-screen border-2 border-blue-500 bg-blue-200">
        h-fit
      </div>
    </div>
  );
}
2;
