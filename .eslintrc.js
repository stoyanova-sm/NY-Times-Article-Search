module.exports = {
  "extends": ["airbnb", "plugin:flowtype/recommended"],
  "plugins": ["flowtype"],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  },
  "rules": {
    "comma-dangle": ["error", "never"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "quotes": [2, "single"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "semi": [2, "always"],
    "no-console": "warn",
    "linebreak-style": 0
  },
  "ecmaFeatures": {
    "jsx": true
  },
  "parser": "babel-eslint"
};

