const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("babel-register");


const config = {
  
  mode: 'development',
  watch: true,
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[a|c]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
	      template: path.resolve(__dirname, './src/index.html'),
	      filename: 'index.html',
	      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

module.exports = config;

