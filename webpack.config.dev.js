const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].js'
    }

});
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].js'
    }

});
