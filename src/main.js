import { createApp } from "vue";
import App from "./App.vue";
import VImageInput from "vue3-img-input";
import router from "@/router";

createApp(App)
  .component("v-image-input", VImageInput)
  .use(router)
  .mount("#app");
