module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-invalid-this': 'off'
      }
    }
  ]
};
