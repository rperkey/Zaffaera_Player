const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'dist' : '/',
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
