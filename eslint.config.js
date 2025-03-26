const simpleImportSort = require('eslint-plugin-simple-import-sort');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');

module.exports = [
  {
    ignores: ['**/.angular/**/*', '**/.angular/**', '.angular/**', 'dist/**/*', 'coverage/**/*', 'package.json', 'package-lock.json', 'dist', 'node_modules']
  },
  {
    files: ['**/*.ts'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': typescriptEslint,
      '@angular-eslint': angular
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2020
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'max-len': ['error', { code: 999, ignoreUrls: true }],
      'no-case-declarations': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-prototype-builtins': 'off',
      '@angular-eslint/component-selector': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        {
          prefix: 'app',
          style: 'camelCase',
          type: 'attribute'
        }
      ]
    }
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplate
    },
    rules: {
      '@angular-eslint/template/no-negated-async': 'off'
    }
  }
];
