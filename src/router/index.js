import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/BaseExampleView.vue"),
  },
  {
    path: "/slots",
    name: "slots",
    component: () => import("@/views/SlotExampleView.vue"),
  },
  {
    path: "/customize",
    name: "customize",
    component: () => import("@/views/CustomizeExampleView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
