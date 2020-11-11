import { BootstrapVue, BootstrapVueIcons, VBHoverPlugin, VBToggle } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  install(Vue) {
    Vue.use(BootstrapVue)
    Vue.use(BootstrapVueIcons)
    Vue.use(VBHoverPlugin)
    Vue.use(VBToggle)
  }
}



