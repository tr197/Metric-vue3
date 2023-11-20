<script setup>
import { onBeforeMount, computed, onUnmounted, watch } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/vue'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import ProductOptions from '@/components/productDetail/ProductOptions.vue';
import ProductComments from '@/components/productDetail/ProductComments.vue';
import ProductViewed from '@/components/productDetail/ProductViewed.vue';
import ModalEmail from '@/components/productDetail/modals/ModalEmail.vue';


import { useProductStore } from '@/stores/product.js'
import { useDisplayStore } from '@/stores/display.js'
import { useRoute, useRouter } from 'vue-router'
import { formatPrice } from '@/composables/fomatting.js'


const route = useRoute()

const router = useRouter();

const displayStore = useDisplayStore()
const productStore = useProductStore()

const product = computed(() => {
  return productStore.curentProduct
})


watch(() => router.currentRoute.value.params.pid, (newId, oldID) => {
  productStore.setCurentProduct(newId);
});

onBeforeMount(async () => {
  await productStore.setCurentProduct(route.params.pid);
})


onUnmounted(() => {
  productStore.addToListViewed(product.value);
})

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8" v-if="product">
      <div class="lg:grid lg:grid-cols-9 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="lg:col-span-4 flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <TabList class="grid grid-cols-4 gap-6">
            <Tab v-for="(image, idx) in product.image_urls" key="idx"
              class="relative flex h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              v-slot="{ selected }">
              <span class="sr-only">{{ image }}</span>
              <span class="absolute inset-0 overflow-hidden rounded-md">
                <img :src="image" alt="" class="h-full w-full object-cover object-center" />
              </span>
              <span :class="[
                selected ? 'ring-indigo-500' : 'ring-transparent',
                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
              ]" aria-hidden="true" />
            </Tab>
          </TabList>
        </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="image in product.image_urls" :key="image">
              <img :src="image" :alt="image" class="h-[20rem] w-auto object-cover object-center sm:rounded-lg" />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="lg:col-span-5 mt-10 px-5 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">
              {{ formatPrice(product.price) }}
            </p>
          </div>

          <!-- Reviews -->
          <!-- <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
              </div>
            </div> -->



          <div class="mt-10 flex">
            <button
              class="flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
              @click="displayStore.switchOpenModalEmail">
              Nhận thông báo giảm giá
            </button>
          </div>

          <div class="mt-12">
            <!-- choice options -->
            <ProductOptions v-if="product.options.length > 0" :options="product.options"></ProductOptions>
          </div>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                <h3>
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                    <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name }}
                      abcc</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true" />
                      <MinusIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                        aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                  <ul role="list">
                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>

      <!-- descriptións  -->
      <section class="mt-16 max-w-4xl"
        v-if="product.description">
        <h3 class="pb-4 text-2xl font-medium">Mô tả sản phẩm</h3>

        <div class="space-y-6 text-base text-gray-700">
          <pre>{{ product.description }}</pre>
        </div>
      </section>

      <!-- comments  -->
      <section class="mt-16 max-w-4xl"
        v-if="product.comments.length > 0">
        <ProductComments :comments="product.comments"></ProductComments>
      </section>

      <section class="mt-12">
        <ProductViewed></ProductViewed>
      </section>
      
    </div>
  </div>

  <ModalEmail></ModalEmail>
</template>
