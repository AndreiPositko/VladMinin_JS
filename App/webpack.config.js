const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [ 
        './src/script.js',
        './src/style.css'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.css$/,
            use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        }
                },
                'css-loader'
            ]
        }]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new HTMLWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })   
    ]
}