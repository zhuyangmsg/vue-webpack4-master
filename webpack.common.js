  
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const env = process.env.NODE_ENV || "";
module.exports = {
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath: env?'./':'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/env"]  //babel-loader高版本对应新的预设 @babel/preset-env和@babel/preset-react
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']  // 增加 'less-loader' ，注意顺序
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']  // 增加 'postcss-loader' , 单独抽离css ， 注意顺序
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'images/', // 图片输出的路径
                    limit: 10 * 1024
                  }
                }
            },
            //处理 html 代码中 <img src="..."/> 的形式
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    plugins:[
        //创建入口文件html
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new VueLoaderPlugin()
    ]
}