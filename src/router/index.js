import { createRouter, createWebHistory } from "vue-router";
import AccueilPage from "../views/AccueilPage.vue";
// import ProjetsPage from "../views/ProjetsPage.vue";
import CV from "../views/CV.vue";
import CahierDesCharges from "../views/CahierDesCharges.vue";
import CommentairesSection from "../views/CommentairesSection.vue";
import NotFoundPage from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "AccueilPage",
    component: AccueilPage,
  },
  // { path: "/projets", name: "Projets", component: ProjetsPage },
  { path: "/cv", name: "CV", component: CV },
  {
    path: "/cahier-des-charges",
    name: "CahierDesCharges",
    component: CahierDesCharges,
  },
  {
    path: "/commentaires",
    name: "Dynamiser un espace commentaires",
    component: CommentairesSection,
  },
  {
    path: "/:pathMatch(.*)*", // Catch-all pour les routes non définies
    name: "NotFound",
    component: NotFoundPage, // Utilisation correcte du composant
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
