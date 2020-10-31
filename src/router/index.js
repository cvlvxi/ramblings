import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../components/LandingPage";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
