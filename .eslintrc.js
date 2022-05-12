module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
      },
    ],
    quotes: ['error', 'single'],
    'prefer-arrow-callback': 0,
    'arrow-body-style': 0,
    'arrow-spacing': [2, { before: true, after: true }],
    'import/extensions': 0,
    'no-multiple-empty-lines': [2, { max: 1 }],
  },
};
