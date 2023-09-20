import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EducationView from "../views/EducationView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import PersonalView from "../views/PersonalView.vue";

// remember to import components as in the sample above
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/experience",
    name: "experience",
    component: ExperienceView,
  },
  {
    path: "/education",
    name: "education",
    component: EducationView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/personal",
    name: "personal",
    component: PersonalView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
