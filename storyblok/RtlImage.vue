<template>
    <nuxt-img 
    v-editable="blok"
    v-if="blok.image?.filename" 
    class="object-cover" 
    :src="blok.image.filename + '/m/'"  
    alt="" 
    width="600" 
    height="400" />
</template>

<script setup>
const props = defineProps({ blok: Object })

</script>