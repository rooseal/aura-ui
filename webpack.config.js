var path = require('path')
var fs = require('fs')

module.exports = {
  entry: [
    './dist/js/test-components.jsx'
  ],
  output: {
    path: path.resolve(__dirname, './dist/js/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: '/',
    before(app) {
      // Print requests to console
      app.use((req, res, next) => {
        console.log(`${req.protocol} |  ${req.method} ${req.path} request from ${req.ip}`)
        next()
      })

      // Get list resource
      app.get('/list', (req, res) => {
        data: fs.readFile('./data/list.json', (err, content) => {
          if(err) console.error(err)
          try {
            res.json({
              data: JSON.parse(content)
            })
          } catch(error) {
            res.end(500)
          }
        })
      })
    }
  }
};
