let glob = require('glob');
const path = require('path')
//配置pages多页面获取当前文件夹下的html和ts
function getEntry(globPath) {
    let entries = {},
        tmp, htmls = {};
    // 读取src/pages/**/底下所有的html文件
    glob.sync(globPath + 'html').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })
    // 读取src/pages/**/底下所有的ts文件
    glob.sync(globPath + 'js').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry,
            //  当前目录没有有html则以共用的public/index.html作为模板
            template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html',
            //  以文件夹名称.html作为访问地址
            filename: tmp[1] + '.html'
        };
    });
    return entries;
};
let htmls = getEntry('./src/views/**/*.');
const proxy = {
    '/social-gateway': {
        target: 'http://192.168.1.86:2222',
        secure: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/mall/v3.0/mini': ''
        // }
    },
    // 生产环境的代理
    '/weMall/v3.1/mini': {
        target: 'https://mall.wimift.com',
        secure: true,
        changeOrigin: true,
    },
}
module.exports = {
    pages: htmls,
    publicPath: './', //  解决打包之后静态文件路径404的问题
    outputDir: 'dist', //  打包后的文件夹名称，默认dist
    chainWebpack: config => {
      config.resolve.alias
        .set('public', path.join(__dirname, 'public'))
        .set('assets', path.join(__dirname, '/src/assets'))
    },
    css: {
      loaderOptions: {
        // api: https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
        // 引入全局的mixin
        scss: {
          prependData: `
          @import "~public/scss/variable.scss";
          @import "~public/scss/mixin.scss";
          `,
        },
      },
    },
    devServer: {
        // open: true, //  npm run serve 自动打开浏览器
        port: 9256,
        index: '/index.html', //  默认启动页面
        // 内网穿透使用
        // https://www.cnblogs.com/Mvloveyouforever/p/10067274.html
        disableHostCheck: true,
        // liveReload: false,
        // host: 'localhost',
        // 让浏览器 overlay 同时显示警告和错误
        // overlay: {
        //     warnings: true,
        //     errors: true,
        // },
        proxy,
    },
    productionSourceMap: false
};
