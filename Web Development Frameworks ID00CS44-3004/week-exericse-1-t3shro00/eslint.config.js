// eslint.config.js or .eslintrc.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  extends: [
    'tseslint.configs.recommendedTypeChecked' // or 'tseslint.configs.strictTypeChecked'
  ],
  plugins: {
    react,
  },
  settings: {
    react: {
      version: '18.3', // Set your React version
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
