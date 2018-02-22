const path = require('path');
const genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    // Add .scss rule
    config.module.rules.unshift({
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
    });

    return config;
};