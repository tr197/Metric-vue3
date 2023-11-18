<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

import { useCategoryStore } from '@/stores/category.js';
import { ref, onBeforeMount } from 'vue';

const navigation = ref( [])

// current

onBeforeMount(async() => {
  const categoryStore = useCategoryStore();
  await categoryStore.init();
  navigation.value = categoryStore.categories;
})

</script>


<template>
    <div class="py-5 flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <a v-if="!item.children" :href="item.href" :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700']">
                  {{ item.name }}
                </a>
                <Disclosure as="div" v-else v-slot="{ open }">
                  <DisclosureButton :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700']">
                    {{ item.name }}
                    <ChevronRightIcon :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel as="ul" class="mt-1 px-2">
                    <li v-for="subItem in item.children" :key="subItem.name">
                      <!-- 44px -->
                      <DisclosureButton as="a" :href="subItem.href" :class="[subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-4 text-sm leading-6 text-gray-700']">{{ subItem.name }}</DisclosureButton>
                    </li>
                  </DisclosurePanel>
                </Disclosure>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
