/************************************************
 * Webpack configuration
 ************************************************/

const TARGET = process.env.npm_lifecycle_event;

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const javaScript = require('./config/javascript');
const style = require('./config/style');
const devServer = require('./config/devserver');
const parts = require('./config/parts');

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
            // TODO: Set publicPath to match your GitHub project name
            // E.g., '/kanban-demo/'. Webpack will alter asset paths
            // based on this. You can even use an absolute path here
            // or even point to a CDN.
            // publicPath: '/reactDemo/'
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: require('html-webpack-template'),
                title: 'Webpack with React',
                // Set id for a div that will be used to mount app.
                appMountId: 'app',
                inject: false,
            }),
        ],
    },
    // javaScript.lintJavascript({include: PATHS.src}),
    javaScript.loadJSX(PATHS.src),
    javaScript.lintJSX(PATHS.src),
]);


/**
 * Production Configuration
 * =======================================================*/
const productionConfig  = merge([
    javaScript.loadJavaScript({include: PATHS.src }),
    style.extractCSS({
        use: [
            {
                loader: 'css-loader',
                options: {
                    url: false,
                }
            },
            style.autoprefix(),
        ]
    }),
    {
        plugins: [
            // Minimize build
            new webpack.optimize.UglifyJsPlugin({
                minimize:true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production'),
                },
            }),
        ],
    }
]);


/**
 * Development Configuration
 * =======================================================*/
const developmentConfig = merge([
    devServer.devServer({host: '0.0.0.0', port: 8001}),
    style.loadCSS(),
    parts.generateSourceMap({type: "inline-source-map"})
]);


module.exports = (env) => {
    console.log('============================>>>>>')
    if (env === "production") {
        return merge([commonConfig, productionConfig]);
    }
    return merge([commonConfig, developmentConfig]);
}

