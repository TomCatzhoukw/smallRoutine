import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "homePage",
    },
    {
      path: '/homePage',
      name: 'HomePage',
	  component: () => import("../src/homePage.vue"),
      component: Login
    }
});