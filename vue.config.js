const path = require('path')

module.exports = {
  publicPath: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.join(__dirname, 'node_modules')
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
