/*eslint-env node */
var options = require('./webpack.base.js');
options.entry = './example';
options.output = {
  filename: './example/dist/example.js',
  publicPath: '/'
};
module.exports = options;
