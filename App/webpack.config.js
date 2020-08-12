const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/script.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + 'dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.css$/, loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
          })
        }
        ]
      }
};