import { Link } from "react-router-dom";

export default function Size1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Size 練習1 幅(Width)</h1>

      <p>Widthは、要素の横幅を指定する</p>
      <p>w-* 横幅のサイズ w-32は、32/4=8rem 16 x 8 = 128px</p>
      <div className="w-32 border-2 border-blue-500 bg-blue-200">w-32</div>

      <p>w-full 親要素の横幅全てを指定</p>
      <div className="w-full border-2 border-blue-500 bg-blue-200">w-full</div>

      <p>w-screen ブラウザの横幅全てを指定</p>
      <div className="w-full border-2 border-blue-500 bg-blue-200">w-full</div>

      <p>w-fit 文字の長さだけ幅</p>
      <div className="w-fit border-2 border-blue-500 bg-blue-200">w-full</div>

      <p>
        max-w-* 最大幅だけ決める(ここでは max-w-md
        、つまり768px=768/16=48remまでしか広がらない)
      </p>
      <div className="max-w-md border-2 border-blue-500 bg-blue-200">
        w-full
      </div>

      <p>max-w-* と mx-auto の2つはセットで使われることが多い</p>
      <p>
        max-w-4xl mx-auto の場合、画面が広くなっても
        <ul>
          <li>・最大幅だけ制限 → 最大幅までは拡大</li>
          <li>・中央配置</li>
        </ul>
      </p>
      <div className="mx-auto max-w-4xl border-2 border-blue-500 bg-blue-200">
        w-full
      </div>

      <p>w-full と max-w-* の違い</p>
      <p>w-fullは、親の横幅いっぱいを使う</p>
      <div className="max-full border-2 border-blue-500 bg-blue-200">
        w-full
      </div>
      <p>max-w-* は、広がりすぎないように上限を設定するという意味</p>
      <div className="max-w-md border-2 border-blue-500 bg-blue-200">
        コンテンツ
      </div>
    </div>
  );
}
