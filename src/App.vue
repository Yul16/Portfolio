<template>
  <div id="app" class="main-container">
    <!-- Affichage des vues en fonction des routes -->
    <AppHeader />
    <div class="page-content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
html, body {
  font-family: "Raleway", Arial, Helvetica, sans-serif;
}

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  font-size: 100%;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
}

.scrollable-content {
  flex: 1;
  overflow-y: auto; 
  padding: 2rem;
}

.page-content {
  flex: 1; 
  padding: 2rem;
  overflow-x: hidden;
}

.content-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Styles de base pour la navigation */
nav {
  background-color: #293c63;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.nav-link {
  color: rgb(253, 252, 252);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555;
}

.router-link-active {
  background-color: #555;
  text-decoration: underline;
}

/* Styles globaux pour l'application */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Ajout de styles pour le footer */
footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
