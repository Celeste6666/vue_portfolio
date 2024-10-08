import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PortfolioProjectCompany from "../views/PortfolioProjectCompany.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "#about"
      },
      {
        path: "#portfolio"
      },
      {
        path: "#contact"
      }
    ]
  },
  {
    path: "/project/:id",
    name: "Project",
    component: PortfolioProjectCompany
  }
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line consistent-return
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

export default router;
