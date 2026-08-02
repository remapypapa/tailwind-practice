import { Link } from "react-router-dom";

export default function Typography3() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        Typography 練習3 文字色（Font Color）
      </h1>

      <p>色の種類</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-black">Tailwind CSS (text-black)</p>
        <p className="text-white">Tailwind CSS (text-white)</p>
        <p className="text-gray-500">Tailwind CSS (text-gray-500)</p>
        <p className="text-red-500">Tailwind CSS (text-red-500)</p>
        <p className="text-orange-500">Tailwind CSS (text-prange-500)</p>
        <p className="text-yellow-500">Tailwind CSS (text-yellow-500)</p>
        <p className="text-green-500">Tailwind CSS (text-green-500)</p>
        <p className="text-blue-500">Tailwind CSS (text-blue-500)</p>
        <p className="text-indigo-500">Tailwind CSS (text-indigo-500)</p>
        <p className="text-purple-500">Tailwind CSS (text-purple-500)</p>
        <p className="text-pink-500">Tailwind CSS (text-pink-500)</p>
      </div>

      <p>色の濃さ ※よく使うのは400、500(標準)、600、700</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-blue-50">Tailwind CSS (text-blue-50)</p>
        <p className="text-blue-100">Tailwind CSS (text-blue-100)</p>
        <p className="text-blue-200">Tailwind CSS (text-blue-200)</p>
        <p className="text-blue-300">Tailwind CSS (text-blue-300)</p>
        <p className="text-blue-400">Tailwind CSS (text-blue-400)</p>
        <p className="text-blue-500">Tailwind CSS (text-blue-500)</p>
        <p className="text-blue-600">Tailwind CSS (text-blue-600)</p>
        <p className="text-blue-700">Tailwind CSS (text-blue-700)</p>
        <p className="text-blue-800">Tailwind CSS (text-blue-800)</p>
        <p className="text-blue-900">Tailwind CSS (text-blue-900)</p>
        <p className="text-blue-950">Tailwind CSS (text-blue-950)</p>
      </div>

      <p>よく使う色</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-black">通常の本文。(text-black)</p>
        <p className="text-gray-500">補足説明で非常によく使う(text-gray-500)</p>
        <p className="text-red-500">エラーメッセージ(text-red-500)</p>
        <p className="text-blue-500">リンク(text-blue-500)</p>
      </div>

      <p>背景色との違い</p>
      <p>bg-blue-500 は背景色、text-blue-500 は文字色</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-blue-500">通常の本文。(text-blue-500)</p>
      </div>

      <p>文字は白、背景は青</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="bg-blue-500 p-4 text-white">Tailwind CSS</p>
      </div>

      <p>実務でよく使う色</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-black">本文 (text-black)</p>
        <p className="text-gray-900">本文 (text-gray-900)</p>
        <p className="text-gray-500">補足説明 (text-gray-500)</p>
        <p className="text-blue-600">リンク (text-blue-600)</p>
        <p className="text-red-500">エラー (text-red-500)</p>
        <p className="text-green-600">成功 (text-green-600)</p>
        <p className="text-yellow-600">警告 (text-yellow-600)</p>
        <p className="text-orange-500">警告 (text-orange-500)</p>
      </div>

      <p>text-blue-500 と text-blue-600 を比較するs</p>
      <p>600 の方が少し濃く、見出しやリンクに向いている</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="text-blue-500">リンク (text-blue-500)</p>
        <p className="text-blue-600">リンク (text-blue-600)</p>
      </div>

      <p>text-white は背景色と組み合わせる</p>
      <div className="border-2 border-blue-500 p-4">
        <p className="bg-blue-600 p-4 text-white">bg-blue-600 text-white</p>
      </div>
    </div>
  );
}
