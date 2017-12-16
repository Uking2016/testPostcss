var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin('output.css');

module.exports = {
    entry: './entry.js', //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
        path: __dirname, //输出位置
        filename: 'output.js' //输入文件
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                    // options: {
                    //     sourceMap: true
                    // }
                    }, {
                        loader: "less-loader"
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                return [
                                    require("./myplugin.js")
                                ]
                            }
                        }
                    }
                    ],
                    publicPath: __dirname
                })
            },
            {
                test: /\.png$/,
                loader: "file-loader"
            }
        ]
    },
    //其他解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.css', '.less'] //添加在此的后缀所对应的文件可以省略后缀
    },
    //插件
    plugins: [
        extractLESS
    ]
}