/**
 * Created by Administrator on 2017/5/17 0017.
 */
exports.lintJavascript = ({include, exclude, options}) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,
                enforce: 'pre',

                loader: 'eslint-loader',
                options,
            },
        ],
    }
});

exports.loadJavaScript = ({include, exclude}) => ({
   module: {
       rules: [
           {
               test: /\.js$/,
               include,
               exclude,

               loader: "babel-loader",
               options: {
                   // Enable caching for improved performance during
                   // development.
                   // It uses default OS directory by default. If you need
                   // something more custom, pass a path to it.
                   // I.e., { cacheDirectory: '<path>' }
                   cacheDirectory: true,
               },
           },
       ],
   }
});

exports.loadJSX = ({include}) => ({
   module: {
       loaders: [
           {
               test: /\.(js|jsx)$/,
               // Enable caching for extra performance
               loaders: ['babel?cacheDirectory'],
               include
           }
       ]
   }
});

exports.lintJSX =({include}) => ({
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['eslint'],
                include
            }
        ]
    }
});