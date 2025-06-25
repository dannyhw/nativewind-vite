// import nativewind from "nativewind/preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  important: "html",
  // eslint-disable-next-line no-undef
  presets: [require("nativewind/preset")],
  plugins: [],
};
