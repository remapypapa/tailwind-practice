/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],

        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans JP", "sans-serif"],
        mplus: ["M PLUS 1p", "sans-serif"],
        zen: ["Zen Kaku Gothic New", "sans-serif"],
        biz: ["BIZ UDPGothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
