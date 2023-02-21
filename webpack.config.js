const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
    entry: './src/main.js', //配置入口文件
    output: {
        //打包后的文件名
        filename: 'main.js',
        // 打包后的路径，必须是绝对路径，不设置时默认是 dist/main.js
        path: path.resolve(__dirname, './dist')
    },
    // 模式    开发模式   生产模式
    mode: 'development',
    // mode: 'production',
    devServer: {
        open: true, //自动打开浏览器
        port: 8080, //端口的配置
        hot: true, //热加载
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/, 
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: 'img/[name].[hash:7].[ext]',
                    esModule: false,
                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
            },
        ]
    }
 
}