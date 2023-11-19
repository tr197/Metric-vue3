<script setup>
import { useDisplayStore } from '@/stores/display.js'
const displayStore = useDisplayStore()
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">

        <p class="text-center">Form Đăng ký...</p>

      <p class="mt-10 text-center text-sm text-gray-500">
        Tôi đã có tài khoản?
        {{ ' ' }}
        <button
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          @click="displayStore.switchLoginSignup"
        >
          Đăng nhập
        </button>
      </p>
    </div>
  </div>
</template>
