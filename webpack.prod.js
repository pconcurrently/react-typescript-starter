const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const packagejson = require('./package.json');

const common = require('./webpack.config.js');

const assets = [{
        from: 'src/assets',
        to: 'assets'
    },
    {
        from: 'CNAME',
        to: './'
    }
];
if (packagejson.subdirectory) {
    assets.push({
        from: '404.html',
        to: './'
    });
}

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
     module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new CopyWebpackPlugin(assets),
        new OptimizeCSSAssetsPlugin({}),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});
