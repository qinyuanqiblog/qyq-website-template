import Vue from 'vue'
import App from './index.vue'
import { BootstrapVue, BootstrapVueIcons, VBHoverPlugin, VBToggle } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { getQuery } from '@/utils'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VBHoverPlugin)
Vue.use(VBToggle)


// 自动注册全局注册组件
// @copyFrom: https://www.jianshu.com/p/cb09318c5de0
const requireComponent = require.context('../../components/layout', false, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const componentName = fileName.replace(/^\.\//,'').replace(/\.vue$/,'');
  // 全局注册组件
  Vue.component(
      componentName.replace(/\//,'-'),
      componentConfig.default || componentConfig
  )
})

Vue.prototype.$getQuery = getQuery

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
