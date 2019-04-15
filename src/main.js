/**
 * Created by Administrator on 2019/3/8.
 */
import Vue from 'vue'
import 'lib-flexible/flexible'
import VueLazyload from 'vue-lazyload'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


import App from './App.vue'
import router from './router'
import './mock/mockServer'  // mockServer.js会被打包执行一次
import store from './state/index'
import Partition from './components/Partition/Partition.vue'
import profileCarHeader from './components/profileCarHeader/profileCarHeader.vue'
import Header from './components/commonHeader/commonHeader.vue'
import loading from './comments/img/timg (1).gif'
import error from './comments/img/timg.gif'
import CatagoryModules from './components/catagoryModule/catagoryModule.vue'

// Vue.use(ElementUI);
import { Button, Select, Row } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.use(VueLazyload, {
  loading,
  error
})

//注册全局组件
Vue.component('Partition', Partition)
Vue.component('Header', Header)
Vue.component('profileCarHeader', profileCarHeader)
Vue.component('CatagoryModules', CatagoryModules)




new Vue ({
  el: '#app',
  components: {
    App
  },
  template:'<App/>',
  router,
  store
})
