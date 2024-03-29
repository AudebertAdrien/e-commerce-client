const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  target: "browserslist",

  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    /* new MiniCssExtractPlugin(), */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/favicon.svg",
      cache: true,
    }),
    new webpack.DefinePlugin({
      WEBPACK_BASE_URL: JSON.stringify(
        "https://my-e-commerce-server.herokuapp.com"
      ),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
/*   {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          }, */
/*   options: {
              plugins: function () {
                return [require("autoprefixer")];
              },
            }, */
