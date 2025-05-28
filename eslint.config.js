import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    // Pagrindinė taisyklė React (naršyklės) failams
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Nustato naršyklės globalius kintamuosius (pvz., window, document)
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Specifinė taisyklė Node.js konfigūracijos failams
    files: ['tailwind.config.js', 'postcss.config.js'], // Taip pat pridėkite postcss.config.js, jei jį turite
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node, // <-- Svarbu: nustato Node.js globalius kintamuosius (pvz., module, require)
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
]