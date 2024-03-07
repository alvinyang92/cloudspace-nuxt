<template>
  <!-- item -->
  <div v-editable="blok" class="relative ">
    <dt>
      <CheckIcon class="absolute mt-2 h-6 w-6 text-godoc-green" aria-hidden="true" />
      <!-- <p class="ml-10 text-lg font-semibold leading-8 text-gray-900">dwdw</p> -->
    </dt>
    <dd class="ml-8 mt-2 text-base leading-7 text-gray-600">{{ blok.desc }}</dd>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
import { CheckIcon } from '@heroicons/vue/24/outline'

</script>