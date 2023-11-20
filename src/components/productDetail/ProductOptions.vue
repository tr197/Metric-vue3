<template>
  <div>
    <ul role="list" class="divide-y divide-gray-100">
      <li
        v-for="(option, idx) in options"
        :key="idx"
        class="flex item-center justify-between gap-x-6 py-5"
      >
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-14 aspect-ratio aspect-[5/4] flex-none rounded-md bg-gray-50"
            :src="option.platform.logo"
            alt=""
          />
          <div class="min-w-0 flex-auto my-auto">
            <p class="text-sm font-medium leading-6 text-gray-900">
              {{ option.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              <span class="font-medium text-gray-700">
                {{ option.sale_count }}
              </span>
              &nbsp;lượt mua
            </p>
          </div>
        </div>
        <div class="flex item-center gap-2">
          
          <div class="pt-2 text-sm">
            {{ formatPrice(option.price) }}
            <span class="text-gray-400">đ</span>
          </div>
        
          <button
            class="rounded-xl h-10 w-20 sm:w-28 bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            @click="goToShopping(option)">
            Đi tới nơi bán
          </button>
        </div>
      </li>
    </ul>
    <!-- <button class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
      Xem thêm
    </button> -->
  </div>

<ModalRedirecting v-show="isRedirecting"></ModalRedirecting>

</template>

<script setup>
import ModalRedirecting from '@/components/productDetail/modals/ModalRedirecting.vue';
import { ref } from 'vue';
import { formatPrice } from '@/composables/fomatting.js'


defineProps({
  options: Array
})

const isRedirecting = ref(false);

function goToShopping(option) {
  isRedirecting.value = true;
  setTimeout(()=> {
    window.open(option.link)
    isRedirecting.value = false;
  }, 1500)
}
</script>
