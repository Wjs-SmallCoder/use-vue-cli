const path = require('path') // 路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin') // html 一起打包

module.exports = {
    // 入口文件
    entry: {
        index: path.resolve(__dirname,'src/index.js')
    },
    // 出口文件
    output: {
        filename: 'static/js/[name].bundle.js', // [name] 对应entry 的index
        path: path.resolve(__dirname,'dist')
    },
    // 模块加载
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /(node_modules|bower_components)/, // 排除文件
                include: [path.resolve(__dirname,'src')], // 针对处理
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                // file-loader 和url-loader 替换成模块asset/resource asset/inline(资源变为base64)
                // asset (resource 和inline 通过设置文件大小来判断是哪种来选择)
                // (处理样式的图片链接)
                test: /\.(png|jpg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: { // asset 的转化条件 小于为inline
                        maxSize: 8 * 1024 // 8kb
                    }
                },
                generator: {
                    filename: 'images/[hash:5][ext][query]'
                }
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', // 页面作为模板
            filename: 'index.html' // 生成页面(output 路径)
        })
    ],
    devServer: {
        open: true, // 自动打开页面
    },
    devtool: 'eval-cheap-module-source-map' // 生产环境能够找到出错的文件以及位置
}