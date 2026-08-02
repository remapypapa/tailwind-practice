import Switch from "@/components/ui/switch/Switch";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SwitchPage() {
  const [darkMode, setDarkMode] = useState(false); //デフォルトはダークモードOFF
  const [notification, setNotification] = useState(true);
  const [location, setLocation] = useState(false);

  return (
    <div className="space-y-8 p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>
      <h1 className="text-2xl font-bold">React UI Components Switch</h1>

      {/* 基本 */}
      {/* cheked → darkMode を渡している、Switch自体は状態を持たない */}
      <Switch label="ダークモード" checked={darkMode} onChange={setDarkMode} />

      {/* helperText */}
      <Switch
        // helperText="..." だけを追加するとメ"ール通知を受け取ります。"になる
        label="通知"
        checked={notification}
        onChange={setNotification}
        helperText="メール通知を受け取ります。"
      />

      {/* error */}
      <Switch
        // error="..." ならhelperTextではなく赤文字になります。
        label="位置情報"
        checked={location}
        onChange={setLocation}
        error="位置情報を有効にしてください。"
      />

      {/* サイズ */}
      <div className="space-y-3">
        <Switch
          // size="sm" なら小さいSwitch になる
          label="Small"
          checked={darkMode}
          onChange={setDarkMode}
          size="sm"
        />

        <Switch
          label="Medium"
          checked={darkMode}
          onChange={setDarkMode}
          size="md"
        />

        <Switch
          label="Large"
          checked={darkMode}
          onChange={setDarkMode}
          size="lg"
        />
      </div>

      {/* 色 */}
      <div className="space-y-3">
        <Switch
          label="Primary"
          checked={darkMode}
          onChange={setDarkMode}
          color="primary"
        />

        <Switch
          // color="success" なら ONになったら"bg-green-600" になる、Switch.tsxに定義あり
          label="Success"
          checked={notification}
          onChange={setNotification}
          color="success"
        />

        <Switch
          label="Danger"
          checked={location}
          onChange={setLocation}
          color="danger"
        />
      </div>

      {/* Disabled */}
      {/* disabled ならクリックできない */}
      <Switch label="Disabled" checked={true} onChange={() => {}} disabled />

      {/* デバッグ用、現在の状態を確認できる */}
      <div className="rounded border p-4">
        <p>darkMode : {String(darkMode)}</p>
        <p>notification : {String(notification)}</p>
        <p>location : {String(location)}</p>
      </div>
    </div>
  );
}
