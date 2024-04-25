<template>

     
        <slot />
        <Footer />

</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object, })
</script>