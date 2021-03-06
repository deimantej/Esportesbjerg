import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    },
    {
      path: "/join",
      name: "join",
      // route level code-splitting
      // this generates a separate chunk (join.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "join" */ "./views/Join.vue")
    },
    { path: "*", component: PageNotFound }
  ]
});
