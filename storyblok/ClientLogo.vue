<template>
    <div v-editable="blok"  :class="solidBorder" >
        <nuxt-img v-editable="blok" v-if="blok.image?.filename" class="col-span-2 max-h-24 w-full object-contain lg:col-span-1" :src="blok.image.filename + '/m/'" alt="" width="158" height="48" />
        <div v-if="blok.desc || blok.title " class="mt-5 text-center">
            <!-- title -->
            <h3 class="font-semibold  text-gray-900 group-hover:text-gray-600">{{ blok.title }}</h3>
            <!-- desc -->
            <p v-if="blok.desc" class="mt-1 text-gray-600">{{ blok.desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const solidBorder = computed(() => {
  return props.blok.solid_border === 'solidbox' ? 'bg-white py-5 px-5 rounded-2xl shadow-lg ring-1 ring-gray-900/5'
    // : props.blok.solid_border === 'hide' ? 'hidden'
      : ''
})


</script>