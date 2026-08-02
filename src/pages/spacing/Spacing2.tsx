import { Link } from "react-router-dom";

export default function Spacing2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">Spacing 練習2 Margin</h1>
      <p>Marginは要素の外に作る余白</p>
      <p>m-* 四方に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="m-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>mx-* 左右に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="mx-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>my-* 上下に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="my-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>mt-* 上に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="mt-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>mb-* 下に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="mb-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>ml-* 左に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="ml-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>mr-* 右に8(8/4=2rem=16*2=32px)余白ができる</p>
      <div className="mr-8 border-2 border-blue-500 bg-blue-200">Margin</div>
      <p>ボックスを並べるとわかりやすい、この例では上のボックスにmb-8を指定</p>
      <div className="mb-8 border-2 border-blue-500 bg-blue-200">
        上のボックス
      </div>
      s
      <div className="border-2 border-green-500 bg-green-200">下のボックス</div>
    </div>
  );
}
