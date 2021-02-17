import webpack, { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import path from 'path';

const config: Configuration = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 7777,
    open: true,
    hot: true
  }
});

export default config;
