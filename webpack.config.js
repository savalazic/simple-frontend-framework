var OhPack = require('ohpack-webpack-plugin');
var SMixer = require('stylus-mixer');
var Copy   = require('copy-webpack-plugin');
var EDF    = require('extended-define-webpack-plugin');
var pkg    = require('./package.json');

module.exports = {

  entry: {

    // HTML

    'public/index.html':
    './src/html/index.jade',

    // JS

    'public/js/app.js':
    './src/js/app.js',

    // CSS

    'public/css/style.css':
    './src/css/style.styl',

  },

  module: { loaders: [{
    test: /\.s[ca]ss$/,
    loader: 'sass'
  },{
    test: /\.styl(us)?$/,
    loader: OhPack.loaders.stylus
  },{
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: { presets: ['es2015'] }
  },{
    test: /\.(jade|pug)$/,
    loader: OhPack.loaders.jade
  }]},

  plugins: [
    new OhPack (),
     new EDF ({}),
     new Copy ([{
       from:   './src/assets',
       to:     './public/assets'
     }])
  ],

  resolve:   { extensions:['','.webpack.js','.web.js','.js','.jsx'] },
  output:    { filename: '[name]', path: './' },
  stylus:    { use: [SMixer()] }

};