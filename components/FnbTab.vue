<template>
  <!-- <pre>{{category}}</pre> -->
  <div>
    <h3 class="font-medium text-gray-900">Food & Beverages</h3>
    <ul role="list" class="space-y-4 pb-6 pt-4 border-b border-gray-200">
      <li v-for="cat in category" :key="cat.id">
        <NuxtLink @click="mobileFiltersOpen = false" :to="`/${cat.full_slug}`" class="text-sm text-gray-600 ">
          {{ cat.name }}
        </NuxtLink>
      </li>
    </ul>
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
  starts_with: 'collections/food-beverages',
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

