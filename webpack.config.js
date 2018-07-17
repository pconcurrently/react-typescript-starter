const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const packagejson = require('./package.json');

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
                test: /^404.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: './'
                        }
                    }
                ]
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
        // Fallback to index.html by redirecting from 404.html for deploying to host with subdirectory
        new HtmlWebPackPlugin(
            packagejson.subdirectory ?
                {
                    template: "./src/index-subdirectory.html",
                    filename: "./index.html"
                }
                :
                {
                    template: "./src/index.html",
                    filename: "./index.html"
                }
        ),

    ]
};
