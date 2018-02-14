var path = require('path');

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
      app.get('/list', (req, res) => {
        res.json({
          data: {
            normal: [
                'White widow',
                'Northern Light',
                'Super skunk',
                'K2',
                'Snow White',
                'Orange Budd',
            ],
            haze: [
                'Cheese',
                'Power plant',
                'Silver Haze',
                'Amnesia'
            ]
          }
        })
      })
    }
  }
};
