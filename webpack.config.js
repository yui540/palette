module.exports = {
  mode: process.env.MODE,
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/other/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: `${__dirname}/public`,
    open: true,
    port: 8080,
  },
}
