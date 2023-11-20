<template>
  <div class="bg-white">
    <div class="py-16  sm:py-24 ">
      <div class="md:flex md:items-center md:justify-between">
        <h2 class="text-2xl font-medium tracking-tight text-gray-900">
          Sản phẩm vừa xem
        </h2>

      </div>

      <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
        v-if="products.length > 0">
        <div 
          v-for="product in products" :key="product.id"
          class="group relative">

          <RouterLink :to="{ name: 'product-detail', params: { pid: product.id } }">
          <div class="aspect-ratio aspect-[5/4] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <!-- --------- {{ product.id }} -->
            <img :src="product.image_urls[0]" alt="sản phẩm" 
              class="h-full w-full object-cover object-center" />
          </div>


          <h3 class="mt-4 text-sm text-gray-700">
            
              <span class="absolute inset-0" />
              {{ product.name }}
            
          </h3>
        </RouterLink>
        </div>
      </div>

      <div class="mt-8 text-sm md:hidden">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// const products = [
//   {
//     id: 1,
//     name: 'Leather Long Wallet',
//     color: 'Natural',
//     price: '$75',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
//     imageAlt: 'Hand stitched, orange leather long wallet.',
//   },
//   // More products...
// ]

import { computed } from 'vue';

import { useProductStore } from '@/stores/product.js'
import { RouterLink } from 'vue-router';
const productStore = useProductStore()

const products = computed(() => {
  return productStore.listViewed;
})

</script>