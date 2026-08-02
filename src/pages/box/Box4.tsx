import { Link } from "react-router-dom";

export default function Box4() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ボックス・見た目 練習4 透明度（Opacity）
      </h1>
      <p>要素の透明度を変更する (opacity-* → * には%にあたる数字)</p>
      <p>opacity-100</p>
      <div className="bg-blue-500 p-4 text-white opacity-100">opacity-100</div>

      <p>opacity-75</p>
      <div className="bg-blue-500 p-4 text-white opacity-75">opacity-75</div>

      <p>opacity-50</p>
      <div className="bg-blue-500 p-4 text-white opacity-50">opacity-50</div>

      <p>opacity-25</p>
      <div className="bg-blue-500 p-4 text-white opacity-25">opacity-25</div>

      <p>opacity-0 ※完全に透明</p>
      <div className="bg-blue-500 p-4 text-white opacity-0">opacity-0</div>

      <p>文字も一緒に透明になる (opacity-50)</p>
      <div className="bg-blue-500 p-4 text-white opacity-50">
        Hello opacity-50
      </div>

      <p>背景だけ透明にしたい場合 (例: bg-blue-500/50)</p>
      <div className="bg-blue-500/50 p-4">Hello bg-blue-500/50</div>

      <p>実務でよく使う例</p>
      <p>無効ボタン ※「押せないボタン」のような見た目</p>
      <button className="rounded bg-gray-400 px-4 py-2 text-white opacity-50">
        保存
      </button>

      <p>ホバー効果</p>
      <button className="bg-blue-500 px-4 py-2 text-white hover:opacity-75">
        Hover
      </button>

      <p>オーバーレイ</p>
      <p>・画面を暗くするときによく使われる</p>
      <p>・モーダルダイアログの背景などで定番</p>
      <div className="bg-black/50">オーバーレイ</div>

      <p>opacity-50 と bg-blue-500/50 を比較</p>
      <div className="bg-blue-500 p-4 text-white opacity-50">opacity-50</div>
      <div className="bg-blue-500/50 p-4 text-white">bg-blue-500/50</div>

      <p>・opacity-* は要素全体に効く</p>
      <p>・bg-blue-500/50 は背景だけに効く</p>
    </div>
  );
}
