import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import VueRouter from "vue-router";
import {Routes} from "@/configs/routes";


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes: any[] = Routes;

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

