const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({
	path: path.join(__dirname, '.env'),
});
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'dev';

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all',
		},
	};
	if (!isDev) {
		config.minimizer = [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()];
	}
	return config;
};

module.exports = {
	context: path.resolve(__dirname),
	entry: {
		mainPage: ['@babel/polyfill', '/src/js/MainPageRenderer.js'],
		productPage: ['@babel/polyfill', '/src/js/ProductPageRenderer.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[hash][ext]',
	},
	resolve: {
		extensions: ['.js', '.css'],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
	optimization: optimization(),
	devServer: {
		port: 3333,
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './src/pages/index.html',
			chunks: ['mainPage'],
			minify: {
				collapseWhitespace: !isDev,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'product.html',
			template: './src/pages/product.html',
			chunks: ['productPage'],
			minify: {
				collapseWhitespace: !isDev,
			},
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new webpack.DefinePlugin({
			'process.env': dotenv.parsed,
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(html)$/,
				use: ['html-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
