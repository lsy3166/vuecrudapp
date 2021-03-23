import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../views/Tasks.vue";
import New from "../views/New.vue";
import Show from "../views/Show.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/tasks"
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Tasks
  },
  {
    path: "/tasks/new",
    name: "new-task",
    component: New
  },
  {
    path: "/tasks/:id",
    name: "show",
    component: Show
  },
  {
    path: "/tasks/:id/edit",
    name: "edit",
    component: Edit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes
});

export default router;
