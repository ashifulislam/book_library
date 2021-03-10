import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import App from './App.vue';
import Book from './Book.vue';
import Admin_Login from "./components/Admin_Login";
import User_Login from "./components/User_Login";
import Author_Login from "./components/Author_Login";
import User_Registration from "./components/User_Registration";

import User from "./components/User";

import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', swal.stopTimer)
    toast.addEventListener('mouseleave', swal.resumeTimer)
  }
})
window.toast = toast;


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/app', component: App },
    { path: '/book', component: Book },
    { path: '/user', component: User },
    { path: '/admin_login', component: Admin_Login },
    { path: '/author_login', component: Author_Login },
    { path: '/user_registration', component: User_Registration },
    { path: '/user_login', component: User_Login },
    { path: '/show_favourite_book', component: ShowFavouriteBook },


  ]
});


import Home from './Home.vue'
import ShowFavouriteBook from "./components/ShowFavouriteBook";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app')
