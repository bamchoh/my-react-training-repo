import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src = path.resolve(__dirname, '../src')
const assets = path.resolve(__dirname, '../../assets')

export default {
  entry: src + '/index.jsx',

  output: {
    path: assets + "/js",
    publicPath: '/js/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
  ]
}
