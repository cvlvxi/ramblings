import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../components/LandingPage";
import Algo from "../components/algo/Algo";
import CPP from "../components/cpp/CPP";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/algo",
    name: "Algo",
    component: Algo,
  },
  {
    path: "/cpp",
    name: "C++",
    component: CPP,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
