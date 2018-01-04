const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');


module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8000,
        contentBase: './dist',
        hot: true,
        // proxy: [
        //     {
        //         context: ["/api"],
        //         target: "http://localhost:8080"
        //     }
        // ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

