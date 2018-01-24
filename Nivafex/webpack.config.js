const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "./KnFoto.ru/assets/css/bundle.css"
});

module.exports = {
    entry: ['babel-polyfill', './KnFoto.ru/assets/js/index.js'],
    output:{
        path: __dirname,
        filename: "./KnFoto.ru/assets/js/bundle.js"
    },
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ["css-loader"]
                })
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel'
            }
        ]
    },
    plugins: [
        extractCSS
    ]
}