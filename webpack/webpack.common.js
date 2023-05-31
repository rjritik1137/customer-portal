const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'), /* This is the entry point which points to index.tsx present inside the src folder */
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], /**  This allows us to leave of the file extension when importing, webpack basically check .tsx first, if not found, then .ts, then .js*/
  },
  module: {
    rules: [
      // this rule is telling that webpack should use babel-loader of .ts, .js and .tsx file exclusding node_modules 
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', 
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // helps to load assest like icon, image, with specified extensions
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // helps to load assest like fonts, svg, with specified extensions
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  /** Specification of output direactly for bundled code */
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  /** This HtmlWebpackPlugin helps to inject the bundled..js file into the index.html file, and place this html file into the build folder */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
}