<template>
  <!-- <pre>{{category}}</pre> -->
  <div>
    <h3 class="font-medium text-gray-900">Bakeware</h3>
    <ul role="list" class="space-y-4 pb-6 pt-4 border-b border-gray-200">
      <li v-for="cat in category" :key="cat.id">
        <NuxtLink @click="handleClick(cat)" :to="`/${cat.full_slug}`" class="text-sm text-gray-600 ">
          {{ cat.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
   
<script setup>
// import { defineProps, defineEmits } from 'vue'
// import { ref } from 'vue'
defineProps(
  {
    category: Object,
    raw: Object,
    slug: String,

  }
)

const handleClick = (cat) => {
  emit('closeFilters'); // Emit the event to the parent component
  $router.push(`/${cat.full_slug}`);
};



// const mobileFiltersOpen = ref(false)

const category = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  // is_startpage: 0,
  // level:2,
  // is_folder: true,
  // starts_with: '',
  starts_with: 'collections/bakeware',
  // excluding_slugs: 'home,collection-config,products/*,collections/bakeware/*,collections/food-beverages/*,settings/*',
  // excluding_ids:'348133821',
  // ['filter_query[categories][all_in_array]']: '70dd570b-d6f7-4117-a23a-bc13a777d54d',
})
category.value = data.stories
</script>

<style scoped>
.router-link-active {
  @apply text-[#4848ee] font-semibold;
}
</style>

