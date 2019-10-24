const path = require('path');

module.exports = {
  entry: './frontend/react_minesweeper.jsx', 

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  // allows us to drop .js or .jsx when importing files
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}