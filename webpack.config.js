const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
    // モジュールバンドルが最初に起動するところ
        bundle: './src/index.js'
     },
    output: {
        // 結果を出力する場所と名前
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].js'  // [name]には「entry:」の「bundle」が入る
    },
    /*
    resolve: {
        // 対象モジュールの拡張子を指定
        extensions:['.js']
    },
*/
    devServer: {
        // webpack-dev-serverの出力先フォルダ
        static: {
            directory: path.join(__dirname, "dist"),
        },
        open: true,
    },
    optimization: {
      //minify解除
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              }
            },
            {
              loader: 'sass-loader',
            },
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // SASSのコンパイル後のCSSファイルの出力先を指定
        // 出力先フォルダはoutputで指定(dist/style.css)
        filename: 'css/style.css',
      })
    ],

  };