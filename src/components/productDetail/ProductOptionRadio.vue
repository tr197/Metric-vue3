<script setup>
import { ref, watch } from 'vue'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption
} from '@headlessui/vue'

import { formatPrice } from '@/composables/fomatting.js'
import { useProductStore } from '@/stores/product.js'


const productStore = useProductStore()


defineProps({
  options: Array,
})

const selected = ref(null)

watch(selected, (newSelected) => {
  productStore.curentProductOption = newSelected;
})

</script>

<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
    <div class="space-y-4">
      <RadioGroupOption
        as="template"
        v-for="(option, idx) in options"
        :key="option.name"
        :value="option"
        v-slot="{ active, checked }"
      >
        <div
          :class="[
            active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
            'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
          ]"
        >
          <span class="flex items-center">
            <span class="flex flex-col text-sm">
              <RadioGroupLabel as="span" class="font-medium text-gray-900">{{
                `Option ${idx + 1}`
              }}</RadioGroupLabel>
              <RadioGroupDescription as="span" class="text-gray-500">
                {{ option.description }}
              </RadioGroupDescription>
            </span>
          </span>
          <RadioGroupDescription
            as="span"
            class="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
          >
            <span class="font-medium text-gray-900">
              {{ formatPrice(option.price) }}
            </span>
          </RadioGroupDescription>
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-indigo-600' : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg'
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
