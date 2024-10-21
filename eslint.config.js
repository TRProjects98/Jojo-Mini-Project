import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs[('flat/essential', 'flat/strongly-recommended')],
  prettier, // Prettier config
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    ignores: ['node_modules/*', 'dist/*', 'github/*'],
  },
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-spacing': ['error', { before: false, after: true }],
      'no-unused-vars': ['error'],
      'vue/no-multi-spaces': 0,
      'prettier/prettier': 'error', // Prettier rule
    },
    plugins: {
      prettier: pluginPrettier, // Prettier plugin
    },
  },
];
