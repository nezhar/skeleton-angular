"use strict";


/**
 * Module imports
 */
const
    path = require('path'),
    webpack = require('webpack');


module.exports = {
    devtool: 'inline-source-map',

    module: {
        rules: [
            /**
             * Pre-rule configurations (e.g. lint)
             */
            {
                enforce: 'pre',
                test: /\.(ts|tsx)$/,
                use: [
                    'tslint-loader'
                ],
                exclude: [
                    /\/node_modules\//
                ]
            },

            /**
             * Bundle configurations
             */
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'ts-loader',
                    'angular2-template-loader',
                    '@angularclass/hmr-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'raw-loader',
                    'sass-loader?sourceMap'
                ],
                exclude: [
                    /\/app\/styles\//
                ]
            },
            {
                test: /\.(json)$/,
                use: [
                    'json-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            BUILD_TEST: JSON.stringify(true),
            BUILD_DEVELOPMENT: JSON.stringify(false),
            BUILD_PRODUCTION: JSON.stringify(false),
            BUILD_DATE: JSON.stringify(new Date()),
            BUILD_VERSION: JSON.stringify('TEST')
        })
    ],
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
            '.css',
            '.scss',
            '.sass',
            '.html'
        ],
        modules: [
            path.resolve(__dirname, '..'),
            'node_modules'
        ]
    }
};
