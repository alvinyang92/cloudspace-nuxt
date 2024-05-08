<template>
   
    <div v-editable="blok">

      <!-- <div class="">{{ blok.title }}</div> -->
    </div>
</template>

<script setup>

const props = defineProps({ blok: Object, raw: Object })


//header SEO
const page_title = props.blok.title
const title = props.blok.desc
const seoimg =  props.blok.iamge
const link =  props.blok.link.cache_url
// const link = props.raw.full_slug





</script>