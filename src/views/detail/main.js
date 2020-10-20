import Vue from 'vue'
import App from './index.vue'
import { BootstrapVue, BootstrapVueIcons, VBHoverPlugin, VBToggle } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// 全局组件
import { websiteHeader, searchBox } from '@/components'
// todo 有空看下为啥不行 难受😣
// debugger
// const requireComponent = require.context('../../components', false, /\w+\.(vue|js)$/);
// alert(JSON.stringify(requireComponent))
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VBHoverPlugin)
Vue.use(VBToggle)

// 全局注册组件
Vue.component(
  'websiteHeader', websiteHeader
)
// 全局注册组件
Vue.component(
  'searchBox', searchBox
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
