import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from "@/router"
//import style from '@style/base/less'
import '@/styles/base.less'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
