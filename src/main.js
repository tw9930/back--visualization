import Vue from 'vue'
import App from './App.vue'
import {Menu, Col,Row,Container,Aside,Main,Header,MenuItem,Submenu} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Col)
Vue.use(Row)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Menu)
new Vue({
  render: h => h(App),
}).$mount('#app')
