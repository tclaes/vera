const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: [
        /node_modules/
      ]
    },
    {
      test: /\.(sass|scss)$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      },{
        loader: 'sass-loader'
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: './src',
    port: 7700,
  }
}
