var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/main.js',
    style: './app/style.css'
  },

  module: {
	loaders: [
		{
			test: /\.js(x)?$/,
			exclude: /node_modules/,
			loader: 'babel'
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		}
	]
  },

  resolve: {
	extensions: ['', '.js', '.jsx']
  },

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  plugins: [
  	new ExtractTextPlugin('style.css')
  ]
};

