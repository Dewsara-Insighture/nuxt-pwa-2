<template>
    <div class="container">
      <h1 class="title">Profile Page</h1>
      <button @click="consoleThis" class="add-button">Add</button>
    </div>
  </template>

<script setup lang="ts">
    const consoleThis = () => {
        console.log('Profile page button click')
    }
</script>

<style scoped>

.add-button {
  background-color: #3b82f6; 
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: medium;
  transition: background-color 0.2s ease-in-out;
}

.add-button:hover {
  background-color: #2563eb; 
}

</style>

  