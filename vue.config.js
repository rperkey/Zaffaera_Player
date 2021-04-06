const path = require('path')

module.exports = {
  publicPath: 'dist',
  indexPath: path.join(__dirname, 'index.html'),
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
