<template>
  <!-- <pre>{{ pacard.banner_image }}</pre> -->
  <nuxt-link :to="'/' + slug" v-editable="pacard">
    <div class="flex flex-col">
      <!-- image -->
      <div class="mb-5">
        <nuxt-img 
        v-if="pacard.banner_image?.filename" 
        class="rounded-lg h-[200px] object-cover w-full" 
        :src="pacard.banner_image.filename + '/m/800x0'" 
        :alt="pacard.banner_image.alt" 
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        width="384" 
        height="200" 
        loading="lazy" 
        />
      </div>
      <!-- dt - title -->
      <div class="flex flex-col items-left gap-x-3">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{{ pacard.banner_title }}</h3>
      </div>
      <!-- dd - desc -->
      <div class="flex flex-auto flex-col">
        <!-- desc -->
        <p 
        v-if="pacard.featured_desc" 
        class="mt-3 flex-auto line-clamp-3 text-sm text-gray-600">{{ pacard.featured_desc }}
      </p>
        <!-- cta -->
        <div class="mt-4 text-sm font-semibold leading-6 ">Learn More<span aria-hidden="true" class="ml-1">→</span>
        </div>

      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({ pacard: Object, slug: String, })

</script>