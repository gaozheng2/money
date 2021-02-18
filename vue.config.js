// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/money/'
    : '/',
  lintOnSave: false,
  chainWebpack: (config) => { // 配置 webpack 参数
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir) // 只包含 icons 目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({extract: false}) // 不要解析出文件
      .end() // 一定记得前一条的后面要加 .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap((options) => ({
        ...options,
        plugins: [{removeAttrs: {attrs: 'fill'}}],
      }))
      .end()
    config
      .plugin('svg-sprite')
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  },
}
