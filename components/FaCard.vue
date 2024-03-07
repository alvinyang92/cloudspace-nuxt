<template>
    <!-- <pre>{{ faqlist.category.name }}</pre> -->

    <!-- <p>{{faqlist}}</p> -->
    <div class="" v-editable="faqlist">
    <h3 class="font-bold">{{ faqlist.category.name }}</h3>
  </div>
    <div class="divide-y divide-gray-900/10">
        <StoryblokComponent v-for="blok in faqlist.faq" :key="blok._uid" :blok="blok" />
    </div>
  
</template>

<script setup>
const props = defineProps({ faqlist: Object, slug: String, })

//   const main_faq = ref(null)
//   const storyblokApi = useStoryblokApi()
//   const { data } = await storyblokApi.get('cdn/stories', {
//   	version: 'published',
//   	starts_with: 'faq',
//   	is_startpage: false,
//   	resolve_relations: ["faq-page.category"],
//   })
//   main_faq.value = data.stories


</script>