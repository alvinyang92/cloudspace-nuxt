<template>
    <!-- <pre>{{ faqlist.category.name }}</pre> -->

    <!-- <p>{{faqlist}}</p> -->
    <div class="" v-editable="callist">
    <h3 class="font-bold">{{ callist.title }}</h3>
  </div>
    <div class="divide-y divide-gray-900/10">
      <StoryblokComponent v-for="blok in callist.cal_block" :key="blok._uid" :blok="blok" />
    </div>
  
</template>

<script setup>
const props = defineProps({ callist: Object, slug: String, })



</script>