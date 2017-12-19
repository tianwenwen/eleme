// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import '@/common/less/index.less'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


function computedSize(){
  var w = window.innerWidth;
  document.getElementsByTagName('html')[0].style.fontSize = (w/750*100)+"px";
}
computedSize();
window.onresize = computedSize;
