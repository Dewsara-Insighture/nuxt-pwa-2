<template>
    <div class="container">
      <h1>Welcome to PWA App 2</h1>
      <p>This is the PWA App 2. So Go back to Groot PWA</p>
      <button @click="handlePWANavigateHome" class="button">Go to Groot PWA</button>
      <a href="https://groot-pwa-app-1.vercel.app" target="_blank" rel="noopener noreferrer" class="aTag">
        Go Back To PWA 1 A Tag
  </a>
    
    </div>
  </template>
  
  <script setup lang="ts">
//   function handlePWANavigateHome() {
//     window.location.href = 'https://groot-pwa-app-1.vercel.app';
//   }
function handlePWANavigateHome() {
    console.log('home Navigate');
  const protocolHandler = "web+grootpwa://navigate";
  const fallbackURL = "https://groot-pwa-app-1.vercel.app/";

  // Attempt to navigate using the protocol
  window.location.href = protocolHandler;

  // Set a fallback in case protocol navigation fails
  setTimeout(() => {
    console.log('home Navigate timeout');
    window.location.href = fallbackURL;
  }, 1000);
}
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
  }
  .button {
    margin-top: 20px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff5733;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .aTag {
      margin :0px 10px;
      background-color: #2ecc71;
      padding: 10px 20px;
      border-radius: 5px;
      color: white;
      text-decoration: none;
  }
  </style>
  