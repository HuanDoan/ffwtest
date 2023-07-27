module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      typescript: {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    react: {
      version: "detect"
    }
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "ts": "never",
        "tsx": "never"
      },
    ],
    'react/jsx-filename-extension': [ 'warn', {'extensions': ['.tsx']} ],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { 'ignoreTypeValueShadow': true }]
  },
}