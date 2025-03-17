import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node, ...globals.jest} }},
  pluginJs.configs.recommended,
  {
    plugins: ["jest"], // Add the Jest plugin
    extends: ["plugin:jest/recommended"], // Apply recommended Jest rules
  },
];