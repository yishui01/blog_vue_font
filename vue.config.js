const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()

    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })

    config.module
        .rule('compile')
        .test(/\.js$/)
        .include
        .add(resolve('src'))
        .add('test')
        .end()
        .use('babel')
        .loader('babel-loader')
        .options({
          presets: [
            ['@babel/preset-env', { modules: false }]
          ]
        });
  },
  publicPath: "./",
  assetsDir: "static",
  pages: {
    front: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/modules/front/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/index.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'index.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'index page',
      // 包含的模块，可选项
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    manage: {
      entry: 'src/modules/admin/main.js',
      template: 'public/admin.html',
      filename: 'admin.html',
      title: 'admin page',
    },
  },
  lintOnSave: false,
  productionSourceMap: false,

  devServer: {
    sockHost: 'localhost',
    disableHostCheck: true,
    port: 9000, // 端口号
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器

    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080/", // 需要请求的地址
        // target: process.env.VUE_APP_URL,   // 需要请求的地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "/" // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
        }
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        // 超过10kb的压缩gzip
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
        })
      )
    }
  }
};
