<template>
  <!-- <pre>{{category}}</pre> -->
  <div>
    <h3 class="font-medium text-gray-900">All Products</h3>
    <div class="space-y-4 pb-6 pt-4 border-b border-gray-200">
      <NuxtLink @click="mobileFiltersOpen = false" to="/collections" class="text-sm text-gray-600 ">All
      </NuxtLink>
    </div>
  </div>
</template>
   
<script setup>
defineProps(
  {
    category: Object,
    raw: Object,
    slug: String,

  }
)
const category = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'collections',
  // excluding_slugs: '/collections/*'
  // excluding_ids:'348545387',
  // ['filter_query[categories][all_in_array]']: '70dd570b-d6f7-4117-a23a-bc13a777d54d',
})
category.value = data.stories
</script>

<style scoped>
.router-link-active {
  @apply text-[#4848ee] font-semibold;
}
</style>

