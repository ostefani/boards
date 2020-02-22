const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: {
        index: './server/index.js',
    },
    node: {
        __dirname: false,
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/server'),
    },
    // mute warning for the view.js
    stats: {
        warningsFilter: warning => RegExp('node_modules/express/lib/view.js').test(warning),
    },
    /**
     * replace context and replace all searches in express/lib/ to look in folder 'node_modules'
     * and return a map which resolves request for 'ejs' to module 'ejs'
     */
    /*
    * plugins: [
        * new webpack.ContextReplacementPlugin(/express\/lib/, path.resolve('node_modules'),
        * {'ejs': 'ejs}),
    * ], */
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", {
                        "targets": {
                          "node": "current",
                        }
                      }]],
                    },
                },
            },
        ],
    },
};
