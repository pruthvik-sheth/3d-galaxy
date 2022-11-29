const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {

    mode: 'development',

    entry: path.resolve(__dirname, '../src/index.js'),

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle[contenthash].js',
        clean: true,  //keeps dist folder clean (only single bundle file is generated)
        assetModuleFilename: '[name][ext]'
    },

    devtool: 'source-map', // adds an js.map in build used for debugging

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        // client: {
        //     logging: 'info',
        // },
        compress: true,
        historyApiFallback: true
    },

    module: {

        rules: [

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }

        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "A template",
            filename: 'index.html',
            template: 'src/template.html'
        }),

        // new BundleAnalyzerPlugin()
    ]

}