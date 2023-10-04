/**
 * Webpack Configuration
 *
 * @since 1.0.0
 */

const fs = require("fs");
const path = require("path");
const externals = require("./externals");
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pluginDir = fs.realpathSync(process.cwd());
const resolvePlugin = relativePath => path.resolve(pluginDir, relativePath);

const config = (env, argv) => ({

  devtool: argv.mode !== "production" ? "eval" : false,

  entry: {
    "brickolage.build": resolvePlugin("src/index.js"),
  },

  output: {
    pathinfo: false,
    path: resolvePlugin("dist"),
    filename: "[name].js", // [name] = "./dist/brickolage.build" as defined above.

    library: {
      name: "Brickolage",
      type: "var",
      export: "default",
    },
  },

  watch: argv.mode === "development",

  watchOptions: {
    ignored: /node_modules/
  },

  module: {
    rules: [
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  // Add plugins.
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./brickolage.build.css"
    }),
  ],

  optimization: {
    minimizer: argv.mode === "production"
      ? [
        new TerserPlugin(),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ]
      : [],
  },

  stats: "minimal",

  // Add externals.
  externals,
});

// Export configuration.

module.exports = config;
