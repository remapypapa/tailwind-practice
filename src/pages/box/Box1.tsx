import { Link } from "react-router-dom";

export default function Box1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ボックス・見た目 練習1 枠線（Border）
      </h1>

      <p>
        枠線 ※border-*
        の数字はpxの意味、指定可能なのは、数字なし、2、4、8、[任意の数字px]
        ←[]でくくる
      </p>
      <p>border-2</p>
      <div className="border-2 border-blue-500 bg-blue-200 p-6"></div>
      <p>border-4</p>
      <div className="border-4 border-blue-500 bg-blue-200 p-6"></div>
      <p>border-8</p>
      <div className="border-8 border-blue-500 bg-blue-200 p-6"></div>
      <p>border-[10px]</p>
      <div className="border-[10px] border-blue-500 bg-blue-200 p-6"></div>

      <p>Borderの色</p>
      <p>赤(border-2 border-red-500)</p>
      <div className="border-2 border-red-500 p-6"></div>

      <p>緑(border-2 border-green-500)</p>
      <div className="border-2 border-green-500 p-6"></div>

      <p>青(border-2 border-blue-500)</p>
      <div className="border-2 border-blue-500 p-6"></div>

      <p>Borderの種類</p>
      <p>実線(border-solid border-2 border-blue-500)</p>
      <div className="border-2 border-solid border-blue-500 p-6"></div>

      <p>点線(border-dashed border-2 border-blue-500)</p>
      <div className="border-2 border-dashed border-blue-500 p-6"></div>

      <p>点(border-dotted border-2 border-blue-500)</p>
      <div className="border-2 border-dotted border-blue-500 p-6"></div>

      <p>一部だけBorder ※線幅は-4のように続けて記述</p>
      <p>上(border-t-4 border-blue-500)</p>
      <div className="border-t-4 border-blue-500 p-6"></div>

      <p>下(border-b-4 border-blue-500)</p>
      <div className="border-b-4 border-blue-500 p-6"></div>

      <p>左(border-l-4 border-blue-500)</p>
      <div className="border-l-4 border-blue-500 p-6"></div>

      <p>右(border-r-4 border-blue-500)</p>
      <div className="border-r-4 border-blue-500 p-6"></div>

      <p>実務でよく見る組み合わせ</p>
      <p>カード(rounded-lg border border-gray-300 p-6)</p>
      <div className="rounded-lg border border-gray-300 p-6"></div>

      <p>入力フォーム(border border-gray-300 px-4 py-2)</p>
      <form action="">
        <input className="border border-gray-300 px-4 py-2"></input>
      </form>

      <p>区切り線(border-b border-gray-200)</p>
      <div className="border-b border-gray-200"></div>

      <p>通知ボックス 組み合わせ</p>
      <p>左だけ4px (border-l-4 border-blue-500 bg-blue-200 p-4)</p>
      <div className="border-l-4 border-blue-500 bg-blue-200 p-4">
        左だけ4px 左だけ4px 左だけ4px 左だけ4px 左だけ4px 左だけ4px 左だけ4px
        左だけ4px 左だけ4px
      </div>

      <p>上だけ2px (border-t-2 border-blue-500 bg-blue-200 p-4)</p>
      <div className="border-t-2 border-blue-500 bg-blue-200 p-4">
        上だけ2px 上だけ2px 上だけ2px 上だけ2px 上だけ2px 上だけ2px 上だけ2px
        上だけ2px 上だけ2px
      </div>

      <p>右だけ4px (border-r-4 border-blue-500 bg-blue-200 p-4)</p>
      <div className="border-r-4 border-blue-500 bg-blue-200 p-4">
        右だけ4px 右だけ4px 右だけ4px 右だけ4px 右だけ4px 右だけ4px 右だけ4px
        右だけ4px 右だけ4px
      </div>

      <p>下だけ8px (border-b-8 border-blue-500 bg-blue-200 p-4)</p>
      <div className="border-b-8 border-blue-500 bg-blue-200 p-4">
        下だけ8px 下だけ8px 下だけ8px 下だけ8px 下だけ8px 下だけ8px 下だけ8px
        下だけ8px 下だけ8px
      </div>
    </div>
  );
}
