const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/dist',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
});
