const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
module.exports = {
    // path to entry paint
    entry: './src/index.js',

    // // path and filename of the final output
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    devtool: 'source-map',
    module: {

        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css' }
                    },
                    'sass-loader'
                ]
            }

        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: 'css/styles.css',
    //     }),
    // ],
}
