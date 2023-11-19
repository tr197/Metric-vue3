import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";


export const useProductStore = defineStore('product', () => {

    const curentProduct = ref(null);

    async function setCurentProduct(pid) {
        const response = await axios.get(`/api/product/detail/${pid}/`);
        curentProduct.value = response.data.product;
    }

    return {curentProduct, setCurentProduct}
})