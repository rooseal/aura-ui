var path = require('path')
var fs = require('fs')

module.exports = {
  entry: [
    './example/js/ExamplePage.jsx'
  ],
  output: {
    path: path.resolve(__dirname, './example/js/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "example"),
    publicPath: '/'
  }
};
