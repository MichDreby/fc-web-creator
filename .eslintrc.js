module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    // import
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
    'import/no-duplicates': ['error'],

    // object aligning
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

    // react
    'react/self-closing-comp': [
      'error',
      {
        component: true,
      },
    ],

    // other
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error'],
  },

  settings: {
    'import/internal-regex': '^@',
  },
}
