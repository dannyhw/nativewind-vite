import nativewind from "nativewind/preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  presets: [nativewind],
  plugins: [],
};
