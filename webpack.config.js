var path = require('path');

var DIR = path.resolve(__dirname);


var config = {
   entry: DIR + "/src/main.js",
    
   output: {
      path:DIR + "/public",
      filename: 'bundle.js',
      publicPath:'/public/'
   },
   devServer: {
      historyApiFallback: true,
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
          { test: /\.css$/, loader: "style-loader!css-loader" },
           {
          test: /\.(png|jpg|gif|otf|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              
            exclude: /node_modules/,
            loader: 'url-loader?limit=100000',
            options: {}  
        
          },
         
          
      ]
   }
}
module.exports = config;