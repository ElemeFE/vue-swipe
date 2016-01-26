/*eslint-env node */
module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  }
};
