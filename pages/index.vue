<template>
    <div class="container">
      <h1>Welcome to Nuxt PWA App 2</h1>
      <p>This is the Nuxt PWA App 2. So Go back to main PWA</p>
      <button @click="handlePWANavigateHome" class="button">Go Back To PWA 1</button>
      <a href="#" target="_blank" rel="noopener noreferrer" class="aTag">
        Go Back To PWA 1 A Tag
  </a>
    
    </div>
  </template>
  
  <script setup lang="ts">
  function handlePWANavigateHome() {
    window.location.href = '#';
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
  