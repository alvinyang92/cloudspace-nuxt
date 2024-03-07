<template>
  <!-- <pre>{{ raw }}</pre> -->
  <div class="flex flex-col gap-y-1 mt-4">
    <div v-for="cat in category" :key="cat.id">
      <button v-if="cat.name" class="text-sm font-medium text-gray-500">
        {{ cat.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({ blok: Object, raw: Object });

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
  starts_with: 'post-category',
  is_startpage: false,
  resolve_relations: ["article-page.category"],

})
category.value = data.stories


</script>