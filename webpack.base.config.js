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
        path: path.join(__dirname, 'dist'),
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
            	test: /\.(css|scss)$/, 
            	// use: ExtractTextPlugin.extract({
            	// 	fallback: 'style-loader',
                //     use: ['css-loader', 'autoprefixer-loader']
                // })
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
            // {
            // 	test: /\.scss$/,
            // 	use: ExtractTextPlugin.extract({
			//         fallback: 'style-loader',
            //         use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
			//     })
            // },
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
    		template: './src/index.html'
    	}),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}
