/*
* @Author: wqb
* @Date:   2017/7/2
* @Last Modified by:   wqb
* @Last Modified time: 2017/7/2
*/
 var webpack             = require('webpack');
 var ExtractTextPlugin   = require('extract-text-webpack-plugin');
 var HtmlWebpackPlugin   = require('html-webpack-plugin');

 // 环境变量配置，dev / online
 var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

 // 获取html-webpack-plugin参数的方法
 var getHtmlConfig = function(name, title){
   return {
     template    : './src/view/' + name + '.html',
     filename    : 'view/' + name + '.html',
     title       : title,
     inject      : true,
     hash        : true,
     chunks      : ['common', name]
   };
 };
 // webpack config
 var config = {
   entry: {
     'common'            : ['./src/pages/common/index.js'],
     'home'             : ['./src/pages/home/index.js'],
     'login'              : ['./src/pages/login/index.js'],
   },
   output: {
     path: './dist',
     publicPath : '/dist',
     filename: 'js/[name].js'
   },
   externals : {
     'jquery' : 'window.jQuery'
   },
   module: {
     loaders: [
       {
         test: /\.css$/,
         loader: ExtractTextPlugin.extract("style-loader","css-loader")
       },
       {
         test: /\.(gif|png|jpg)\??.*$/,
         loader: 'url-loader?limit=100&name=resource/[name]-[hash].[ext]'
       },
       {
         test: /\.(woff|svg|eot|ttf)\??.*$/,
         loader: 'url-loader?limit=100&name=resource/[name]].[ext]'
       },
       {
         test: /\.string$/,
         loader: 'html-loader'
       }
     ]
   },
   resolve : {
     alias : {
       node_modules    : __dirname + '/node_modules',
       util            : __dirname + '/src/util',
       pages            : __dirname + '/src/pages'
     }
   },
   plugins: [
     // 独立通用模块到js/base.js
     new webpack.optimize.CommonsChunkPlugin({
       name : 'common',
       filename : 'js/common.js'
     }),
     // 把css单独打包到文件里
     new ExtractTextPlugin("css/[name].css"),
     // html模板的处理
     new HtmlWebpackPlugin(getHtmlConfig('home', '首页')),
     new HtmlWebpackPlugin(getHtmlConfig('login', '登录页'))
   ]
 };

 if('dev' === WEBPACK_ENV){
   config.entry.common.push('webpack-dev-server/client?http://localhost:8082/');
 }

 module.exports = config;
 