import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: Configuration = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: ''
  },
  plugins: [new CleanWebpackPlugin()]
});

export default config;
