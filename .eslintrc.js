module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true
        }
      }
    ],
    quotes: ['error', 'single']
  }
};
