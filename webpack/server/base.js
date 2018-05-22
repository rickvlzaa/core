const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, '../../'),
    entry: {
        server: './src/server/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../build'),
        publicPath: '/'
    },
    resolve: {
        mainFiles: ['index.js'],
        extensions: ['.js', '.jsx']
    },
    node: {
        __dirname: true,
        __filename: true
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./build/*.js'] ,{
            root: path.resolve(__dirname, '../..'),
        })
    ]
}
