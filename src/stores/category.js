import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";


export const useCategoryStore = defineStore('category', () => {
  
  const categories = ref([]);

  async function init() {
    if (categories.value.length === 0) {
      const response = await axios.get('/api/product/categories');
      console.log(response);
      categories.value = response.data.categories;
    }
  }

  return { categories, init }
})
