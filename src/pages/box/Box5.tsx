import { Link } from "react-router-dom";

export default function Box5() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ボックス・見た目 練習5 Overflow
      </h1>
      <p>要素からはみ出した内容をどう表示するか</p>

      <p>通常は要素からはみ出たものも表示する</p>
      <p>はみ出た文字が次の要素に影響を与えている</p>
      <div className="h-24 w-48 border bg-gray-300">
        ABCDEFGHIJKLMNOPQRSTUVWX ABCDEFGHIJKLMNOPQRSTUVWX
        ABCDEFGHIJKLMNOPQRSTUVWX ABCDEFGHIJKLMNOPQRSTUVWX
        ABCDEFGHIJKLMNOPQRSTUVWX ABCDEFGHIJKLMNOPQRSTUVWX
      </div>
      <p>パラグラフ</p>
      <p>パラグラフ</p>

      <p className="mt-4">overflow-visible</p>
      <p>・デフォルト</p>
      <p>・はみ出した内容も表示</p>

      <div className="h-24 w-48 overflow-visible bg-gray-300">
        overflow-visible overflow-visible overflow-visible overflow-visible
        overflow-visible overflow-visible overflow-visible
      </div>

      <p className="mt-5">overflow-hidden</p>
      <p>・はみ出した部分を隠す</p>

      <div className="h-24 w-48 overflow-hidden bg-gray-300">
        overflow-hidden overflow-hidden overflow-hidden overflow-hidden
        overflow-hidden overflow-hidden
      </div>

      <p className="mt-5">使用例</p>
      <p>
        画像 *角丸画像ではほぼ必ず使う (h-16 w-16 overflow-hidden rounded-full
        bg-blue-500)
      </p>
      <div className="h-16 w-16 overflow-hidden rounded-full bg-blue-500"></div>

      <p className="mt-5">overflow-auto</p>
      <p>・必要な時だけスクロールバーが表示</p>

      <div className="h-24 w-48 overflow-auto bg-gray-300">
        overflow-hidden overflow-hidden overflow-hidden overflow-hidden
        overflow-hidden overflow-hidden
      </div>

      <p className="mt-5">overflow-scroll</p>
      <p>・常にスクロールバーが表示</p>
      <p>・近年はあまり使われない</p>

      <div className="h-24 w-48 overflow-scroll bg-gray-300">
        overflow-hidden overflow-hidden overflow-hidden overflow-hidden
        overflow-hidden overflow-hidden
      </div>

      <p className="mt-5">overflow-x-auto</p>
      <p>・横方向だけスクロールバーが表示、だが状況により縦スクロールもつく</p>
      <p>・縦スクロールを強制的に非表示するには、overflow-y-hidden を定義</p>
      <p>・横に長いテーブルなど</p>
      <p>以下は親要素w-48 = 48/4 =12rem →16x12=192px、テーブルは500px</p>

      <div className="h-24 w-48 overflow-x-auto overflow-y-hidden bg-gray-300">
        <table className="w-[500px] border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-6 py-3 text-left">商品名</th>
              <th className="border px-6 py-3 text-right">価格</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-6 py-3">MacBook Pro</td>
              <td className="border px-6 py-3 text-right">¥298,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-5">overflow-y-auto</p>
      <p>・縦方向にだけスクロールバーが表示</p>
      <p>・近年はあまり使われない</p>

      <div className="h-24 w-48 overflow-y-auto bg-gray-300">
        overflow-y-auto overflow-y-auto overflow-y-auto overflow-y-auto
        overflow-y-auto overflow-y-auto overflow-y-auto overflow-y-auto
      </div>

      <p className="mt-5">実務でよく使う例</p>
      <p>カード画像(overflow-hidden rounded-lg)</p>
      <div className="overflow-hidden rounded-lg bg-gray-300">写真</div>

      <p>テーブル(overflow-x-auto overflow-y-auto)</p>
      <div className="h-24 w-48 overflow-x-auto overflow-y-auto bg-gray-300">
        <table className="w-[500px] border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-6 py-3 text-left">商品名</th>
              <th className="border px-6 py-3 text-right">価格</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-6 py-3">MacBook Pro</td>
              <td className="border px-6 py-3 text-right">¥298,000</td>
            </tr>
            <tr>
              <td className="border px-6 py-3">MacBook Pro2</td>
              <td className="border px-6 py-3 text-right">¥298,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>チャット (overflow-y-auto)</p>
      <div className="h-24 overflow-y-auto bg-gray-300">
        チャット チャット チャット チャット チャット チャット チャット チャット
        チャット チャット チャット チャット チャット チャット チャット チャット
        チャット チャット チャット チャット チャット チャット チャット チャット
        チャット チャット チャット チャット チャット チャット チャット チャット
        チャット チャット チャット チャット チャット チャット チャット チャット
      </div>

      <p>コード表示</p>
      <pre className="h-24 w-48 overflow-x-auto bg-gray-300">
        <code>{`<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Sample</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`}</code>
      </pre>

      <p className="mt-5">overflow-x-auto と overflow-y-auto の再確認</p>
      <p>横方向の確認</p>
      <div className="w-64 overflow-x-auto border">
        <div className="w-[600px] bg-blue-100 p-4">
          横に長いコンテンツ 横に長いコンテンツ 横に長いコンテンツ
        </div>
      </div>
      <p>縦方向の確認</p>
      <div className="h-32 overflow-y-auto border">
        <div className="space-y-2 p-4">
          縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認
          縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認
          縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認
          縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認
          縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認
          縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認 縦方向の確認
        </div>
      </div>
    </div>
  );
}
