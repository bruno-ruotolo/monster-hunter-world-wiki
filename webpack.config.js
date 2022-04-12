const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: "images/[name]-[hash][ext][query]"
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      {
        test: /\.(gif|jpe?g|png|svg)$/i,
        type: "asset/resource"
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react']]
          }
        }
      }
    ]
  },

  devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true, open: true,
    hot: true,
    compress: true,
    port: 9000,
  },
};