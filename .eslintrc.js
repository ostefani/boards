const path = require('path');
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        // "@babel/plugin-syntax-dynamic-import",
    ],
    // to allow absolute paths
    "settings": {
        "import/resolver": {
          "node": {
            "paths": ["./"]
          }
        },
      },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-indent-props": ["error", 4],
        "no-console": 0,
        "no-alert": "error",
        "linebreak-style": 0,
        "no-nested-ternary": 0,
        "arrow-parens": ["error", "as-needed"],
        "react/prop-types": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-props-no-spreading": 0,
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "brace-style": ["error", "stroustrup"],
        'import/no-extraneous-dependencies': [
            "error",
            {
              devDependencies: [
                './.storybook/**/*.js',
                './stories/**/*.stories.js',
                './webpack.*.js',
              ]
            }
          ]
    }
};
