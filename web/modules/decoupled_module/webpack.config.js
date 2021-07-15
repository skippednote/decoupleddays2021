const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    characters: "./components/Characters",
    charactersprefetch: "./components/Characters-prefetch",
    episodes: "./components/Episodes",
    tabs: "./components/Tabs",
    tabsquery: "./components/Tabs-query",
    character: "./components/Character",
    locations: "./components/Locations",
    personaje: "./components/Personaje",
    svelte: "./components/Characters-svelte",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname + "/build"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".svelte"],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
