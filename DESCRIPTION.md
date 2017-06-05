#Webpack with react simple boilerplate

##Development Dependencies

###JavaScript loader
Support for ES6

related loader and dependencies:
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-react-hmre

###lint JavaScript (Optional)
* eslint
* eslint-loader
* eslint-plugin-react

###Style loader
* css-loader
* style-loader
* sass-loader
* postcss-loader and autoprefixer
* extract-text-webpack-plugin

###Webpack Specific
* webpack-merge `npm install webpack-merge`
* clean-webpack-plugin
* webpack-validator
* npm-install-webpack-plugin

This is a great tool for manage webpack configurations.
It can merge a list of objects without overwriting 
the same properties. And it's syntax is easy:

    merge([
        {
            foo: [1, 2, 3]
        },
        {
            foo: [3, 4, 5]
        }
    ]);
    // Output { foo: [1, 2, 3, 4, 5] }

###Polyfill JavaScript
* phantomjs-polyfill