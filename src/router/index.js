import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../components/LandingPage";
import LandingPage2 from "../components/LandingPage2";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/dog",
    name: "LandingPage2",
    component: LandingPage2
  },

];

const router = new VueRouter({
  routes,
});

export default router;
