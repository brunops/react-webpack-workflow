module.exports = {
  entry: [
    './app/main.js'
  ],

  module: {
	loaders: [
		{
			test: /\.js(x)?$/,
			loader: 'babel'
		}
	]
  },

  output: {
    path: './build',
    filename: 'bundle.js'
  }
};

