const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        './main': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: './build/',
        filename: '[name].js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    optimization: {minimize: false},
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: false,
            warnings: false,
            mangle: {
                keep_fnames: true
            }
        })
    ])
}
