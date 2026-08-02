import { Link } from "react-router-dom";

export default function Box2() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ボックス・見た目 練習2 角丸（Border Radius）
      </h1>
      <p>要素の角を丸くする</p>
      <p>rounded ※最も基本、少しだけ角が丸くなる</p>
      <div className="rounded border-2 bg-blue-200 p-4">rounded</div>
      <p>rounded-md ※rounded より少し丸くなる、実務でもよく使う</p>
      <div className="rounded-md border-2 bg-blue-200 p-4">rounded-md</div>
      <p>rounded-lg ※カードで最もよく見るサイズ</p>
      <div className="rounded-lg border-2 bg-blue-200 p-4">rounded-lg</div>
      <p>rounded-xl ※モダンなデザインでよく見かける</p>
      <div className="rounded-xl border-2 bg-blue-200 p-4">rounded-xl</div>
      <p>rounded-2xl ※ダイアログやカードで使われる</p>
      <div className="rounded-2xl border-2 bg-blue-200 p-4">rounded-2xl</div>
      <p>rounded-3xl ※かなり丸いデザイン</p>
      <div className="rounded-3xl border-2 bg-blue-200 p-4">rounded-3xl</div>
      <p>rounded-full ※特別</p>
      <p>・長方形なら横長</p>
      <div className="rounded-full border-2 bg-blue-200 p-4">rounded-3xl</div>
      <p>
        ・アイコンでよく使う、正方形なら円になる(h-16 w-16 rounded-full
        bg-blue-500)
      </p>
      <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      <p>一部だけ丸くする</p>
      <p>上だけ(rounded-t-xl) ※丸みは-xlなどを後につづける</p>
      <div className="rounded-t-xl border-4 bg-blue-200 p-4">rounded-t-xl</div>
      <p>下だけ(rounded-b-xl) ※丸みは-xlなどを後につづける</p>
      <div className="rounded-b-xl border-4 bg-blue-200 p-4">rounded-b-xl</div>
      <p>左だけ(rounded-l-xl) ※丸みは-xlなどを後につづける</p>
      <div className="rounded-l-xl border-4 bg-blue-200 p-4">rounded-l-xl</div>
      <p>右だけ(rounded-r-xl) ※丸みは-xlなどを後につづける</p>
      <div className="rounded-r-xl border-4 bg-blue-200 p-4">rounded-r-xl</div>
      <p>角ごとに指定する</p>
      <p>左上だけ(rounded-tl-xl) ※丸みは-xlなどを後につづける</p>
      <p>・t(上)、b(下)、l(左)、r(右)を組み合わせて表現</p>
      <p>・左上(tl)、右上(tr)、左下(bl)、右下(br)</p>
      <div className="rounded-tl-xl border-4 bg-blue-200 p-4">
        rounded-tl-xl
      </div>
      <p>
        rounded-none ※ライブラリのスタイルを打ち消すときなどに使う、頻度は少ない
      </p>
      <div className="rounded-none border-4 bg-blue-200 p-4">rounded-none</div>
      <p>角丸は、枠線と一緒に使うことがほとんど</p>
      <p>カード(rounded-lg border border-gray-300 p-6)</p>
      <div className="rounded-lg border border-gray-300 p-6">Card</div>

      <p>入力フォーム(rounded-md border border-gray-300 px-4 py-2)</p>
      <form action="">
        <input className="rounded-md border border-gray-300 px-4 py-2" />
      </form>

      <p>ボタン(rounded-md bg-blue-500 px-4 py-2 text-white)</p>
      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
        保存
      </button>

      <p>rounded-full の再確認</p>
      <p>h-16 w-16 rounded-full bg-blue-500</p>
      <div className="h-16 w-16 rounded-full bg-blue-500"></div>
      <p>w-48 rounded-full bg-blue-500 p-4 text-white</p>
      <div className="w-48 rounded-full bg-blue-500 p-4 text-white">
        rounded-full
      </div>
    </div>
  );
}
