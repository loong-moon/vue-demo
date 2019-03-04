// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'indent': ['error', 4], // 缩进为4
    'comma-dangle': 'off',  // 允许对象中有多余的逗号
    'vue/valid-v-on': 'off', // 允许v-on用对象
    // 'vue/no-parsing-error': 'off',
    // 'import/no-webpack-loader-syntax': 'off',
    'no-multiple-empty-lines': ["error", { "max": 2}], // 最大允许连续空行数为2

    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
