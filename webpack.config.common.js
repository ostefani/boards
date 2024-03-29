/** In webpack.common.js, we have setup our entry and output *
 * configuration and we've included any plugins that are required for both environments. */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
    },
    /*entry: [
        './src/index.js',
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
    ],*/
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './public/index.html',
        }),
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist/src'),
    },
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
                test: /\.(woff|off2|ttf|eot|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
};
