<template>
  <div v-editable="blok" class="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
    <!-- title -->
    <div class="mx-auto mt-16 max-w-2xl lg:text-center">
      <h2 class="text-lg font-semibold leading-7 ">{{ blok.label_title }}</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ blok.title }}</p>
      <p class="mt-6 text-sm leading-6 text-gray-600">{{ blok.desc }}</p>
    </div>
    <!-- grid -->
    <div class="mx-auto mt-16 max-w-2xl lg:max-w-none">
      <dl :class="gridClasses" class="grid max-w-xl grid-cols-1 gap-x-8  gap-y-8 lg:gap-y-16 lg:max-w-none ">
        <!-- grid card -->
        <StoryblokComponent v-for="blok in blok.grid_card_tick_detail" :key="blok._uid" :blok="blok" />

      </dl>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'
const props = defineProps({ blok: Object })

const gridClasses = computed(() => {
  return props.blok.grid === '3' ? 'lg:grid-cols-3'
    : props.blok.grid === '4' ? 'lg:grid-cols-4'
      : props.blok.grid === '5' ? 'lg:grid-cols-5'
        : ''
})


</script>