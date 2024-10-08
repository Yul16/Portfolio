<template>
    <footer class="bg-gray-800 text-white py-4 mt-8">
      <div class="container mx-auto text-center">
        <p>Suivez-moi sur :</p>
        <div class="flex justify-center space-x-2 my-1">
          <a href="https://github.com/Yul16" target="_blank" class="hover:underline"><img src="../assets/images/github.svg" alt="github"></a>
          <a href="https://www.linkedin.com/in/yul16" target="_blank" class="hover:underline"><img src="../assets/images/linkedin.png" alt="Linkedin"></a>
        </div>
        <p class="text-sm mt-4">Dernière mise à jour : {{ lastUpdated }}</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter', // Nom du composant mis à jour
    data() {
      return {
        lastUpdated: new Date().toLocaleDateString(),
      };
    },
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #293c63;
    color: #ffffff;
    height: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-content {
  display: flex;
  align-items: center; 
  gap: 5px; 
  }

  .footer-icon {
    width: 24px; /* Ajuste la taille des icônes */
    height: 24px;
  }

  a {
    color: #4fd1c5;
  }
  
  a:hover {
    color: #63b3ed;
  }

  .container p {
    margin: 0;
  }
  </style>
  