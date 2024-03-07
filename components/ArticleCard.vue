<template>
  <div>
    <template v-if="loading">
      <!-- Show loading... when data is loading -->
      <div class="group text-sm animate-pulse">
        <div class="flex items-center justify-center aspect-h-1 aspect-w-1 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <!-- <div class="flex items-center justify-center">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path
                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div> -->
        </div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </template>
    <template v-else>
      <!-- Show the content once data is fully loaded -->
      <div>
        <NuxtLink :to="'/' + slug" v-editable="article" class="group text-sm">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 border border-gray-200">
            <nuxt-img format="webp" preload :src="article.featured_image.filename + '/m/'" :alt="blok.featured_image.alt" width="300" height="300" class="h-full w-full object-cover object-center" />
          </div>
          <h3 class="mt-4 font-medium text-gray-900">{{ article.title }}</h3>
        </NuxtLink>
      </div>
    </template>

  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({ article: Object, slug: String, })


const articles = ref(null)
const loading = ref(true) // Add a loading variable and set it to true initially

const storyblokApi = useStoryblokApi()
storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'products',
  is_startpage: false,
  resolve_relations: ['article.category'],
}).then(({ data }) => {
  articles.value = data.stories
  loading.value = false // Set loading to false once data is loaded
}).catch(error => {
  // console.error(error)
  loading.value = false // Set loading to false in case of an error
})



</script>


