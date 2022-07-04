module.exports = {
  // 按需引入element-plus样式 npm install babel-plugin-import -D 存在版本问题 2.0以上不行
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator'
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
