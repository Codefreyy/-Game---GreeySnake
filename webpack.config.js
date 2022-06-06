const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


//webpack里面所有的配置信息
module.exports = {
    //入口文件
    entry: './src/index.ts',
    //打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义的环节
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {

                                        targets: {
                                            "chrome": "88"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    },
                                ]
                            ]
                        }
                    },
                    "ts-loader",
                ],
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: 'GreedySnake'
            template: './src/index.html'
        }),
    ],
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    }
}