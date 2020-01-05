const path = require('path');

module.exports = async ({ config }) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        src: path.resolve(__dirname, '../src'),
    }
    return config;
};
