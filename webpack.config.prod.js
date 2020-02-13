const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');


module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            // both options are optional
            filename: '[name].[contenthash].css',
            // chunkFilename: '[id].css',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.EnvironmentPlugin(['API']),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // we don't use style-loader with MiniCssExtractPlugin
                    // 'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: '50-70',
                                speed: 1,
                                dithering: 0.5,
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new TerserPlugin({ test: /\.js(\?.*)?$/i }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});
