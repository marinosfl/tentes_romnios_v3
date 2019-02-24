const path = require('path');

// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/app.js', './src/sass/app.scss'],
  output: {
    filename: './build/js/app.min.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      // perform js babelization on all .js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // compile all .scss files to plain old css
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'sass-loader',
          'postcss-loader'
        ]
      }
      // {
      //   test: /\.(png|jpe?g|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[hash].[ext]',
      //         outputPath: 'img/'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './build/css/main.min.css'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],
  optimization: {
    minimizer: [
      //enable the js minification plugin
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      }),
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
