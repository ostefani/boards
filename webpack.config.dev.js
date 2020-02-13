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
    else {
        throw new Error('Needed .env file');
    }
}

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
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
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
