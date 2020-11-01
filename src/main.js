import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
//全局样式
import './style/index.less'



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
