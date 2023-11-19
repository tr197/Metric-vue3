<script setup>
import { computed } from 'vue';
import { useCategoryStore } from '@/stores/category.js';


const categoryStore = useCategoryStore();

const products = computed(() => {
  return categoryStore.productList;
})


// products = {
//     "id": "2cd74105-6b7a-4b09-97e1-7956b14271b1",
//     "name": "Dell XPS 5531",
//     "main_image_url": "http://localhost:8000/m/media/product/main/dell_xps_13_9315_trungtran_vn.png",
//     "other_image_urls": [
//         "http://localhost:8000/m/media/product/other/ellllelllld.jpeg"
//     ]
// }

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative border-b border-r border-gray-200 p-4 sm:p-6"
        >
          <div
            class="aspect-ratio aspect-[5/4] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75"
          >
            <img
              :src="product.main_image_url"
              :alt="product.name"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="pb-4 pt-10 text-center">
            <h3 class="text-sm font-medium text-gray-900">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p class="mt-4 text-sm font-medium text-gray-500">
              {{ product.price.toLocaleString('vi-VN') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
