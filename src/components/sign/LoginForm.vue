<script setup>
import {reactive} from 'vue';
import { useDisplayStore } from '@/stores/display.js';

const displayStore = useDisplayStore();

const form = reactive({
  username: null,
  password: null
})
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Tên đăng nhập</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="form.username"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Mật khẩu</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="form.password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Đăng nhập
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Bạn chưa có tài khoản?
        {{ ' ' }}
        <button
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          @click="displayStore.switchLoginSignup"
        >
          Đăng ký
        </button>
      </p>
    </div>
  </div>
</template>
