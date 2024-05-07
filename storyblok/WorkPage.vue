<template>
<NavWhite></NavWhite>
  <div v-editable="blok" class="relative">


    <!-- top -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 z-[9999]">
      <div class="h-full flex flex-col md:flex-row md:items-start md:justify-between py-14">

        <!-- title | category -->
        <div class="md:w-[50%] w-full ">
          <!-- image  -->
          <div class="flex gap-5 items-center">
            <nuxt-img v-if="blok.image_client_1?.filename" class=" object-contain" :src="blok.image_client_1.filename + '/m/'" alt="" width="158" height="48" />
            <nuxt-img v-if="blok.image_client_2?.filename" class=" object-contain" :src="blok.image_client_2.filename + '/m/'" alt="" width="158" height="48" />
          </div>
          <h1 v-if="blok.title" class="text-4xl font-bold sm:text-6xl mt-5"> {{ blok.title }}</h1>
          <p v-if="blok.small_title" class="mt-3">{{ blok.small_title }}</p>
        </div>

        <!-- -------------------------------------- -->
        <div class="md:w-[50%] h-[200px] w-full px-0 md:px-10 border-r-gray-700 border border-y-0 border-r-0">

          <article v-html="resolvedRichTextDesc" class="mt-5 md:mt-0 prose max-w-none"></article>
          <!-- client -->
          <div class="mt-6 ">
            <span class="font-bold">Products used:</span>
            <!-- image  -->
            <div class="flex gap-5 items-center mt-3">
              <nuxt-img v-if="blok.image_product_1?.filename" class=" object-contain" :src="blok.image_product_1.filename + '/m/'" alt="" width="158" height="48" />
              <nuxt-img v-if="blok.image_product_2?.filename" class=" object-contain" :src="blok.image_product_2.filename + '/m/'" alt="" width="200" height="48" />
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="z-10">
      <StoryblokComponent v-for="blok in blok.block" :key="blok._uid" :blok="blok" />
    </div>

    <!-- testimonial -->
    <section v-if="blok.company" class="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
      <div class="bg-reka-purple py-10 px-4 lg:px-0 rounded-3xl">
        <h3 class="mt-2 text-2xl font-bold text-black text-center">What Our Client Said</h3>
        <div class="mt-5 mx-auto max-w-2xl lg:max-w-4xl">
          <!-- <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> -->
          <figure class="">
            <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <article v-html="resolvedRichText" class="prose max-w-none"></article>
            </blockquote>

            <figcaption class="mt-10">
              <div class="mt-4 flex flex-col sm:flex-row text-center items-center justify-center space-x-0 sm:space-x-3 text-base">
                <div class="font-semibold text-gray-900">{{ blok.name }}</div>
                <!-- dot -->
                <div v-if="blok.name">
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="hidden sm:block fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                </div>
                <div class="text-gray-600">{{ blok.position }}</div>
                <!-- dot -->
                <div v-if="blok.position">
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="hidden sm:block fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                </div>
                <div class="text-gray-600">{{ blok.company }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <StoryblokComponent v-for="blok in blok.footer" :key="blok._uid" :blok="blok" />


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import moment from 'moment';
const props = defineProps({ blok: Object, raw: Object, })
const resolvedRichText = computed(() => renderRichText(props.blok.richtext))
const resolvedRichTextDesc = computed(() => renderRichText(props.blok.desc))


const showHamburger = ref(false);


//header SEO
const page_title = props.blok.page_title
const title = props.blok.meta_title
const desc = props.blok.meta_desc
const seoimg = props.blok.thumbs
const tag = props.blok.tag
const link = props.raw.full_slug

useHead({
  title: `${page_title}`,
  meta: [
    { property: 'twitter:title', content: `${title}` },
    { property: 'og:title', content: `${title}` },
    { name: 'description', content: desc },
    { name: 'twitter:description', content: desc },
    //  { property: 'twitter:image', content: seoimg },
    //  { property: 'og:image:secure_url', content: seoimg },
    //  { property: 'og:image', content: seoimg },
     { property: 'og:image:type', content: 'image/jpg', },
    { property: 'og:description', content: desc },
  ],
  link: [
    { rel: 'canonical', href: `https://cloud-space.co/${link}` },
  ],
})


</script>
