module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /(node_modules | lib | libs)/
            },
            {
                test: /\.less/,
                use: ['style-loader', 'less-loader'],
            }
        ]
    }
}