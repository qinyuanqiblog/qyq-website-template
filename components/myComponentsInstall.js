export default {
  install(Vue) {
    // 自动注册全局注册组件
    // @copyFrom: https://www.jianshu.com/p/cb09318c5de0
    const requireComponent = require.context('./common', false, /\.vue$/);
    requireComponent.keys().forEach(fileName => {
      // 获取组件配置
      const componentConfig = requireComponent(fileName);
    //   // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
      const componentName = fileName.replace(/^\.\//,'').replace(/\.vue$/,'');
    //   // 全局注册组件
      Vue.component(
          componentName.replace(/\//,'-'),
          componentConfig.default || componentConfig
      )
    })
    // 批量注册公用组件
    // const components = require.context('./common', false, /\.vue$/)
    // components.keys().map(path => {
    //   const fileName = path.replace(/(.*\/)*([^.]+).*/ig, "$2"); // 获取组件文件名
    //   Vue.component(fileName, components(path).default || components(path))
    // })
  }
}

