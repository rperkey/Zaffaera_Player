'use strict'

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const config = {
  env: 'production',
  root: resolve('../../'),
  index: resolve('../../index.html'),
  dist: resolve('../../dist/'),
  src: resolve('../'),
  modules: resolve('../../node_modules/')
}

module.exports = {
  mode: config.env,
  output: {
    path: config.dist,
    filename: 'js/main.js',
    publicPath: '/'
  },
  devtool: config.env === 'development' ? '#source-map' : false,
  devServer: {
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': config.src,
      '~': config.modules,
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: config.root + '.eslintrc'
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: config.env
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new HtmlWebpackPlugin({
      filename: config.root + 'index.html',
      template: config.src + 'config/template.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      }
    })
  ]
}
