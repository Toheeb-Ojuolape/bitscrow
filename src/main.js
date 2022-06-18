import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.config.productionTip = false


const options = {
  confirmButtonColor: '#2d860f',
  cancelButtonColor: '#000000',
};

Vue.use(VueSweetalert2,options)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
