const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const config = {
    entry: [
        path.resolve(__dirname, "src/js/index.js"),
        path.resolve(__dirname, "src/scss/index.scss")
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    mode: "production",
    watchOptions: {
        poll: 1000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                extractComments: true
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                //include: path.resolve(__dirname, "src/scss"),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            regExp: /\/src\/fonts\/([\S]+\/)[\w\-]+\.[\w]+$/i,
                            name: '[1][name].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            bootstrap: "bootstrap"
        }),
        new MiniCssExtractPlugin({
            filename: "./style.bundle.css"
        })
    ]
};
module.exports = (env, argv) => {
    if (argv.mode === "production") {
        config.plugins.push(new CleanWebpackPlugin());
    }
    return config;
};
