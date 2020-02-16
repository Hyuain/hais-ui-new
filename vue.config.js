const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/assets/icons')).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({ ...options, plugins: [{ removeAttrs: {attrs: 'fill'} }] }))
    config.plugin('svg-sprite')
      .use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, 'src/assets/icons')).end()
  }
}
