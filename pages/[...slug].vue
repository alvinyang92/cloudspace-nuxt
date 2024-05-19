<template>
<SpeedInsights/>
  <StoryblokComponent v-if="story" :blok="story.content" :raw="story" />
</template>

<script setup>
// import { SpeedInsights } from "@vercel/speed-insights/nuxt"
let { slug } = useRoute().params

const resolveRelations = ['article-page.category', 'article-page.article_post', 'practice-area-page.article_post', 'calculator-page.category', 'statute-page.category', 'practice-area-page.category','faq-page.category']

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
      resolve_relations: resolveRelations,
      // resolve_links: 'url'
  },
  { resolveRelations, },
)

// const props = defineProps({ blok: Object, raw: Object, })

</script>
