const path = require('path')
const Html = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.(sa|c|sc)ss$/, // // Expressão regular - regex
                use:[
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },{
                test:/\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new Html({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtract({
            filename:'style.css'
        })
    ]
}