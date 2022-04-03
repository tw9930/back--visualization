import Vue from 'vue'
import App from './App.vue'
import {Col,Row,Container,Aside,Main,Header} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Col)
Vue.use(Row)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
new Vue({
  render: h => h(App),
}).$mount('#app')
