import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/home/Home.vue'
import ManterGaleria from './components/galeria/ManterGaleria.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import GaleriaService from './service/GaleriaService';
import {ConfigClass} from './classes/ConfigClass';

let server = `${ConfigClass.getUrlApi().toString()}`;

Vue.prototype.$galeriaService = GaleriaService;
Vue.prototype.$server = server;

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Galeria',
    path: '/galeria',
    component: ManterGaleria
  },
  {
    name: 'Home',
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
