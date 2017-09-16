const path = require('path');

const publicPath = '/assets/';
const sourceRoot = './src';

module.exports = {
  context: path.resolve('./src'),

  entry: {
    javascript: './index.js',
    html: './index.html'
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath
  },
  devServer: {
    contentBase: path.resolve(__dirname, sourceRoot),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'react-hot-loader'
        }, {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }]
      },
      {
        test: /\.html$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }]
      }, {
        test: /\.(ttf|otf|eot|woff(2)?)$/,
        use: ['file-loader?name=fonts/[name].[ext]']
      }, {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader?name=[path][name].[ext]']
      }
    ]
  }
};
