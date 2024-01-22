const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv").config({
    path: path.join(__dirname, ".env"),
});
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "dev";

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        },
    };
    if (!isDev) {
        config.minimizer = [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()];
    }
    return config;
};

module.exports = {
    context: path.resolve(__dirname),
    entry: ["@babel/polyfill", path.resolve(__dirname, "./src/index.tsx")],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext]",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    optimization: optimization(),
    devServer: {
        port: 3333,
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            minify: {
                collapseWhitespace: !isDev,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new webpack.DefinePlugin({
            "process.env": dotenv.parsed,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                oneOf: [
                    {
                        test: /\.module\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: "css-loader",
                                options: {modules: true}
                            }
                        ]
                    },
                    {
                        use: [MiniCssExtractPlugin.loader, "css-loader"]
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.(html)$/,
                use: ["html-loader"],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            [
                                "@babel/preset-react",
                                {
                                    "runtime": "automatic"
                                }
                            ],
                            "@babel/preset-typescript"
                        ],
                    },
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/inline",
            },
        ],
    },
};
