const path = require('path')

module.exports = {
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
