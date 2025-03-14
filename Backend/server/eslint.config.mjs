import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    languageOptions: { globals: globals.node } 
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      sourceType: "module" // Поддержка ES-модулей
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off", // ✅ Отключаем ошибку require()
      "no-undef": "off", // ✅ Отключаем ошибку exports is not defined
      "@typescript-eslint/no-require-imports": "off" // ✅ Отключаем запрет на require()
    },
  },
];
