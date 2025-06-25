import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "nativewind",
      jsxRuntime: "automatic",
      babel: {
        presets: ["nativewind/babel"],
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

    __DEV__: true,

    "process.env.NODE_ENV": JSON.stringify(true),
  },
  esbuild: {
    jsxImportSource: "nativewind",
    jsx: "automatic",
  },
  optimizeDeps: {
    esbuildOptions: {
      jsx: "automatic",
      jsxImportSource: "nativewind",
      resolveExtensions: [
        ".web.js",
        ".web.ts",
        ".web.tsx",
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
