const webpack = require("webpack"); 
const path = require("path"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //transfer style vis css not js
const HtmlWebpackPlugin = require('html-webpack-plugin') ; 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development', //development | production
    optimization: {
        minimize: false //for minify .js files
    },
    entry: {
        'index' : './src/index/index.js',
        'about' : './src/about/about.js',
        'article' : './src/article/article.js',
        'articles' : './src/articles/articles.js',
        'report' : './src/report/report.js',
        'forgetPassword' : './src/forgetPassword/forgetPassword.js',
        'login' : './src/login/login.js',
        'moneyGuide' : './src/moneyGuide/moneyGuide.js',
        'rules' : './src/rules/rules.js',
        'signup' : './src/signup/signup.js',
        'ticketGuide' : './src/ticketGuide/ticketGuide.js',
        'tour' : './src/tour/tour.js',
        'tours' : './src/tours/tours.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        //publicPath: './assets/imgs/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader" ,
				exclude: /node_modules/,
            },
            { //for transfer .css via css files
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // { //for transfer .css via js files
            //     test: /\.css$/,
            //     use: ['style-loader','css-loader','postcss-loader']
            // },
            {//for transfer .scss via css files
                test:/\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // { //for transfer .scss via js files
            //     test: /\.scss$/,
            //     use: ['style-loader','css-loader','postcss-loader','sass-loader']
            // },
            {
                test : /\.html$/,
                exclude: /node_modules/,		
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: false , //for minify html or not
                        publicPath: './'
                    }
                }]
            },
            {
                test : /\.(png|jpg|jpeg)$/ ,
                exclude: /node_modules/,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/imgs/',
                            publicPath : 'assets/imgs/' ,
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.(gif)$/ ,
                exclude: /node_modules/,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/imgs/gifs',
                            publicPath : 'assets/imgs/gifs',
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.(ttf|otf|woff|woff2|eot)$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/fonts/',
                            publicPath : 'assets/fonts/',
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.svg$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/svgs/',
                            publicPath : 'assets/svgs/',
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.mp4$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/vids/',
                            publicPath : 'assets/vids/',
                            esModule: false
                        }
                        }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: "[name].css", 
            chunkFilename: '[id].css',
            ignoreOrder: false 
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html' , 
            inject: true,
            chunks: ['index'],
            template: './src/index/index.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html' , 
            inject: true,
            chunks: ['about'],
            template: './src/about/about.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'article.html' ,
            inject: true,
            chunks: ['article'],
            template: './src/article/article.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'articles.html' ,
            inject: true,
            chunks: ['articles'],
            template: './src/articles/articles.html'
        }),
        new HtmlWebpackPlugin({ 
            filename: 'report.html' , 
            inject: true,
            chunks: ['report'],
            template: './src/report/report.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'forgetPassword.html' , 
            inject: true,
            chunks: ['forgetPassword'],
            template: './src/forgetPassword/forgetPassword.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'login.html' , 
            inject: true,
            chunks: ['login'],
            template: './src/login/login.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'moneyGuide.html' , 
            inject: true,
            chunks: ['moneyGuide'],
            template: './src/moneyGuide/moneyGuide.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'rules.html' , 
            inject: true,
            chunks: ['rules'],
            template: './src/rules/rules.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'signup.html' , 
            inject: true,
            chunks: ['signup'],
            template: './src/signup/signup.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'ticketGuide.html' , 
            inject: true,
            chunks: ['ticketGuide'],
            template: './src/ticketGuide/ticketGuide.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'tour.html' , 
            inject: true,
            chunks: ['tour'],
            template: './src/tour/tour.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'tours.html' , 
            inject: true,
            chunks: ['tours'],
            template: './src/tours/tours.html'
        }),
        new CleanWebpackPlugin()
    ]
};