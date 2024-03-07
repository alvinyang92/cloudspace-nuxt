<template>
  <!-- <pre>{{ blok.faq[0].question }}</pre> -->
  <div v-editable="blok" class="mx-auto max-w-5xl">
    <span class="mt-3 inline-flex items-center rounded-full bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{{ blok.category.name }}</span>

    <div class="divide-y divide-gray-900/10">
      <StoryblokComponent v-for="blok in blok.faq" :key="blok._uid" :blok="blok" />
    </div>

  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const articlefaq = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'faq',
  is_startpage: false,
  resolve_relations: ["faq-page.category"],
})
articlefaq.value = data.stories

</script>
