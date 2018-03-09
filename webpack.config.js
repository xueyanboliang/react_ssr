let path = require('path')
let webpack = require('webpack')

module.exports = {
    entry: {
        main: './app/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(_dirname, 'public'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/,
                loaders: ['babel-loader'],
            }
        ]
    }
}