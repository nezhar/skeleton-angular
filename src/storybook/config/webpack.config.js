const
    path = require('path'),
    webpackExtractText = require('extract-text-webpack-plugin'),
    genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');

const ExtractTextPlugin = webpackExtractText;


module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    /*
     * Add extract text plugin
     */
    config.plugins.push(
        new ExtractTextPlugin({filename: '[name].css'})
    );

    /*
     * Add rule to load styles of components
     */
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'css-to-string-loader',
            'css-loader',
            'postcss-loader?sourceMap',
            'resolve-url-loader?sourceMap',
            'sass-loader?sourceMap'
        ],
        exclude: [
            /\/app\/styles\//,
            /\/storybook\/styles\//
        ]
    });

    /*
     * Add rule to load global styles, uses extract text plugin
     */
    config.module.rules.push({
        test: [
            /\/app\/styles\/.*\.(css|sass|scss)$/,
            /\/storybook\/styles\/.*\.(css|sass|scss)$/,
        ],
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader',
                'postcss-loader?sourceMap',
                'resolve-url-loader?sourceMap',
                'sass-loader?sourceMap'
            ]
        })
    });

    /*
     * This configuration is required to load styles and modules with absolute path
     *
     * Usage: @import "~app/styles/main.scss";
     */
    config.resolve.modules = [
        path.resolve(__dirname, "..", ".."),
        'node_modules'
    ];

    return config;
};