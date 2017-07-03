/**
 * Created by suxin on 6/5/17.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.indexTemplate = function(options) {
       return {
           plugins: [
               new HtmlWebpackPlugin({
                   template: require('html-webpack-template'),
                   title: options.title,
                   appMountId: options.appMountId,
                   inject: false
               })
           ]
       };
};

exports.generateSourceMap = ({type}) => ({
   devtool: type,
});