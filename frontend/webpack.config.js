module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    compress: true,
    hot: true,
    host: "0.0.0.0",
    port: 8080,
    publicPath: "/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      },
      { 
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: '@teamsupercell/typings-for-css-modules-loader'
          },
        ]
      }
    ]
  }
};