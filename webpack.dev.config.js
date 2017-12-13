const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');


module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8088,
        contentBase: './'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

