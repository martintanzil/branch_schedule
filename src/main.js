import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BaseButton from "./components/BaseButton.vue";

Vue.use(BootstrapVue)
Vue.component('base-button', BaseButton)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app');


