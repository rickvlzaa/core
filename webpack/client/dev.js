const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(base, {
    entry: {
        app: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../build', 'public'),
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
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
            },
            
        ]
    },
    plugins: [
       new CleanWebpackPlugin(['./build/public/*'], {
           root: path.resolve(__dirname, '../../')
       }),
       new webpack.HashedModuleIdsPlugin(),
       new ManifestPlugin({
           basePath: '/',
           fileName: '../manifest.json'
       }),
       new webpack.EnvironmentPlugin({
           NODE_ENV: 'development'
       })
    ]
});