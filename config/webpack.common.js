const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./lib/paths');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    path: paths.appDist,
  },
  target: ['web'],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.less', '.css', '.json'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    },
    alias: {
      '@': paths.appSrc,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appDemo],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '/css',
            // },
          },
          'css-loader',
        ],
      },
      {
        test: /\.module\.(less)$/,
        include: [paths.appSrc, paths.appDemo],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '/css',
            // },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: [paths.appSrc, paths.appDemo, paths.resolveApp('../multipart_upload/src')],
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
            },
          },
        ],
      },
      // 资源文件
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [paths.appSrc, paths.appDemo],
        type: 'asset/resource',
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: [paths.appSrc, paths.appDemo],
        type: 'asset/resource',
      },
      {
        test: /.(pdf)$/i,
        include: [paths.appSrc],
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }),
    new EnvironmentPlugin(['NODE_ENV']),
    new ForkTsCheckerWebpackPlugin(),
  ],
  // externals: ['moment', 'react-dom', 'superagent', 'chart.js'],
};
