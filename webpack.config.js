// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
const PhaserAssetsWebpackPlugin = require('phaser-assets-webpack-plugin')
const phaser = path.join(pathToPhaser, "dist/phaser.js");

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      //.tsがケツにつくファイルを探索し、TypeScriptとして読み込む(ts-loader)
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env']
          ]
        }
      },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },

  resolve: {
    //バンドル対象にするファイルを指定する
    extensions: [".ts", ".js"],
    //import "phaser"ってしたときに読み込みに行くやつを指定する
    alias: {
      phaser: phaser
    }
  },

  plugins: [
    new PhaserAssetsWebpackPlugin([
      { type: 'image', dir: '/img', rule: /^\w+\.png$/ },
      { type: 'font', dir: '/font', rule: /^\w+\.(ttf|woff)$/ },
      //{ type: 'audio', dir: '/audio', rule: /^\w+\.(m4a|ogg)$/ }
    ], { documentRoot: './public', output: './src/assets.json' })
  ]
};