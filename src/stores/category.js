import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";


export const useCategoryStore = defineStore('category', () => {
  
  const categories = ref([]);

  const curentCategoryIdx = ref(0);
  const curentCategorySubIdx = ref(-1);

  const productList = computed(() => {
    if (curentCategorySubIdx.value < 0) {
      console.log('1')
      return categories.value[curentCategoryIdx.value]?.products
    }
    else {
      console.log('2')
      console.log(curentCategoryIdx.value)
      return categories.value[curentCategoryIdx.value].children[curentCategorySubIdx.value]?.products
    }
  })


  async function init() {
    if (categories.value.length === 0) {
      const response = await axios.get('/api/product/categories');
      categories.value = response.data.categories;
    }
  }

  async function callGetListProduct(categoryId) {
    try {
      const response = await axios.get(`/api/product/list-product/${categoryId}/`)
      console.log(response)
      return response.data.products
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async function getProductStore(index, subIndex) {
    if (subIndex < 0 ) {
      if (categories.value[index]?.products 
          && categories.value[index].products.length > 0) {
            curentCategoryIdx.value = index;
            curentCategorySubIdx.value = subIndex;
            return
      }
      const categoryId = categories.value[index].id
      categories.value[index].products = await callGetListProduct(categoryId)
    }
    else {
      if (categories.value[index].children[subIndex]?.products
          && categories.value[index].children[subIndex].products.length > 0) {
            curentCategoryIdx.value = index;
            curentCategorySubIdx.value = subIndex;
            return
          }
      const categoryId = categories.value[index].children[subIndex].id
      categories.value[index].children[subIndex].products = await callGetListProduct(categoryId)
    }

    curentCategoryIdx.value = index;
    curentCategorySubIdx.value = subIndex;
  }

  return { categories, init, getProductStore, productList, curentCategoryIdx, curentCategorySubIdx }
})



// "categories": [
//     {
//         "id": "75cfabbd-5c4a-4e9e-8051-f85226355f81",
//         "name": "Laptop",
//         "children": [
//             {
//                 "id": "5122a234-2127-4568-a976-09d6b92c0d09",
//                 "name": "Laptop Gamming"
//             },
//             {
//                 "id": "3289b7d0-1e90-4f6b-be8a-eb9cef7f3ba9",
//                 "name": "Laptop văn phòng"
//             },
//             {
//                 "id": "d9c31cfc-64a7-4d99-97bb-99991f68542a",
//                 "name": "Laptop doanh nhân"
//             }
//         ]
//     },
//     {
//         "id": "e94a362c-0e37-437c-b853-bb09e7ba8633",
//         "name": "Linh kiện build PC",
//         "children": [
//             {
//                 "id": "d87a609a-a8a3-4a18-a778-b5877f8bcbf0",
//                 "name": "CPU"
//             },
//             {
//                 "id": "c7ae14a5-801a-4575-b73f-32a103c2b3cd",
//                 "name": "Ram"
//             }
//         ]
//     },
//     {
//         "id": "f0c449df-a92a-41e0-8a34-4367fbe917cb",
//         "name": "Phụ kiện",
//         "children": []
//     }
// ]
