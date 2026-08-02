import { Link } from "react-router-dom";

export default function Spacing1() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">Spacing 練習1 Padding</h1>
      <p>Paddingは要素の中に作る余白</p>
      <p>p-* 四方に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 p-8">Padding</div>

      <p>px-* 左右だけ8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 px-8">Padding</div>

      <p>py-* 上下だけ8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 py-8">Padding</div>

      <p>pt-* 上だけ8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 pt-8">Padding</div>

      <p>pb-* 下だけ8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 pb-8">Padding</div>

      <p>pl-* 左だけ8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 pl-8">Padding</div>

      <p>pr-* 右だけ8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="border-2 border-blue-500 bg-blue-200 pr-8">
        Padding Padding Padding Padding Padding Padding Padding Padding
      </div>
    </div>
  );
}
