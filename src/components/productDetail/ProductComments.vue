<script setup>
defineProps({
    comments: Array,    
})
</script>


<template>

    <div>
        <h3 class="text-2xl font-medium">Nhận xét của người mua hàng</h3>
    </div>

    <ul role="list" class="divide-y divide-gray-100">
      <li v-for="(comment, idx) in comments" :key="idx" class="flex gap-x-4 py-5">
        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" 
            src="https://w7.pngwing.com/pngs/215/58/png-transparent-computer-icons-google-account-scalable-graphics-computer-file-my-account-icon-rim-123rf-symbol-thumbnail.png" 
            alt="" />
        <div class="flex-auto">
          <div class="flex items-baseline justify-between gap-x-4">
            <p class="text-sm font-semibold leading-6 text-gray-900">{{ comment.username }}</p>
            <p class="flex-none text-xs text-gray-600">
              <time :datetime="comment.create_date">{{ comment.create_date }}</time>
            </p>
          </div>
          <p class="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">{{ comment.content }}</p>
        </div>
      </li>
    </ul>
  </template>
  
