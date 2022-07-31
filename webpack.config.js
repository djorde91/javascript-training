const path = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      progress: true,
    }, 
    port: 9000,
    allowedHosts: 'all',
  },
};