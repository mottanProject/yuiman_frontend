const path = require('path');

module.exports = {

  mode: 'development',
  entry: [path.resolve(__dirname, './src/index.js')],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.json'],
  },

  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
  },
};
