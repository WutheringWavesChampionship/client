import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl, port, hash }: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: [
              { from: paths.assets, to: paths.buildAssets  },
              { from: paths.locales, to: paths.buildLocales },
            ],
          }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __HASH__: JSON.stringify(hash),
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    if (port) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: (port + 1)
        }));  
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }

    return plugins;
}
