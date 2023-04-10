const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  module: {
    rules: [
       { test: /\.____$/, use: '________' }]
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new________()]
};

