module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended', // Vue.js 2.x.
    'plugin:prettier/recommended',
  ],
  rules: {
    // https://eslint.org/docs/user-guide/configuring#configuring-rules
    semi: [1, 'never'],
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-async-in-computed-properties': 'off',
    'vue/html-indent': 'off',
    'prettier/prettier': ['error', { semi: false }],
  },
  globals: {
    _: 'readonly',
    $: 'readonly',
    require: true,
    process: true,
  },
  // required to lint *.vue files
  plugins: ['vue'],
}
