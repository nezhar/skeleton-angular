"use strict";


/**
 * Module imports
 */
const
    path = require('path'),
    childProcess = require('child_process'),
    webpack = require('webpack'),
    webpackNoop = require('noop-webpack-plugin'),
    webpackHtml = require('html-webpack-plugin'),
    webpackClean = require('clean-webpack-plugin'),
    webpackCopy = require('copy-webpack-plugin'),
    webpackLicense = require('license-webpack-plugin'),
    webpackExtractText = require('extract-text-webpack-plugin'),
    webpackUglyfyJs = require('uglifyjs-webpack-plugin');


/**
 * Build configuration
 */
const
    config = {
        'debug': process.env.NODE_ENV === "development",
        'root': path.resolve(__dirname, '..'),
        'dist': ['..', 'public'],
        'runserver': {
            'host': '0.0.0.0',
            'port': 8080
        },
        'licences': {
            'licenceFile': 'LICENSE.txt',
            'thirdPartyLicencesFile': '3RD_PARTY_LICENSES.txt',
            'additionalThirdPartyPackages': []
        },
        'output': {
            'style': '[name].css',
            'script': 'app/[name].bundle.js',
            'asset': 'asset/[name].[hash].[ext]',
            'locale': 'locale/[name].[ext]'
        }
    };


/**
 * Webpack plugin classes
 */
const
    NoopWebpackPlugin = webpackNoop,
    HtmlWebpackPlugin = webpackHtml,
    CleanWebpackPlugin = webpackClean,
    CopyWebpackPlugin = webpackCopy,
    ExtractTextPlugin = webpackExtractText,
    UglifyJsPlugin = webpackUglyfyJs,
    LicenseWebpackPlugin = webpackLicense.LicenseWebpackPlugin,
    NamedModulesPlugin = webpack.NamedModulesPlugin,
    DefinePlugin = webpack.DefinePlugin,
    LoaderOptionsPlugin = webpack.LoaderOptionsPlugin,
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


module.exports = {
    devtool: config.debug ? 'eval-source-map' : false,

    /**
     * Development server settings
     */
    devServer: {
        contentBase: path.resolve.apply(null, [config.root].concat(config.dist)),
        port: config.runserver.port,
        host: config.runserver.host,
        disableHostCheck: true
    },

    /**
     * Configuration for the applications entry points
     */
    entry: {
        app: [
            path.resolve(config.root, 'app', 'app.main')
        ],
        polyfill: [
            path.resolve(config.root, 'app', 'app.polyfill')
        ],
        vendor: [
            path.resolve(config.root, 'app', 'app.vendor')
        ],
        style: [
            path.resolve(config.root, 'app', 'styles', 'main')
        ]
    },

    /**
     * Compile configuration for the application
     */
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
                ],
                exclude: [
                    /\.(spec|e2e)\./
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
                    'css-to-string-loader',
                    'css-loader',
                    'postcss-loader?sourceMap',
                    'resolve-url-loader?sourceMap',
                    'sass-loader?sourceMap'
                ],
                exclude: [
                    /\/app\/styles\//
                ]
            },
            {
                test: /\/app\/styles\/.*\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader?sourceMap',
                        'resolve-url-loader?sourceMap',
                        'sass-loader?sourceMap'
                    ]
                })
            },
            {
                test: /\.(json)$/,
                use: [
                    'json-loader'
                ]
            },

            /**
             * Assets configuration
             */
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.+)?$/,
                use: [
                    'file-loader?name=' + config.output.asset
                ]
            }
        ]
    },
    output: {
        filename: config.output.script,
        path: path.resolve.apply(null, [config.root].concat(config.dist))
    },
    plugins: [
        new LoaderOptionsPlugin({
            debug: config.debug
        }),
        new NamedModulesPlugin(),
        new DefinePlugin({
            BUILD_TEST: JSON.stringify(false),
            BUILD_DEVELOPMENT: JSON.stringify(config.debug),
            BUILD_PRODUCTION: JSON.stringify(!config.debug),
            BUILD_DATE: JSON.stringify(new Date()),
            BUILD_VERSION: JSON.stringify((function () {
                try {
                    return childProcess.execSync('git rev-parse HEAD').toString().trim();
                }
                catch (ex) {
                    return 'UNKNOWN';
                }
            })())
        }),
        new CleanWebpackPlugin(path.resolve.apply(null, [config.root].concat(config.dist)), {
            root: path.resolve(config.root, '..'),
            watch: false,
            exclude: [
                '.gitkeep'
            ]
        }),
        new CommonsChunkPlugin({
            minChunks: Infinity,
            filename: config.output.script,
            names: [
                'app',
                'style',
                'vendor',
                'polyfill',
                'manifest'
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(config.root, 'app', 'index.html')
        }),
        new ExtractTextPlugin({
            filename: config.output.style,
            disable: config.debug
        }),
        new CopyWebpackPlugin([
            {
                from: config.licences.licenceFile
            },
            {
                from: path.resolve(config.root, 'app', 'locales', '**', '*.po'),
                to: config.output.locale,
                flatten: true
            }
        ]),
        new LicenseWebpackPlugin({
            pattern: /.*/,
            perChunkOutput: false,
            addBanner: true,
            outputFilename: config.licences.thirdPartyLicencesFile,
            additionalPackages: config.licences.additionalThirdPartyPackages,
            licenseFilenames: [
                'LICENSE',
                'LICENSE.md',
                'LICENSE.txt',
                'license',
                'license.md',
                'license.txt',
                'LICENCE',
                'LICENCE.md',
                'LICENCE.txt',
                'licence',
                'licence.md',
                'licence.txt'
            ]
        }),
        config.debug ?
            new NoopWebpackPlugin() :
            new UglifyJsPlugin({
                sourceMap: false,
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
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
            path.resolve(config.root),
            'node_modules'
        ]
    }
};
