const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = () => {
    if (env) {
        return Object.keys(env).reduce((p, c) => {
            p[`process.env.${c}`] = JSON.stringify(env[c]);
            return p;
        }, {});
    }
    throw new Error('.env file is required');
};

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
        port: 3000,
        host: '0.0.0.0',
    },
    plugins: [
        new webpack.DefinePlugin(envKeys()),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
});
