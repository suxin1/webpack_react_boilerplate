/************************************************
 * Webpack configuration
 ************************************************/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const javaScript = require('./config/parts/javascript');
const devServer = require('./config/parts/devserver');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
};


const commonConfig = merge([
    {
        entry: {
            app: PATHS.src,
        },
        output: {
            path: PATHS.build,
            filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Baidu Lession',
            }),
        ],
    },
    // javaScript.lintJavascript({include: PATHS.src}),
]);


/**
 * Production Configuration
 * =======================================================*/
const productionConfig  = merge([
    javaScript.loadJavaScript({include: PATHS.src }),
]);


/**
 * Development Configuration
 * =======================================================*/
const developmentConfig = merge([
    devServer.devServer({host: '0.0.0.0', port: 8000}),
]);

module.exports = (env) => {
    console.log('============================>>>>>')
    if (env === "production") {
        return merge([commonConfig, productionConfig]);
    }
    return merge([commonConfig, developmentConfig]);
}

