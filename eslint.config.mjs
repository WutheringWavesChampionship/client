import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import i18Next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/.eslintrc.js', '**/*.config.*', '**/*.example.ts', '**/*.example.tsx'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:@conarti/feature-sliced/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
      i18next: i18Next,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',

      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,

          ignoreAttribute: [
            'as',
            'role',
            'data-testid',
            'to',
            'target',
            'justify',
            'align',
            'border',
            'direction',
            'gap',
            'feature',
            'color',
            'variant',
            'size',
            'wrap',
          ],
        },
      ],
    },
  },
  {
    files: ['**/.eslintrc.{js,cjs}'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'commonjs',
    },
  },
];
