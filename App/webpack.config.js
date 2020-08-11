const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

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
        })
    ],
    resolve: {
        extensions: ['.js']
    }
};