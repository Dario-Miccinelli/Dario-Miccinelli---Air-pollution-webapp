
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack')

module.exports={
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'static/js')
    },
   plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.env'),
            systemvars: true,
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'static'),
    }
}
