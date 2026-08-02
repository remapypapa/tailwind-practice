import { Link } from "react-router-dom";

export default function Transforms2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Transforms 練習2 Rotate（回転）
      </h1>

      <p>要素を回転できるようにする</p>
      <p>rotate-* を使用、* には3, 6, 12, 45, 90, 180, 数字は角度(deg)を表す</p>
      <p>rotate 指定なし</p>
      <div className="h-16 w-10 bg-blue-400 p-4"></div>
      <p>rotate-3</p>
      <div className="h-16 w-10 rotate-3 bg-blue-400 p-4"></div>
      <p>rotate-12</p>
      <div className="h-16 w-10 rotate-12 bg-blue-400 p-4"></div>
      <p>rotate-45</p>
      <div className="h-16 w-10 rotate-45 bg-blue-400 p-4"></div>
      <p>rotate-90</p>
      <div className="h-16 w-10 rotate-90 bg-blue-400 p-4"></div>
      <p>rotate-180</p>
      <div className="h-16 w-10 rotate-180 bg-blue-400 p-4"></div>

      <p className="pt-4">hover と組み合わせる</p>
      <p>
        (h-16 w-10 bg-blue-400 p-4 transition-transform duration-300
        hover:rotate-45) ※ マウスを乗せると傾く
      </p>
      <div className="h-16 w-10 bg-blue-400 p-4 transition-transform duration-300 hover:rotate-45"></div>

      <p className="pt-4">アイコン</p>
      <p>
        Tailwindでは、アイコンや絵文字をアニメーションさせる場合は inline-block
        を付けるのが定番
      </p>
      <p>(inline-block transition-transform duration-300 hover:rotate-180)</p>
      <span className="inline-block transition-transform duration-300 hover:rotate-180">
        🔄
      </span>

      <p className="pt-4">カード</p>
      <div className="h-16 w-10 bg-gray-400 transition-transform duration-300 hover:rotate-3">
        カード
      </div>

      <p className="pt-4">ボタン</p>
      <button className="h-16 w-10 bg-gray-400 transition-transform duration-300 hover:rotate-3">
        保存
      </button>

      <p className="pt-4">Scale と組み合わせる</p>
      <div className="h-10 w-16 rounded bg-blue-400 px-4 py-2 text-white transition-transform duration-300 hover:rotate-3 hover:scale-105"></div>

      <ul className="list-disc p-4">
        <li>少し拡大</li>
        <li>少し回転</li>
      </ul>

      <p className="pt-4">マイナス方向への回転 = 左への回転</p>
      <p>-rotate-* と表記</p>
      <p>-rotate-45 (左へ45度回転)</p>
      <div className="h-16 w-10 -rotate-45 bg-blue-400 p-4"></div>

      <p>hover:-rotate-45 (hover時、左へ45度回転)</p>
      <div className="h-16 w-10 bg-blue-400 p-4 hover:-rotate-45"></div>

      <p className="pt-4">実務でよくある例</p>
      <p>カード</p>
      <p>
        (h-16 w-10 bg-blue-400 p-4 transition-transform duration-300 ease-out
        hover:rotate-3 hover:scale-105)
      </p>
      <div className="h-16 w-10 bg-blue-400 p-4 transition-transform duration-300 ease-out hover:rotate-3 hover:scale-105"></div>
      <p>矢印アイコン</p>
      <p>(inline-block transition-transform duration-300 hover:rotate-90)</p>
      <span className="inline-block transition-transform duration-300 hover:rotate-90">
        ▶
      </span>
      <p>更新アイコン</p>
      <p>inline-block transition-transform duration-300 hover:rotate-180</p>
      <span className="inline-block transition-transform duration-300 hover:rotate-180">
        🔄
      </span>
    </div>
  );
}
