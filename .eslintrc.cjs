module.exports = {
  root: true,
  env: { browser: true, es2020: true, "jest/globals": true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "react-app", "react-app/jest"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "jest"],
  rules: {
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error"
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
