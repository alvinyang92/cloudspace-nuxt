<template>
  <div v-editable="blok" class="rounded-2xl bg-gray-50 p-10">
    <h3 class="text-base font-semibold leading-7 text-gray-900">{{ blok.title }}</h3>
    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
      <div class="mt-1">
        <dt class="sr-only">{{ blok.title }}</dt>
        <dd class="font-bold">{{ blok.contact_info }}</dd>
      </div>
      <div>
        <NuxtLink :to="blok.contact_link.cached_url" class="font-semibold text-godoc-green white">
          {{ blok.contact_title }}
        </NuxtLink>

      </div>

    </dl>
  </div>
</template>

<script setup>
defineProps({ blok: Object });

// const articles = ref(null)
// const storyblokApi = useStoryblokApi()
// const { data } = await storyblokApi.get('cdn/stories', {
//   version: 'published',
//   is_startpage: false,
//   resolve_links: "link",
// })
// articles.value = data.stories

</script>
