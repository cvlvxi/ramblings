import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { range } from "./utils.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VuePrism from "vue-prism";
import VueZoomer from "vue-zoomer";
Vue.use(VueZoomer);
Vue.use(VuePrism);

import "prismjs/components/prism-python";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-nasm";
import "prismjs/components/prism-nim";
import "prismjs/components/prism-cmake";
import "prismjs/components/prism-makefile";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "./css/prism-atomdark.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.prototype.$range = range;
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
