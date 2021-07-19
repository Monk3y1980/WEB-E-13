const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

require("dotenv").config();

const ENV = process.env.APP_ENV;
const isDev = ENV === "dev";
const isProd = ENV === "prod";

function setDevTool() {
  // функция для установки dev-tool в зависимости от среды
  if (isDev) {
    return "inline-source-map";
  } else if (isProd) {
    return "source-map";
  } else {
    return "eval-source-map";
  }
}

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  devtool: "inline-source-map", // Source Map
  devtool: setDevTool(),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement", // Hot Module Replacement
      title: "Development",
      template: path.resolve(__dirname, "./src/template.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    // применять изменения только при горячей перезагрузке
    new webpack.HotModuleReplacementPlugin(),
  ],
  if (isProd) {
    config.plugins.push(
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([{
          from: __dirname + '/src/public'
      }])
    );
  }
};
module.exports = config; 