<template>
  <div v-editable="blok" :class="solidBorder" class="flex flex-col">
    <StoryblokComponent v-for="blok in blok.flexi" :key="blok._uid" :blok="blok" />
    <!-- image -->
    <div v-if="blok.image?.filename" class="mb-5">
      <nuxt-img :class="heightClass" class="rounded-lg h-[200px] object-cover w-full" :src="blok.image.filename + '/m/600x0'" :alt="blok.image.alt" width="384" height="200" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" loading="lazy" />
    </div>

    <!-- rounded image -->
    <div v-if="blok.image_rounded?.filename" class="mb-5 w-full mx-auto">
      <nuxt-img class="h-[200px] w-[200px] object-cover  rounded-full mx-auto" :src="blok.image_rounded.filename + '/m/600x0'" :alt="blok.image_rounded.alt" width="384" height="200" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" loading="lazy" />
    </div>


    <!-- image-testi -->
    <div v-if="blok.image_testi?.filename" class="mb-5">
      <nuxt-img :class="heightClass" class="rounded-lg h-[200px] object-cover w-full shadow-lg ring-1 ring-gray-900/5" :src="blok.image_testi.filename + '/m/1000x0'" :alt="blok.image_testi.alt" width="1000" height="600" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" loading="lazy" />
    </div>

    <!-- goolge tab image -->
    <div v-if="blok.image_google_tab?.filename" class="">
      <nuxt-img :class="heightClass" class="rounded-lg h-auto sm:h-[150px] object-cover w-full" :src="blok.image_google_tab.filename + '/m/600x0'" :alt="blok.image_google_tab.alt" width="384" height="200" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" loading="lazy" />
    </div>

    <!--title -->
    <div :class="[textPosition]" class="flex flex-col items-left gap-x-3 text-base font-semibold leading-7 text-gray-900">
      <!-- iconshow? -->
      <div class="">
        <div v-if="blok.icon_image?.filename" class=" mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-etech-blue">
          <!-- icon image -->
          <nuxt-img width="24" height="24" class="h-10 w-10" :src="blok.icon_image.filename" :alt="blok.icon_image.alt" />
        </div>
      </div>
      <!-- stats -->
      <h3 :class="[textColor]" v-if="blok.stats" class="text-3xl tracking-tight sm:text-5xl">{{ blok.stats }}</h3>
      <!-- badege -->
      <div v-if="blok.badge" class="mb-2">
        <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-cs-light-blue ring-1 ring-inset ring-cs-light-blue/20">
          {{ blok.badge }}
        </span>
      </div>
      <!-- title -->
      <h3 :class="[textColor]" class="font-bold text-xl" v-if="blok.title">{{ blok.title }}</h3>
    </div>

    <!--desc -->
    <div v-if="blok.desc" :class="[textPosition]" class="mt-2 flex flex-auto flex-col leading-6 text-gray-600">
      <!-- desc -->
      <p :class="[textColor]" v-if="blok.desc" class="">{{ blok.desc }}</p>

      <!-- button -->
      <div class="mt-2" v-if="blok.link_title">

        <nuxt-link :to="`${blok.link.cached_url}`" :target="blok.link.target" class="mt-2 text-sm font-semibold leading-6 "> {{ blok.link_title }}<span class="ml-1" aria-hidden="true">→</span>
        </nuxt-link>

      </div>

    </div>
    <!-- richtext -->
    <!-- article content -->
    <article v-if="blok.article_show" v-html="html" class="mt-4 prose mx-auto max-w-4xl">
    </article>
  </div>
</template>

<script setup>
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/vue/20/solid'
import RichTextResolver from 'storyblok-js-client/richTextResolver'
const props = defineProps({ blok: Object })

const resolver = new RichTextResolver()
const options = {
  optimizeImages: {
    class: 'w-full object-cover rounded-md',
    width: 640, // image width
    height: 360, // image height
    loading: 'lazy', // 'lazy' | 'eager'
    // filters: {
    // 	blur: 0, // 0 to 100
    // 	brightness: 0, // -100 to 100
    // 	fill: 'transparent', // Or any hexadecimal value like FFCC99
    // 	format: 'webp', // 'webp' | 'jpeg' | 'png'
    // 	grayscale: false,
    // 	quality: 95, // 0 to 100
    // 	rotate: 0, // 0 | 90 | 180 | 270
    // },
    // srcset accepts an array with image widths.
    // Example: [720, 1024, 1533]
    // will render srcset="//../m/720x0 720w", "//../m/1024x0 1024w", "//../m/1533x0 1280w"
    // Also accept an array to pass width and height.
    // Example: [[720,500], 1024, [1500, 1000]]
    // will render srcset="//../m/720x500 720w", "//../m/1024x0 1024w", "//../m/1500x1000 1280w"
    srcset: [720, 1024, 1533],
    sizes: ['(max-width: 767px) 100vw', '(max-width: 1024px) 768px', '1500px'],

  },
}
const html = computed(() => resolver.render(props.blok.article, options))

const heightClass = computed(() => {
  return props.blok.image_height === 'none' ? 'h-auto'
    : props.blok.image_height === '400px' ? 'h-[300px]'
      : ''
})

const textColor = computed(() => {
  return props.blok.text_color === 'white' ? '!text-white'
    // : props.blok.text_color === 'white' ? 'text-gray-300'
    : ''
})

const textPosition = computed(() => {
  return props.blok.text_position === 'text-center' ? '!text-center'
    // : props.blok.text_color === 'white' ? 'text-gray-300'
    : ''
})

const solidBorder = computed(() => {
  return props.blok.solid_border === 'solidbox' ? 'bg-white p-8 rounded-2xl shadow-lg ring-1 ring-gray-900/5'
    : props.blok.solid_border === 'googletab' ? 'bg-white p-4 rounded-2xl shadow-lg ring-1 ring-gray-900/5'
    : ''
})

</script>