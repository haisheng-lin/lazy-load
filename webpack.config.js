module.exports = {
  entry: {
    'lazy-load': './src/lazy-load.js',
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js', // [name] 是 entry 中的 key，也就是 lazy-load
    library: 'lazy-load',
    libraryTarget: 'umd',
  },
};