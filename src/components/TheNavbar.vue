<template>
  <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
  <Popover as="template" v-slot="{ open }">
    <header
      :class="[
        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
        'bg-white shadow-sm lg:static lg:overflow-y-visible'
      ]"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
          <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div class="flex flex-shrink-0 items-center">
              <a href="#">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </a>
            </div>
          </div>
          <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div
              class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0"
            >
              <div class="w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-3 items-center sm:justify-end xl:col-span-4">
            <div class="flex">
              <div>
                <RouterLink to="/">Trang chủ</RouterLink>
                
              </div>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-5 flex-shrink-0">
                <div>
                  <button
                    class="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    @click="displayStore.switchOpenModalLogin()">
                    <span class="absolute -inset-1.5" />
                    <span>Đăng nhập</span>
                    <!-- <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" /> -->
                  </button>
                </div>

              </Menu>
            </div>

            <div>
              <button>
                <ShoppingCartIcon class="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>


    </header>
  </Popover>
</template>

<script setup>
import {
  Menu,
  Popover,
} from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'


import { useDisplayStore } from '@/stores/display.js'

const displayStore = useDisplayStore()

</script>
