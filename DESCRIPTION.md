# Webpack with react simple boilerplate

## Development Dependencies

### JavaScript loader
Support for ES6

related loader and dependencies:
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-react-hmre

### lint JavaScript (Optional)
* eslint
* eslint-loader
* eslint-plugin-react

### Style loader
* *css-loader*

    css-loader goes through possible `@import` and `url()` lookups within 
the matched files and treats them as a regular ES6 import.
* *style-loader*

    style-loader injects the styling through a style element.
* *sass-loader*

    pre-processor for CSS
* *postcss-loader and autoprefixer*

    PostCSS allows you to perform transformations over 
    CSS through JavaScript plugins. Just like babel for ES6.
* *[extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)*
    
    It can aggregate multiple CSS files into one.
### Webpack Specific
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

### Polyfill JavaScript
* phantomjs-polyfill