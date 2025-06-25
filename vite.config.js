import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "nativewind",
      jsxRuntime: "automatic",
      babel: {
        configFile: false,
        babelrc: false,
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            {
              runtime: "automatic",
              importSource: "nativewind",
            },
          ],
        ],
      },
    }),
  ],
  define: {
    // reanimated support
    "global.__x": {},
    _frameTimestamp: undefined,
    _WORKLET: false,

    // eslint-disable-next-line no-undef
    __DEV__: process.env.NODE_ENV === "development",
    // eslint-disable-next-line no-undef
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },

  esbuild: {
    jsxImportSource: "nativewind",
    jsx: "automatic",
  },

  optimizeDeps: {
    include: [
      "nativewind/jsx-dev-runtime",
      "nativewind/jsx-runtime",
      "nativewind",
      "react-native-css-interop/jsx-runtime",
      "react-native-css-interop/jsx-dev-runtime",
      "react-native-css-interop",
    ],
    esbuildOptions: {
      jsx: "automatic",
      jsxImportSource: "nativewind",

      resolveExtensions: [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ".web.jsx",
        ".js",
        ".jsx",
        ".json",
        ".ts",
        ".tsx",
        ".mjs",
      ],
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    extensions: [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ".js",
      ".jsx",
      ".json",
      ".ts",
      ".tsx",
      ".mjs",
    ],

    alias: {
      "react-native": "react-native-web",
    },
  },
});
