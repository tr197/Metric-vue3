import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";


export const useProductStore = defineStore('product', () => {

    const curentProduct = ref(null);
    const listViewed = ref([]);



    async function setCurentProduct(pid) {
        const response = await axios.get(`/api/product/detail/${pid}/`);
        curentProduct.value = response.data.product;
    }

    function addToListViewed(newProduct) {
        let elementExists = listViewed.value.some(obj => obj.id === newProduct.id);
        if (!elementExists) {
            listViewed.value.unshift(newProduct);
        }
    }

    return {curentProduct, setCurentProduct, listViewed, addToListViewed}
})