module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "parser": "@babel/eslint-parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "class-methods-use-this": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "eqeqeq": "error",
    "eol-last": "error",
    "func-call-spacing": "error",
    "generator-star-spacing": "error",
    "indent": [
      "error",
      2
    ],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2
      }
    ],
    "multiline-comment-style": [
      "error",
      "separate-lines"
    ],
    "new-parens": "error",
    "no-buffer-constructor": "error",
    "no-case-declarations": "off",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ],
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "operator-assignment": "error",
    "padded-blocks": [
      "error",
      "never"
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quotes": [
      "error",
      "single"
    ],
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "react/prop-types": "off",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "rest-spread-spacing": "error",
    "no-var": "error",
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "wrap-iife": "error",
    "yield-star-spacing": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
