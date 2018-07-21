const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const assets = [{
        from: 'src/assets',
        to: 'assets'
    },
    {
        from: 'CNAME',
        to: './'
    }
];

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
                    }
                }]
            },
            {
                test: /\.ico?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './'
                    }
                }]
            },
            {
                test: /\.md$/,
                use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader"
                }
                ]
            }
        ]
    },
    plugins: [
        new FaviconsWebpackPlugin('./src/assets/images/logo.png'),
        new webpack.DefinePlugin({
            SUBDIRECTORY: JSON.stringify(require("./package.json").subdirectory)
        }),
        new CopyWebpackPlugin(assets),
        new HtmlWebPackPlugin(
            {
                template: "./src/index.html",
                filename: "./index.html"
            }
        ),

    ]
};
