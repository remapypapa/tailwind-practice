import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Tailwind CSS 練習</h1>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">Flexbox</h2>

        <ul className="space-y-2">
          <li>
            <Link to="/flex/1" className="text-blue-600 hover:underline">
              練習1 横並び
            </Link>
          </li>

          <li>
            <Link to="/flex/2" className="text-blue-600 hover:underline">
              練習2 縦並び (flex-col)
            </Link>
          </li>

          <li>
            <Link to="/flex/3" className="text-blue-600 hover:underline">
              練習3 左右中央寄せ (justify-center)
            </Link>
          </li>

          <li>
            <Link to="/flex/4" className="text-blue-600 hover:underline">
              練習4 上下中央寄せ (items-center)
            </Link>
          </li>

          <li>
            <Link to="/flex/5" className="text-blue-600 hover:underline">
              練習5 完全中央 (h-screen, justify-center, items-center)
            </Link>
          </li>

          <li>
            <Link to="/flex/6" className="text-blue-600 hover:underline">
              練習6 左右に配置 (justify-between)
            </Link>
          </li>

          <li>
            <Link to="/flex/7" className="text-blue-600 hover:underline">
              練習7 均等配置 (justify-around)
            </Link>
          </li>

          <li>
            <Link to="/flex/8" className="text-blue-600 hover:underline">
              練習8 均等配置 (justify-evenly)
            </Link>
          </li>

          <li>
            <Link to="/flex/9" className="text-blue-600 hover:underline">
              練習9 折り返し (flex-wrap)
            </Link>
          </li>

          <li>
            <Link to="/flex/10" className="text-blue-600 hover:underline">
              練習10 レスポンシブなFlexbox (flex-col md:flex-row)
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h2 className="mt-4 text-2xl font-semibold">Grid</h2>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/1" className="text-blue-600 hover:underline">
              練習1 Grid
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/2" className="text-blue-600 hover:underline">
              練習2 2列レイアウト (grid-cols-2)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/3" className="text-blue-600 hover:underline">
              練習3 3列レイアウト (grid-cols-3)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/4" className="text-blue-600 hover:underline">
              練習4 gap
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/5" className="text-blue-600 hover:underline">
              練習5 レスポンシブGrid (md:により分岐)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/6" className="text-blue-600 hover:underline">
              練習6 カード一覧レイアウト
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/7" className="text-blue-600 hover:underline">
              練習7 列をまたぐ (col-span-*)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/8" className="text-blue-600 hover:underline">
              練習8 行をまたぐ (row-span-*)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/9" className="text-blue-600 hover:underline">
              練習9 自由な列幅を作る（grid-cols-[...]）
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/10" className="text-blue-600 hover:underline">
              練習10 Grid内で中央揃え（place-items-*）
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/11" className="text-blue-600 hover:underline">
              練習11 Grid全体の配置 (place-content-*)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/12" className="text-blue-600 hover:underline">
              練習12 個別に制御する (justify-items-* と items-*)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/13" className="text-blue-600 hover:underline">
              練習13 特定のアイテムだけ配置を変更する[セル内の横方向と縦方向]
              (justify-self-* と self-*)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/14" className="text-blue-600 hover:underline">
              練習14 1つのアイテムを自由に配置する (place-self-*)
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/15" className="text-blue-600 hover:underline">
              練習15 ダッシュボードレイアウト（実践編①）
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/16" className="text-blue-600 hover:underline">
              練習16 ECサイトの商品一覧（実践編②）
            </Link>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <Link to="/Grid/17" className="text-blue-600 hover:underline">
              練習17 ブログカード一覧（メディアサイト風レイアウト）（実践編③）
            </Link>
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="mt-4 text-2xl font-semibold">スペーシング（余白）</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/spacing/1" className="text-blue-600 hover:underline">
              練習1 Padding
            </Link>
          </li>

          <li>
            <Link to="/spacing/2" className="text-blue-600 hover:underline">
              練習2 Margin
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">サイズ</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/size/1" className="text-blue-600 hover:underline">
              練習1 幅（Width）
            </Link>
          </li>

          <li>
            <Link to="/size/2" className="text-blue-600 hover:underline">
              練習2 高さ (Height)
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">Typography</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/typography/1" className="text-blue-600 hover:underline">
              練習1 フォントサイズ（Font Size）
            </Link>
          </li>

          <li>
            <Link to="/typography/2" className="text-blue-600 hover:underline">
              練c 文字の太さ（Font Weight）
            </Link>
          </li>

          <li>
            <Link to="/typography/3" className="text-blue-600 hover:underline">
              練習3 文字色（Text Color）
            </Link>
          </li>

          <li>
            <Link to="/typography/4" className="text-blue-600 hover:underline">
              練習4 行揃え（Text Alignment）
            </Link>
          </li>

          <li>
            <Link to="/typography/5" className="text-blue-600 hover:underline">
              練習5 行間・文字間（Line Height & Letter Spacing）(leading-* /
              tracking-*)
            </Link>
          </li>

          <li>
            <Link to="/typography/6" className="text-blue-600 hover:underline">
              練習6
              フォントファミリー(書体)・フォントサイズ・文字の太さ・文字色・テキストの配置・行の高さ・文字間隔・文字装飾・イタリック・文字の変換
            </Link>
          </li>

          <li>
            <Link to="/typography/7" className="text-blue-600 hover:underline">
              練習7 Webフォント
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">ボックス・見た目</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/box/1" className="text-blue-600 hover:underline">
              練習1 枠線（Border）
            </Link>
          </li>

          <li>
            <Link to="/box/2" className="text-blue-600 hover:underline">
              練習2 角丸（Border Radius）
            </Link>
          </li>

          <li>
            <Link to="/box/3" className="text-blue-600 hover:underline">
              練習2 影（Box Shadow）
            </Link>
          </li>

          <li>
            <Link to="/box/4" className="text-blue-600 hover:underline">
              練習2 透明度（Opacity）
            </Link>
          </li>

          <li>
            <Link to="/box/5" className="text-blue-600 hover:underline">
              練習5 Overflow
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">
          状態変化（State Variants）
        </h2>
        <ul className="space-y-2">
          <li>
            <Link to="/state/1" className="text-blue-600 hover:underline">
              練習1 擬似クラス（Pseudo Classes）
            </Link>
          </li>

          <li>
            <Link to="/state/2" className="text-blue-600 hover:underline">
              練習2 フォーム系（Form State Variants）
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>
          <h2 className="mt-4 text-2xl font-semibold">
            Transitions & Animations
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/transitionsAnimations/1"
                className="text-blue-600 hover:underline"
              >
                練習1 Transition
              </Link>
            </li>

            <li>
              <Link
                to="/transitionsAnimations/2"
                className="text-blue-600 hover:underline"
              >
                練習2 Duration
              </Link>
            </li>

            <li>
              <Link
                to="/transitionsAnimations/3"
                className="text-blue-600 hover:underline"
              >
                練習3 Ease
              </Link>
            </li>

            <li>
              <Link
                to="/transitionsAnimations/4"
                className="text-blue-600 hover:underline"
              >
                練習4 Animate
              </Link>
            </li>
          </ul>
        </h2>
        <ul>
          <li></li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">Transforms</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/transforms/1" className="text-blue-600 hover:underline">
              練習1 Scale（拡大・縮小）
            </Link>
          </li>

          <li>
            <Link to="/transforms/2" className="text-blue-600 hover:underline">
              練習2 Rotate（回転）
            </Link>
          </li>

          <li>
            <Link to="/transforms/3" className="text-blue-600 hover:underline">
              練習3 Translate（移動）
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">Responsive Design</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/responsiveDesign/1"
              className="text-blue-600 hover:underline"
            >
              練習1 ブレークポイント（Breakpoint）
            </Link>
          </li>

          <li>
            <Link
              to="/responsiveDesign/2"
              className="text-blue-600 hover:underline"
            >
              練習2 Responsive Grid / Flex
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">ETC</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/etc/1" className="text-blue-600 hover:underline">
              練習1 Position（relative / absolute / fixed / sticky）
            </Link>
          </li>

          <li>
            <Link to="/etc/2" className="text-blue-600 hover:underline">
              練習2 Overflow
            </Link>
          </li>

          <li>
            <Link to="/etc/3" className="text-blue-600 hover:underline">
              練習3 z-index
            </Link>
          </li>

          <li>
            <Link to="/etc/4" className="text-blue-600 hover:underline">
              練習4 Object Fit・Aspect Ratio
            </Link>
          </li>

          <li>
            <Link to="/etc/5" className="text-blue-600 hover:underline">
              練習5 Group・Peer
            </Link>
          </li>

          <li>
            <Link to="/etc/6" className="text-blue-600 hover:underline">
              練習6 Arbitrary Values（[]）
            </Link>
          </li>

          <li>
            <Link to="/etc/7" className="text-blue-600 hover:underline">
              練習7 条件付き className（React）
            </Link>
          </li>

          <li>
            <Link to="/etc/8" className="text-blue-600 hover:underline">
              練習8 コンポーネント設計（Button・Card・Modal）
            </Link>
          </li>

          <li>
            <Link to="/etc/9" className="text-blue-600 hover:underline">
              練習9 clsx・tailwind-merge
            </Link>
          </li>

          <li>
            <Link to="/etc/10" className="text-blue-600 hover:underline">
              練習10 Tailwind + React の実践（ポートフォリオ制作）
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-4 text-2xl font-semibold">React UI Components</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/ui/Button" className="text-blue-600 hover:underline">
              ButtonPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Input" className="text-blue-600 hover:underline">
              InputPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Select" className="text-blue-600 hover:underline">
              SelectPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Checkbox" className="text-blue-600 hover:underline">
              CheckboxPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Radio" className="text-blue-600 hover:underline">
              RadioPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Switch" className="text-blue-600 hover:underline">
              SwitchPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Accordion" className="text-blue-600 hover:underline">
              AccordionhPage
            </Link>
          </li>

          <li>
            <Link to="/ui/Tabs" className="text-blue-600 hover:underline">
              TabsPage
            </Link>
          </li>

          <li>
            <Link
              to="/ui/DropdownMenu"
              className="text-blue-600 hover:underline"
            >
              DropdownMenuPage
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
