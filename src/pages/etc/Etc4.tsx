import { Link } from "react-router-dom";

export default function Etc4() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        ETC 練習4 Object Fit・Aspect Ratio
      </h1>

      <p>Object Fitとは？</p>
      <p>画像の表示方法を指定するクラス</p>
      <ul className="list-disc p-4">
        <li>横長画像</li>
        <li>縦長画像</li>
        <li>正方形画像</li>
      </ul>

      <p className="pt-4">Object Fit一覧</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">意味</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">object-cover</td>
            <td className="border p-2">枠いっぱいに表示（トリミングあり）</td>
          </tr>
          <tr>
            <td className="border p-2">object-contain</td>
            <td className="border p-2">全体を表示（余白あり）</td>
          </tr>
          <tr>
            <td className="border p-2">object-fill</td>
            <td className="border p-2">引き伸ばして表示</td>
          </tr>
          <tr>
            <td className="border p-2">object-none</td>
            <td className="border p-2">元サイズのまま</td>
          </tr>
          <tr>
            <td className="border p-2">object-scale-down</td>
            <td className="border p-2">contain と none の小さい方</td>
          </tr>
        </tbody>
      </table>

      <p className="pt-4">object-cover</p>
      <p>画像を枠いっぱいに表示します。</p>
      <p>足りない部分は切り取られます。</p>
      <p>親: w-64 overflow-hidden rounded-xl border</p>
      <p>子: h-48 w-full object-cover</p>
      <p>※ 画像全体は表示されませんが、カードはきれいになる</p>
      <div className="border border-blue-500 p-2">
        <div className="w-64 overflow-hidden rounded-xl border">
          <img
            src="https://picsum.photos/800/500"
            className="h-48 w-full object-cover"
          />
        </div>
      </div>

      <p className="pt-4">実務で最も使う組み合わせ</p>
      <p>親: overflow-hidden rounded-xl shadow</p>
      <p>※ 要素のはみ出しなし、角丸xl、影ありなど枠のスタイルを指定</p>
      <p>
        子: h-48 w-full object-cover transition duration-300 hover:scale-110
      </p>
      <p>※ 高さ48/4=12rem=192px、枠一杯に表示、hover時に300msで10%拡大</p>
      <p>※ これはブログカードや商品カードの定番</p>
      <div className="border border-blue-500 p-2">
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src="https://picsum.photos/800/500"
            className="h-48 w-full object-cover transition duration-300 hover:scale-110"
          />
        </div>
      </div>

      <p className="pt-4">object-contain</p>
      <p>画像全体を表示、切り取られない ※ 写真全体が縮小表示される</p>
      <p>親: flex h-48 w-64 items-center justify-center border</p>
      <p>子: h-full w-full object-contain</p>
      <div className="border border-blue-500 p-2">
        <div className="flex h-48 w-64 items-center justify-center border">
          <img
            src="https://picsum.photos/800/500"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <p className="pt-4">よく使う場面</p>
      <ul className="list-disc p-4">
        <li>ロゴ</li>
        <li>製品画像</li>
        <li>アイコン</li>
      </ul>

      <p className="pt-4">object-fill ※実務ではあまり使われない</p>
      <p>画像を引き伸ばす</p>
      <p>h-48 w-64 object-fill</p>
      <p>
        ※ 高さ48/4=12rem=16x12=192px、幅64/4=16rem=16x16=256px内に写真を表示
      </p>
      <p>※ 写真の元サイズは800x500なので縮小される</p>
      <p>
        注意:
        縦横比は維持されない、少し縦方向に伸びた（または横方向に潰れた）ような表示になる
      </p>
      <p>
        再確認: object-fill
        はアスペクト比を無視して、表示領域いっぱいに画像を引き伸ばす
      </p>
      <div className="border border-blue-500 p-2">
        <img
          src="https://picsum.photos/800/500"
          className="h-48 w-64 object-fill"
        />
      </div>

      <p className="pt-4">object-none</p>
      <p>元サイズで表示</p>
      <p>※ 画像が途中で切れることがある</p>
      <p>h-48 w-64 object-none</p>
      <p>
        ※
        高さ48/4=12rem=16x12=192px、幅64/4=16rem=16x16=256px内に元サイズで写真を表示
      </p>
      <p>※ この例では元画像800x600pxの中央の256x192pxが表示される</p>
      <div className="border border-blue-500 p-2">
        <img
          src="https://picsum.photos/800/500"
          className="h-48 w-64 object-none"
        />
      </div>

      <p className="pt-4">object-scale-down</p>
      <p>特殊なケースで使用</p>
      <p>h-48 w-64 object-scale-down</p>
      <ul className="list-disc p-4">
        <li>小さい画像はそのまま</li>
        <li>大きい画像だけ縮小</li>
      </ul>
      <div className="border border-blue-500 p-2">
        <img
          src="https://picsum.photos/800/500"
          className="h-48 w-64 object-scale-down"
        />
      </div>

      <p className="pt-4">Aspect Ratioとは？</p>
      <p>画像の縦横比を固定</p>
      <ul className="list-disc p-4">
        <li>画像A 1600×900</li>
        <li>画像B 1200×900</li>
        <li>画像C 600×600</li>
      </ul>
      <p>
        上記のような全部サイズが違う画像をAspect Ratio
        を使うことで以下のように統一できる
      </p>
      <ul className="list-disc p-4">
        <li>全部16:9</li>
        <li>全部1:1</li>
        <li>全部4:3</li>
      </ul>

      <p className="pt-4">Aspect Ratio一覧</p>
      <table>
        <thead>
          <tr>
            <td className="border p-2">クラス</td>
            <td className="border p-2">比率</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">aspect-video</td>
            <td className="border p-2">16:9</td>
          </tr>
          <tr>
            <td className="border p-2">aspect-square</td>
            <td className="border p-2">1:1</td>
          </tr>
          <tr>
            <td className="border p-2">aspect-auto</td>
            <td className="border p-2">元サイズ</td>
          </tr>
          <tr>
            <td className="border p-2">aspect-[4/3]</td>
            <td className="border p-2">4:3</td>
          </tr>
          <tr>
            <td className="border p-2">aspect-[3/4]</td>
            <td className="border p-2">3:4</td>
          </tr>
          <tr>
            <td className="border p-2">aspect-[21/9]</td>
            <td className="border p-2">ウルトラワイド</td>
          </tr>
        </tbody>
      </table>

      <p className="pt-4">aspect-video</p>
      <p>16:9になる</p>
      <p>YouTubeのサムネイルなどでよく使う</p>
      <p>親: w-80 overflow-hidden rounded-xl</p>
      <p>子: aspect-video w-full object-cover</p>
      <div className="border border-blue-500 p-2">
        <div className="w-80 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/800/500"
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>

      <p className="pt-4">aspect-square</p>
      <p>正方形になる</p>
      <p>Instagram風のギャラリーに最適</p>
      <p>親: w-48 overflow-hidden rounded-xl</p>
      <p>子: aspect-square w-full object-cover</p>
      <div className="border border-blue-500 p-2">
        <div className="w-48 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/800/500"
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      <p className="pt-4">aspect-[4/3]</p>
      <p>4:3の昔から使われる写真サイズになる</p>
      <p>aspect-[4/3] w-full object-cover</p>
      <div className="border border-blue-500 p-2">
        <img
          src="https://picsum.photos/800/500"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <p className="pt-4">aspect-[3/4]</p>
      <p>3:4の人物写真でよく使われる</p>
      <p>aspect-[3/4] w-full object-cover</p>
      <div className="border border-blue-500 p-2">
        <img
          src="https://picsum.photos/800/500"
          className="aspect-[3/4] w-full object-cover"
        />
      </div>

      <p className="pt-4">実務で最もよく見る組み合わせ 1</p>
      <p>カード</p>
      <p>親: overflow-hidden rounded-xl shadow</p>
      <p>
        子: aspect-video w-full object-cover transition duration-300
        hover:scale-110
      </p>
      <div className="border border-blue-500 p-2">
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src="https://picsum.photos/800/500"
            className="aspect-video w-full object-cover transition duration-300 hover:scale-110"
          />
        </div>
      </div>

      <p className="pt-4">実務で最もよく見る組み合わせ 2</p>
      <p>商品一覧</p>
      <p>親: overflow-hidden rounded-lg border</p>
      <p>子: aspect-square w-full object-cover</p>
      <div className="border border-blue-500 p-2">
        <div className="overflow-hidden rounded-lg border">
          <img
            src="https://picsum.photos/500/500"
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      <p className="pt-4">実務で最もよく見る組み合わせ 3</p>
      <p>企業ロゴ</p>
      <p>親: flex h-32 items-center justify-center border</p>
      <p>子: h-full w-full object-contain</p>
      <div className="border border-blue-500 p-2">
        <div className="flex h-32 items-center justify-center border">
          <img
            src="https://picsum.photos/500/200"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <p className="pt-4">よくある失敗</p>
      <p>× object-coverだけ指定</p>
      <p>
        ※
        画像サイズが決まっていないため、効果が分かりにくいことがあります。**高さや縦横比も一緒に指定**しましょう。
      </p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<img src="https://picsum.photos/800/500" className="object-cover"/>`}</code>
        </pre>
      </div>

      <p className="pt-4">◯高さを指定</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<img src="https://picsum.photos/800/500" className="h-48 w-full object-cover"/>`}</code>
        </pre>
      </div>

      <p className="pt-4">◯aspectを指定</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<img src="https://picsum.photos/800/500" className="aspect-video w-full object-cover"/>`}</code>
        </pre>
      </div>

      <p className="pt-4">× roundedだけ指定</p>
      <p>※ 画像の角が丸くならない場合があります</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="rounded-xl">
	<img src="https://picsum.photos/800/500"/>
</div>`}</code>
        </pre>
      </div>

      <p className="pt-4">○ overflow-hiddenも付ける</p>
      <p>※ これは実務では定番の組み合わせ</p>
      <div className="mt-4 border border-blue-500 p-4">
        <pre className="overflow-x-auto text-sm text-green-600">
          <code>{`<div className="overflow-hidden rounded-xl">
	<img src="https://picsum.photos/800/500" className="aspect-video w-full object-cover"/>
</div>`}</code>
        </pre>
      </div>

      <p className="pt-4">ポイント</p>
      <ul className="list-disc p-4">
        <li>
          object-cover は画像カードの定番で、枠いっぱいにきれいに表示できる。
        </li>
        <li>
          object-contain はロゴや商品画像など、画像全体を見せたいときに使う。
        </li>
        <li>
          aspect-video（16:9）と aspect-square（1:1）は最も使用頻度が高い。
        </li>
        <li>
          overflow-hidden・rounded-*・object-cover
          はセットで使うことが非常に多い。
        </li>
        <li>
          object-cover は h-* または aspect-* と組み合わせると効果を発揮する。
        </li>
      </ul>

      <p className="pt-4">実務で覚えておくとよい「黄金パターン」</p>
      <p>この4パターンを覚えておけば、画像レイアウトの多くは対応できる</p>
      <p className="pt-4">ブログカード</p>
      <p>親: overflow-hidden rounded-xl shadow</p>
      <p>
        子: aspect-video w-full object-cover transition duration-300
        hover:scale-110
      </p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-xl shadow">
          <img
            src="https://picsum.photos/800/500"
            className="aspect-video w-full object-cover transition duration-300 hover:scale-110"
          />
        </div>
      </div>

      <p>商品一覧</p>
      <p>親: overflow-hidden rounded-lg border</p>
      <p>子: aspect-square w-full object-cover</p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-lg border">
          <img
            src="https://picsum.photos/500/500"
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      <p>企業ロゴ</p>
      <p>親: flex h-24 items-center justify-center border</p>
      <p>子: h-full w-full object-contain</p>
      <div className="border border-blue-500 p-4">
        <div className="flex h-24 items-center justify-center border">
          <img
            src="https://picsum.photos/500/200"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <p>プロフィール画像</p>
      <p>親: overflow-hidden rounded-full</p>
      <p>子: aspect-square w-32 object-cover</p>
      <div className="border border-blue-500 p-4">
        <div className="overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/400/400"
            className="aspect-square w-32 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
