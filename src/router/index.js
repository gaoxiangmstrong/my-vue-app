import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/components/Login";
import HelloWorld from "@/components/HelloWorld";
import ProtectedView from "@/components/ProtectedView";

const routes = [
  {
    path: "/hello",
    name: "Hello",
    component: HelloWorld,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/protected",
    name: "ProtectedView",
    component: ProtectedView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // 简写语法，等同于 routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("access_token")) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;