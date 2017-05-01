'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{ // um array de objetos, cada objeto passa uma instrução para o webpack.
      test: /\.js$/, // recebe uma regex, que vai selecioar todo arquivo que terminar com .js 
      exclude: /node_modules/, // vai excluir a pasta node modules na procura dos arquivos .js
      include: /src/, // diretorio que será lido os arquivios
      loader: 'babel', // seleciona o loader
      query:
      {
        presets:['react']
      }
    }]
  }
})
