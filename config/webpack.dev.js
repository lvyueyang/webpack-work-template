const { ProgressPlugin, HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const common = require('./webpack.common');
const paths = require('./lib/paths');
const { PUBLIC_PATH } = require('./lib/constants');

const PORT = 9000;
const publicPath = `http://localhost:${PORT}${PUBLIC_PATH}`;

module.exports = smp.wrap(
  merge(common, {
    entry: paths.appSrc,
    mode: 'development',
    output: {
      filename: '[contenthash].js',
      publicPath,
    },
    cache: {
      type: 'filesystem',
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      compress: true,
      port: PORT,
      // https: true,
      // open: true,
      host: '0.0.0.0',
      hot: true,
      // liveReload: true,
      // allowedHosts: 'all',
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
      proxy: {
        // '/api/': {
        //   target: 'https://test-www.kube.ucas/',
        //   changeOrigin: true,
        //   pathRewrite: {
        //     '^/saturn/api/': '/api/',
        //   },
        //   secure: false,
        // },
      },
    },
    plugins: [
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      // 进度条
      new ProgressBarPlugin({
        format: `:msg [:bar] ':percent' (:elapsed s)`,
      }),
      new ProgressPlugin((percentage) => {
        if (percentage === 1) {
          setTimeout(async () => {
            const { default: boxen } = await import('boxen');
            const text = `http://localhost:${PORT}${PUBLIC_PATH}`;
            console.log(
              boxen(text, {
                padding: 1,
                borderColor: 'blue',
                title: '启动成功',
                titleAlignment: 'center',
                borderStyle: 'classic',
              })
            );
          }, 0);
        }
      }),
    ].filter(Boolean),
    // optimization: {
    //   runtimeChunk: 'single',
    // },
  })
);
