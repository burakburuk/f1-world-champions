const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index'],
    devtool: 'inline-cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      limit: 10000,
                      mimetype: 'application/font-woff',
                    },
                  },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        compress: true,
        port: 3000
    },
};
