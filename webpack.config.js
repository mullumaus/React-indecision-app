const path = require('path')

//entry point -> output
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //must be absolute path
        filename: 'bundle.js'
    },
    module: { //tell webpack to run babel
        rules: [{
            use: ['babel-loader'],
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}


//loader
