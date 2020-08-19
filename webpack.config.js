const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: {
//     index: "./src/index.js",
//   },
//   devtool: "inline-source-map",
//   devServer: {
//     contentBase: "./dist",
//   },
//   plugins: [
//     new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
//     new HtmlWebpackPlugin({ title: "Webpack 学习" }),
//   ],
//   output: {
//     filename: "[name].[contenthash].js",
//     // chunkFilename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     // publicPath: "/",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ["file-loader"],
//       },
//     ],
//   },
// };

/**
 * Caching
 */

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Webpack 学习" }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
