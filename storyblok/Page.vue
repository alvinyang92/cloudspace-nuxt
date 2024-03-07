<template>
  <!-- <pre>{{ blok}}</pre> -->
  <div v-editable="blok">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object })

//header SEO
const page_title = props.blok.page_title
const title = props.blok.meta_title
const desc = props.blok.meta_desc
// const seoimg = props.blok.body[0]?.image?.filename || 'https://a.storyblok.com/f/266925/1200x630/33442a842d/og.jpg/m/';
const link = props.raw.full_slug

useHead({
  title: `${page_title}`,
  meta: [
  { property: 'twitter:title', content: `${title}` },
        { property: 'og:title', content: `${title}` },
    { name: 'description', content: desc },
    { name: 'twitter:description', content: desc },
    // { property: 'twitter:image', content: seoimg },
    // { property: 'og:image:secure_url', content: seoimg },
    // { property: 'og:image', content: seoimg },
    // { property: 'og:image:type', content: 'image/jpg', },
    { property: 'og:description', content: desc },
  ],
  link: [
    { rel: 'canonical', href: `https://www.etech.net.my/${link}` },
  ],
})
</script>
