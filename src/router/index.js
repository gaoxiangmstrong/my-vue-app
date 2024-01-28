import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/components/Login";
import HelloWorld from "@/components/HelloWorld";
import ProtectedView from "@/components/ProtectedView";
import ReadingChatbot from '@/components/ReadingChatbot/ReadingChatbot.vue';
import ArticleContent from '@/components/AllArticles/ArticleContent.vue'

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
  {
    path: "/reading-chatbot",
    name: "ReadingChatbot",
    component: ReadingChatbot,
    meta: { requiresAuth: true },
  },
  {
    path: "/user/readings",
    name: "userReadings",
    component: ArticleContent
    // 暂时不需要鉴权
  }
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