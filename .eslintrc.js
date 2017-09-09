
module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2, {
      'MemberExpression': 0
    }],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never'
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 0
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-spaced-func': 'error',
    'quotes': ['error', 'single', {
      'avoidEscape': true
    }],
    'comma-spacing': ['error', {
      'before': false, 'after': true
    }],
    'comma-style': ['error', 'last'],
    'space-before-blocks': ['error'],
    'arrow-spacing': ['error']
  }
};