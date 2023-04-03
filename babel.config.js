const isDEV = process.env.NODE_ENV === 'development'
module.exports = {
  // 执行顺序由右往左，由下往上
  "presets": [
    [
      '@babel/preset-env',
      {
        // 设置兼容目标浏览器版本，这里可以不写，babel-loader会自动寻找.browserslistrc文件
        // "targets": {
        //   "chrome": 35,
        //   "ie": 9
        // },
        "useBuiltIns": "usage", // 根据配置的浏览器兼容，以及代码中使用到的api进行引入polyfill按需添加
        "corejs": 3, // 配置使用core-js低版本
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  "plugins": [
    isDEV && require.resolve('react-refresh/babel'),
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ].filter(Boolean)
}