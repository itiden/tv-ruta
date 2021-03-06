const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const program = require('commander');

function commaSeparatedList(value, dummyPrevious) {
  return value.split(',');
}

program
  .version('1.0.0')
  .option(
    '-p, --packages [items]',
    'only bundle the specified packages. package1,package2',
    commaSeparatedList
  );

program.parse(process.argv);

const entries = [];
const dirs = fs.readdirSync('./packages');
const includeNames = program.packages || [];
dirs.forEach(dir => {
  if (fs.existsSync(`./packages/${dir}/package.json`)) {
    const { name, main } = require(`./packages/${dir}/package.json`);
    if (!program.packages) {
      includeNames.push(name);
    }

    if (!name.includes('@tvruta') && !name.includes('example') && includeNames.includes(name)) {
      entries.push(`./packages/${dir}/${main}`);
    }
  }
});

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    // 'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    ...entries,
    './packages/app/src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    hot: true,
    inline: true,
    host: 'localhost',
    port: 8081,
    contentBase: path.join(__dirname, 'public'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    stats: {
      warnings: false,
      warningsFilter: /export .* was not found in/,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // { loader: 'babel-loader', options: { babelrc: true } },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    // new Dotenv(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      useTypescriptIncrementalApi: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'template.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};
