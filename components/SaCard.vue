<template>
  <article v-editable="statutecard" class="flex flex-col items-start justify-between">
    <nuxt-link v-if="statutecard.pdf?.filename" class="w-full" :to="statutecard.pdf.filename" target=”_blank” >
      <!-- content -->
      <div class="max-w-xl">
        <!-- date & badge -->
        <div class="text-xs">
          <!-- badge categeory -->
          <span v-for="item in statutecard.category" class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
            {{ item.name }}
          </span>
        </div>
        <!-- title & desc -->
        <div class="group relative">
          <!-- title -->
          <h3 class="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {{ statutecard.title }}
          </h3>
           <!-- desc -->
           <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{{ statutecard.desc }}</p>
        </div>
        <!-- download more cta -->
        <div class="relative mt-3 flex items-center gap-x-4 ">
          <div class="flex items-center justify-center gap-1 border-b pb-1">
            <div class="text-sm ">Download Now</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </div>

      </div>
    </nuxt-link>
  </article>
</template>

<script setup>
import moment from 'moment';
const props = defineProps({ statutecard: Object, slug: String, raw: Object })

 const article_post = ref(null)
 const storyblokApi = useStoryblokApi()
 const { data } = await storyblokApi.get('cdn/stories', {
   version: 'published',
   starts_with: 'statute',
   is_startpage: false,
   resolve_relations: ['statute-page.category'],
 })
 article_post.value = data.stories

</script>
