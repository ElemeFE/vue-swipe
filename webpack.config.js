/*eslint-env node */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  library: 'VueSwipe',
  libraryTarget: 'umd',
  filename: 'vue-swipe.js',
  path: './lib'
};
options.externals = {
  vue: 'Vue'
};
options.plugins = [new ExtractTextPlugin('vue-swipe.css')];
options.vue.loaders.css = ExtractTextPlugin.extract('style', 'css');
module.exports = options;
