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
        filename: "./js/bundle.js",
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
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, "src/scss"),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    /*{
                     loader: "postcss-loader",
                     options: {
                     ident: "postcss",
                     sourceMap: true,
                     plugins: () => [
                     require("cssnano")({
                     preset: [
                     "default",
                     {
                     discardComments: {
                     removeAll: true
                     }
                     }
                     ]
                     })
                     ]
                     }
                     },*/
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, "src/html/includes"),
                use: ["raw-loader"]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            bootstrap: "bootstrap"
        }),

        new MiniCssExtractPlugin({
            filename: "./css/style.bundle.css"
        }),
                /*new CopyWebpackPlugin([
                 {
                 from: "./src/fonts",
                 to: "./fonts"
                 },
                 {
                 from: "./src/favicon",
                 to: "./favicon"
                 },
                 {
                 from: "./src/img",
                 to: "./img"
                 },
                 {
                 from: "./src/uploads",
                 to: "./uploads"
                 }
                 ])*/
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === "production") {
        config.plugins.push(new CleanWebpackPlugin());
    }
    return config;
};
