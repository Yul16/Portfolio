<template>
    <div class="not-found">
      <img src="@/assets/images/404-image.png" alt="Page not found" class="not-found-image" />
      <h1>404</h1>
      <p>Oups ! La page que vous cherchez n'existe pas.</p>
      <router-link to="/" class="home-link">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage',
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
  }
  
  .not-found-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 6rem;
    margin: 0;
  }
  
  p {
    font-size: 1.5rem;
  }
  
  .home-link {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .home-link:hover {
    background-color: #555;
  }
  </style>
  