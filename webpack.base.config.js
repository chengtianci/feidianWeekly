const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
    	main: './src/main',
    	vendors: './src/vendors'
    },
    output: {
        publicPath: '/assets/', // 文件路径
        path: path.join(__dirname, 'dist/assets'), // 打包路径
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            { 
            	test: /\.(css|scss|less)$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { 
            	test: /\.(png|jpg|gif|svg)$/, 
            	use: [
            		{
            			loader: 'url-loader',
            			options: {
            				limit: 4096
            			}
            		}
            	] 
            },
            { 
            	test: /\.(woff|woff2|eot|ttf|otf)$/, 
            	use: ['file-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
        	name: 'vendors',
        	filename: 'vendors.js'
        }),
    	new HtmlWebpackPlugin({
            title: 'feidianWeekly',
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: true,
    	}),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.join(__dirname, './src'),
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}
