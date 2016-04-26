module.exports = {
  context: __dirname,
  entry: "./frontend/BenchBnB.jsx",
  output: {
    path: "./",
    filename: "./app/assets/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
