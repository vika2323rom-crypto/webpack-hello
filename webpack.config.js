const path = require('path');

module.exports = (env, argv) => {
    const isDev = argv.mode !== 'production';

    return {
        entry: { core: './src/index.js' },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            clean: true,
        },
        module: {
            rules: [
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            ],
        },
        devtool: isDev ? 'eval-source-map' : false,
    };
};