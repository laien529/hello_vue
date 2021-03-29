import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router';
// import { Date } from 'core-js';
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  data: {
    date:new Date()
  },
  mounted: function () {
    // alert("mounted")
    // this.timer = setInterval(function () {
    //   this.date = new Date;
    // }, 1000 
    // )
  },
  beforeDestroy:function() {
    alert("before destory")
  }
}).$mount('#app')
