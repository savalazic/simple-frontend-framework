var OhPack = require('ohpack-webpack-plugin');
var SMixer = require('stylus-mixer');
var Copy   = require('copy-webpack-plugin');
var EDF    = require('extended-define-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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

  module: { 
    rules: [
     
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ],
    loaders: [
      {  
           test: /\.(jpe?g|png|gif|svg)$/i,
           loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
           ]
        },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
        },
      {
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
     }]),
     new ExtractTextPlugin("./public/css/style.css"),
  ],

  externals: { 'jquery':'jQuery' },
  resolve:   { extensions:['','.webpack.js','.web.js','.js','.jsx'] },
  output:    { filename: '[name]', path: './' },
  stylus:    { use: [SMixer()] }

};