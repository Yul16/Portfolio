<template>
    <div>
      <h1>Cahier des Charges</h1>
      <iframe
        src="/cahier-des-charges.pdf"
        width="100%"
        height="600px"
        style="border: none;"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CahierDesCharges',
  };
  </script>
  
  <style scoped>
  iframe {
    border: 1px solid #ddd;
  }
  </style>
  