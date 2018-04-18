const {resolve} = require('path');
const options = require('./webpack.config');

options.mode = 'development';
options.entry = './example/';

options.output.filename = 'example.js';
options.output.libraryTarget = 'var';
options.output.publicPath = '/dist/';

options.devServer = {
  contentBase: [
    resolve(__dirname, "example"),
  ],
  publicPath: '/dist/'
};

module.exports = options;
