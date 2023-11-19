<template>
  <div class="flex min-h-full flex-col">


    <!-- 3 column wrapper -->
    <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 xl:flex">
        <div class="bg-blue-300 border-b border-gray-200 px-4 py-4 sm:px-6 lg:pl-8 xl:w-72 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
          <!-- Left column area -->
          <ProductSidebar></ProductSidebar>
        </div>

        <div class="bg-blue-500 px-4 py-4 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
          <!-- Main area -->
          <ProductCardList></ProductCardList>
        </div>
      </div>

      <!-- Right column area -->
      <!-- <div class="bg-blue-200 shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-64 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6"> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductSidebar from '@/components/productList/ProductSidebar.vue'
import ProductCardList from '@/components/productList/ProductCardList.vue'


const productSidebar = ref(null);
const productCardList = ref(null);

onMounted(() => {
  if (productSidebar.value && productCardList.value) {
    // Nếu cả hai component con đã được khởi tạo, sử dụng nextTick để thực hiện hành động
    productSidebar.value.$nextTick(() => {
      productCardList.value.$nextTick(() => {
        console.log('Các component con đã được khởi tạo hoàn toàn');
      });
    });
  }
});

</script>