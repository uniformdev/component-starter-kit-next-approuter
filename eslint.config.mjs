import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import nextConfig from 'eslint-config-next';

const eslintConfig = [
  js.configs.recommended,
  ...nextConfig,
  eslintConfigPrettier,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      // TypeScript rules are included in eslint-config-next, override if needed
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_', varsIgnorePattern: '_' }],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '@uniformdev/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@**/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next**/**',
              group: 'builtin',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'node_modules/**',
      'next-env.d.ts',
      '*.config.{js,mjs,cjs,ts}',
    ],
  },
];

export default eslintConfig;
