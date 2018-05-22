const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = merge(base, {
    entry: {
        app: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../assets'),
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        publicPath: '/assets/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:  MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['assets/*'], {
            root: path.resolve(__dirname, '../../')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin({
            basePath: '/',
            fileName: '../build/manifest.json'
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        }),
        new MiniCssExtractPlugin({
            filename: "app.[hash].css",
        })
    ]
})