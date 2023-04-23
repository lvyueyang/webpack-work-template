const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common');
const paths = require('./lib/paths');
const { PUBLIC_PATH } = require('./lib/constants');

const DEPLOY_ADDRESS = process.env.DEPLOY_ADDRESS || '';
const publicPath = `${DEPLOY_ADDRESS}${PUBLIC_PATH}`;

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[contenthash].js',
    publicPath,
    // path: path.resolve(__dirname, '../dist/v1_0'),
  },
  devtool: 'source-map',
  plugins: [
    // 打包依赖分析
    !!process.env.BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  // externals: ['moment', 'react-dom', 'superagent', 'chart.js'],
});
