import Vue from 'vue'
import bootstrapVueComponentsInstall from '~/components/bootstrapVueComponentsInstall'
import myComponentsInstall from '~/components/myComponentsInstall'
import { requireJsonModules } from '~/utils'
// 注册全局组件
Vue.use(bootstrapVueComponentsInstall)
Vue.use(myComponentsInstall)
// 注册全局api
export default (context, inject) => {
  const json = requireJsonModules(require.context('./api', true, /Api\.js$/))
  for (const name in json) {
    inject(name, json[name](context))
  }
  // console.log('执行 vue-global')
}

