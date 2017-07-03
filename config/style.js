/**
 * Created by suxin on 6/6/17.
 */

const extractTextPlugin = require('extract-text-webpack-plugin');
/**
 * Load Css through css-loader, file-loader
 */
exports.loadCSS = ({ include, exclude } = {}) => ({
   module: {
       rules: [
           {
               test: /\.css$/,
               include,
               exclude,

               use: [
                   'style-loader',
                   {
                        loader: 'css-loader',
                        options: {
                            url: false
                        },
                   },
               ],
           },
       ],
   },
});

exports.loadSCSS = ({include, exclude} = {}) => ({
   module: {
       rules: [
           {
               test: /\.scss$/,
               include,
               exclude,

               use: [
                   'style-loader',
                   {

                   },
                   'sass-loader'
               ],
           }
       ],
   },
});

/**
 * Enable auto prefixing
 */
exports.autoprefix = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => ([
           require('autoprefixer'),
        ]),
    },
});

/**
 * Output separated Css file
 * */

exports.extractCSS = ({ include, exclude, use }) => {
    // use: loader that will be used when extract css files.
    const plugin = new extractTextPlugin({
        filename: '[name].css',
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,

                    use: plugin.extract({
                        use,
                        fallback: 'style-loader',
                    }),
                },
            ],
        },
        plugins: [
            plugin,
        ],
    };
};

exports.extractSCSS = ({ include, exclude, use }) => {
    // use: loader that will be used when extract css files.
    const plugin = new extractTextPlugin({
        filename: 'style/[name].css',
    });

    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include,
                    exclude,

                    use: plugin.extract({
                        use,
                        fallback: 'style-loader',
                    }),
                },
            ],
        },
        plugins: [
            plugin,
        ],
    };
};