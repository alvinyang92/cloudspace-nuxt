<template>
  <NavWhite></NavWhite>
  <div v-editable="blok" class="relative">


    <!-- top -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 z-[9999]">
      <div class="h-full flex flex-col md:flex-row md:items-center md:justify-between py-14 ">

        <!-- title | category -->
        <div class="md:w-[50%] w-full border-r-[1px]">
          <!-- tag -->
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-cs-light-blue ring-1 ring-inset ring-cs-light-blue/20">{{ blok.tag }}</span>
          </div>

          <!-- image  -->
          <div class="flex gap-5 items-center">
            <nuxt-img v-if="blok.image_client_1?.filename" class=" object-contain" :src="blok.image_client_1.filename + '/m/'" alt="" width="158" height="48" />
            <nuxt-img v-if="blok.image_client_2?.filename" class=" object-contain" :src="blok.image_client_2.filename + '/m/'" alt="" width="158" height="48" />
          </div>
          <h1 v-if="blok.title" class="text-3xl font-bold mt-5 w-[80%]"> {{ blok.title }}</h1>
          <p v-if="blok.small_title" class="mt-3">{{ blok.small_title }}</p>

        </div>

        <!-- -------------------------------------- -->
        <div class="md:w-[50%] flex  w-full h-full px-0 md:px-10 border-r-gray-700 ">

          <article v-html="resolvedRichTextDesc" class="mt-5 md:mt-0 prose max-w-none"></article>
          <!-- client -->
          <!-- <div class="mt-6 ">
            <span class="font-bold">Products used:</span>

            <div class="flex gap-5 items-center mt-3">
              <nuxt-img v-if="blok.image_product_1?.filename" class=" object-contain" :src="blok.image_product_1.filename + '/m/'" alt="" width="158" height="48" />
              <nuxt-img v-if="blok.image_product_2?.filename" class=" object-contain" :src="blok.image_product_2.filename + '/m/'" alt="" width="200" height="48" />
            </div>

          </div> -->
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

  <!-- cta -->
  <div  class="h-[350px] sm:h-[500px] bg-[#1A96D2] relative flex flex-col items-center justify-center overflow-hidden my-auto isolate px-6 py-24 pt-10 xl:py-32 lg:px-8">
    <!-- <div class="opacity-30 sm:opacity-25">
      <svg class="absolute inset-x-0 top-[-4.5rem] left-[10px] sm:left-[-380px] -z-10 h-[60rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs><svg x="50%" y="-1" class="overflow-visible fill-gray-50/40">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path>
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"></rect>
      </svg>
    </div> -->

    <div class="hidden lg:block absolute inset-y-0 -right-32 xl:right-0"><img src="https://a.storyblok.com/f/278050/1170x577/10e909db78/cta-element.svg" width="1440" height="500" alt="" data-nuxt-img="" class="w-[90%] xl:w-full object-cover"></div><!-- wave wave bottom -->
    <div class="absolute z-30 inset-x-0 bottom-0"><svg viewBox=" 0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
            </path>
          </g>
        </g>
      </svg></div>

    <!-- content -->
    <div class="mt-6 md:mt-16 text-left z-50 relative w-full mx-auto max-w-7xl md:px-8 px-0">
      <h1 class="sm:!leading-[2.5rem] xl:!leading-[3rem] !text-3xl sm:!text-[2.5rem] lg:w-[50%] w-full text-4xl font-bold text-white">Get started with Us</h1>
      <p class="lg:w-[50%] w-full mt-6 text-lg leading-8 text-white">Explore our solution by contacting us for further exploration and question.

      </p><!-- button -->
      <div class="mt-6 flex items-center gap-x-6">
        <nuxt-link to="/contact" class="rounded-md bg-white px-3.5 py-3 text-sm font-semibold text-[#092A48] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Contact Us

        </nuxt-link>
      </div>
    </div>
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
