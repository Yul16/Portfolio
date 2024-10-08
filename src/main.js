import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importez le routeur

// Créer une instance de l'application et y ajouter le routeur
createApp(App)
  .use(router) // Utilisez Vue Router
  .mount("#app"); // Monte l'application sur l'élément #app
