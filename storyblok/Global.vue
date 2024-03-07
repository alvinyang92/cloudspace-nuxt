<template>
  <div v-editable="blok">

    <StoryblokComponent v-for="blok in blok.global_component" :key="blok._uid" :blok="blok" />

  </div>
</template>

<script setup>
defineProps({ blok: Object })

//  const global = ref(null)
//  const storyblokApi = useStoryblokApi()
//  const { data } = await storyblokApi.get('cdn/stories', {
//    version: 'published',
//    starts_with: 'global',
//    is_startpage: false,
//    resolve_relations:["global-reference.reference"]

//  })
//  global.value = data.stories
</script>
