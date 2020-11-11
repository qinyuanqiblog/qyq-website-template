import Vue from 'vue'
import eleComponentsInstall from '~/components/eleComponentsInstall'
import myComponentsInstall from '~/components/myComponentsInstall'
import { requireJsonModules } from '~/utils'
// 注册全局组件
Vue.use(eleComponentsInstall)
Vue.use(myComponentsInstall)
// 注册全局api
export default (context, inject) => {
  const json = requireJsonModules(require.context('./api', true, /Api\.js$/))
  for (const name in json) {
    inject(name, json[name](context))
  }
  // console.log('执行 vue-global')
}

