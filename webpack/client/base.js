const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../..'),
    output: {
        publicPath: '/'
    },
    target: 'web',
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
    }
}