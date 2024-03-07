<template>
  <!-- <pre>{{ main_faq[0].content.faq[0].question }}</pre> -->
  <div class="flex gap-x-3 items-start  hover:bg-gray-100 p-3 w-full">
    <!-- seaerch icon -->
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-400 w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </div>
    <!-- title -->
    {{ main_faq[0].content.faq[0].question }}
  </div>
</template>

<script setup>
const props = defineProps({ faqresult: Object, slug: String, raw: Object })

const main_faq = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'faq',
  is_startpage: false,
  resolve_relations: ["article-page.category"],
})
main_faq.value = data.stories

</script>
