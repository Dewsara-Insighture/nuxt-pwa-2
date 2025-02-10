<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIndexedDB } from '@/composable/useIndexedDB';

const { addItem, getItems } = useIndexedDB();

const newItem = ref('');
const items = ref<{ id: number; name: string }[]>([]);

const addNewItem = async () => {
  if (!newItem.value) return;
  await addItem({ name: newItem.value });
  newItem.value = '';
  loadItems();
};

const loadItems = async () => {
  items.value = await getItems() || [];
};

onMounted(loadItems);
</script>

<template>
  <div class="container">
    <h1 class="title">IndexedDB in Nuxt 3 Child App</h1>

    <div class="input-container">
      <input 
        v-model="newItem" 
        type="text" 
        placeholder="Enter item" 
        class="input-field"
      />
      <button @click="addNewItem" class="add-button">Add</button>
    </div>

    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  padding: 1.5rem; 
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937; 
  text-align: center;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem; 
}

.input-field {
  flex-grow: 1;
  padding: 0.5rem; 
  border: 1px solid #d1d5db; 
  border-radius: 6px;
}

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

.item-list {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
  list-style: none; 
  padding-left: 0; 
}

.item {
  padding: 0.5rem;
  font-size: 1rem;
  color: #374151;
}

.item:last-child {
  border-bottom: none;
}
</style>

