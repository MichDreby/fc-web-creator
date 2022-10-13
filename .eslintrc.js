module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@',
            group: 'internal',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': ['error'],
    'newline-before-return': ['error'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
      },
    ],
    'object-property-newline': ['error'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-empty-function': ['warn'],
  },

  settings: {
    'import/internal-regex': '^@',
  },
}
