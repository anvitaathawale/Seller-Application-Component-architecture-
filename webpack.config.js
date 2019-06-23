const webpack = require('webpack');

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
  
  entry: './src/app.js',
  
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module:{
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },

      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
            publicPath: '../'
        }),
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: "application/octet-stream"
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: "image/svg+xml"
        }
      },
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     title: 'AngularJS - Webpack',
    //     template: 'index.html',
    //     inject: true
    // }),
    new LoaderOptionsPlugin({
        debug: true,
        options: {
            
        }
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'style.css',
    // }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
],

}

module.exports = config;