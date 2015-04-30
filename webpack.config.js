module.exports = {
  entry: [
    './app/main.js'
  ],

  module: {
	loaders: [
		{
			test: /\.js(x)?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}
	]
  },

  resolve: {
	extensions: ['', '.js', '.jsx']
  },

  output: {
    path: './build',
    filename: 'bundle.js'
  }
};

