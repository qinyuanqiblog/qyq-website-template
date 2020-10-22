// 自动注册全局注册组件
// @copyFrom: https://www.jianshu.com/p/cb09318c5de0
// 引入base目录下 xxApi.js 类型的js
// const requireComponent = require.context('./base/', false, /Api\.js$/);
// const requireComponent = require.context('./business/', false, /\.js$/);
function requireArrayModules(modulesContext) {
  let chunks = modulesContext.keys().reduce(function (modules, key) {
    modules[key.replace(/(^\.\/)|(\.js$)/g, '')] = modulesContext(key).default
    return modules
  }, {})
  let moduleNames = Object.keys(chunks)
  console.log('moduleNames', moduleNames)
  console.log('chunks', chunks)
  return chunks
}

const json = requireArrayModules(require.context('./business/', false, /\.js$/))
// const systemApi = json.systemApi
export requireArrayModules(require.context('./business/', false, /\.js$/))
