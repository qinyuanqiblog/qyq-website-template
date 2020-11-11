module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  // extends: [
  //   '@nuxtjs',
  //   'prettier',
  //   'prettier/vue',
  //   'plugin:prettier/recommended',
  //   'plugin:nuxt/recommended',
  // ],
  // plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
