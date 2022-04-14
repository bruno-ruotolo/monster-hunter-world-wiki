const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const plugins = process.env.NODE_ENV === "production" ?
  [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body"
    }),
  ]
  : [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: "body"
    }),
    new ReactRefreshWebpackPlugin()
  ]

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    assetModuleFilename: "images/[name]-[hash][ext][query]",
    publicPath: '/'
  },

  plugins: plugins,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader',
        },
      },

      {
        test: /\.(gif|jpe?g|png)$/i,
        type: "asset/resource"
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { "runtime": "automatic" }]
            ],
            plugins: process.env.NODE_ENV === "production" ? [] : ["react-refresh/babel"]
          },

        }
      }
    ]
  },

  devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : 'source-map',

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true, open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
};