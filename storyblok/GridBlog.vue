<template>
  <!-- <pre>{{ blok.lightbg_show }}</pre> -->
  <div v-if="blok.section_hide" v-editable="blok" :class="[bgcolorClasses, paddingClasses, paddingBottomClasses, paddingTopClasses]" class="py-16 pb-16 isolate relative">

    <!-- gradient-bg -->
    <div :class="gradientbgClasses" class="">
      <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
        <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#1A96D2] to-[#8DE3FF]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
        <div class="ml-[-22rem] aspect-[1313/650] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#1A96D2] to-[#8DE3FF] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
    <!-- light bg -->
    <!-- <div :class="lightbgClasses" class="z-10 opacity-30 sm:opacity-25">
      <svg class="absolute inset-x-0 top-[4rem] sm:left-[-380px] z-10 h-[60rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50/40">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0"></path>
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"></rect>
      </svg>
    </div> -->



    <div :class="leftRightPadding" class="z-[990] mx-auto max-w-7xl px-6 lg:px-8">
      <!-- title -->
      <div :class="[textPosition]" class="mx-auto max-w-2xl text-center mb-10">
        <h2 :class="[textColor]" v-if="blok.label_title" class="text-base font-semibold leading-7">{{ blok.label_title }}</h2>
        <h2 :class="[textColor]" v-if="blok.title" class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ blok.title }}</h2>
        <p :class="[textColor]" v-if="blok.small_title" class="mt-3 leading-8 text-black font-semibold ">{{ blok.small_title }}</p>
        <!-- richtext title -->
        <article :class="[textColor]" v-if="blok.richtext_title" v-html="resolvedRichText" class="prose mt-3 leading-5 text-black font-semibold ">
        </article>

        <p :class="[textColor]" v-if="blok.desc" class="mt-3 leading-8 text-gray-600">{{ blok.desc }}</p>

        <!-- richtext  -->
        <article v-if="blok.richtext" v-html="resolvedRichTextSecond" class="!text-left prose mt-3 leading-5">
        </article>

      </div>
      <!-- card -->
      <div :class="marginTopClasses" class="mx-auto max-w-2xl lg:max-w-none">
        <!-- grid card -->
        <div :class="[gridClasses, maxWidth]" class="grid gap-x-8 gap-y-8 ">
          <!-- grid card -->
          <StoryblokComponent v-for="blok in blok.grid_card" :key="blok._uid" :blok="blok" />
          <!-- pa card -->
          <BlogCard v-if="blok.pa_show" v-for="blogcard in all_pa" :key="blogcard.uuid" :blogcard="blogcard.content" :slug="blogcard.full_slug" />

        </div>
        <!-- faq -->
        <div v-if="blok.faq_card" :class="[maxWidth]" class="divide-y divide-gray-900/10">
          <StoryblokComponent v-for="blok in blok.faq_card" :key="blok._uid" :blok="blok" />
        </div>
        <!-- client logo -->
        <div v-if="blok.client_logo" :class="[gridClasses, mobileGridClasses, maxWidth]" class="grid grid-cols-1 gap-x-8 gap-y-8">
          <StoryblokComponent v-for="blok in blok.client_logo" :key="blok._uid" :blok="blok" />
        </div>
        <!-- left right -->
        <div :class="[maxWidth]" class="space-y-14 ">
          <StoryblokComponent v-for="blok in blok.left_right_card" :key="blok._uid" :blok="blok" />
        </div>
        <!-- tab -->
        <div v-if="blok.grid_tab" :class="[gridClasses, mobileGridClasses, maxWidth]" class="grid grid-cols-1 gap-x-8 gap-y-8">
          <StoryblokComponent v-for="blok in blok.grid_tab" :key="blok._uid" :blok="blok" />
        </div>
      </div>
      <!-- button -->
      <div v-if="blok.btn_title" class="mt-10 flex items-center justify-center gap-x-6">
        <!-- else -->
        <nuxt-link :to="`${blok.link.cached_url}`" :target="blok.link.target" :class="[btnColor]" class="rounded-md bg-etech-blue px-3.5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          {{ blok.btn_title }}
        </nuxt-link>

      </div>
    </div>

    <div class="mx-auto max-w-7xl" :class="[bgcolorClasses, paddingClasses, paddingBottomClasses, paddingTopClasses, borderClass]"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object })

const all_pa = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'blog',
  is_startpage: false,
  // sort_by: 'content.date:asc',
  per_page: 3,
})
all_pa.value = data.stories

const resolvedRichText = computed(() => renderRichText(props.blok.richtext_title))
const resolvedRichTextSecond = computed(() => renderRichText(props.blok.richtext))

const gridClasses = computed(() => {
  return props.blok.grid === '2' ? 'sm:grid-cols-2'
    : props.blok.grid === '3' ? 'sm:grid-cols-2 xl:grid-cols-3'
      : props.blok.grid === '4' ? 'sm:grid-cols-2 xl:grid-cols-4'
        : props.blok.grid === '5' ? 'sm:grid-cols-2 xl:grid-cols-5'
          : props.blok.grid === '1' ? 'sm:grid-cols-1'
            : ''
})

const mobileGridClasses = computed(() => {
  return props.blok.mobilegrid === 'mobile-grid-2' ? 'grid-cols-2'
    // : props.blok.grid === '3' ? 'lg:grid-cols-3'
    //   : props.blok.grid === '4' ? 'lg:grid-cols-4'
    //     : props.blok.grid === '5' ? 'grid-cols-2 lg:grid-cols-5'
    //       : props.blok.grid === '1' ? 'lg:grid-cols-1'
    : ''
})
const textPosition = computed(() => {
  return props.blok.textposition === 'text-left' ? 'text-left'
    : props.blok.textposition === 'text-center' ? 'text-center'
      : ''
})

const textColor = computed(() => {
  return props.blok.text_color === 'white' ? '!text-white'
    // : props.blok.text_color === 'white' ? 'text-white'
    : ''
})


const maxWidth = computed(() => {
  return props.blok.maxwidth === '4xl' ? 'lg:max-w-4xl lg:mx-auto'
    : props.blok.maxwidth === '3xl' ? 'lg:max-w-3xl lg:mx-auto'
      : props.blok.maxwidth === '5xl' ? 'lg:max-w-5xl lg:mx-auto'
        : props.blok.maxwidth === '2xl' ? 'lg:max-w-2xl lg:mx-auto'
          : props.blok.maxwidth === 'xl' ? 'lg:max-w-xl lg:mx-auto'
            : props.blok.maxwidth === 'lg' ? 'lg:max-w-lg lg:mx-auto'
              : props.blok.maxwidth === 'md' ? 'lg:max-w-md lg:mx-auto'
                : props.blok.maxwidth === 'sm' ? 'lg:max-w-sm lg:mx-auto'
                  : props.blok.maxwidth === 'none' ? 'lg:max-w-none'
                    : ''
})

const paddingClasses = computed(() => {
  return props.blok.padding === '16' ? 'pb-16'
    : props.blok.padding === '8' ? 'pb-8'
      : props.blok.padding === 'none' ? 'pb-0'
        : props.blok.padding === '32' ? 'pb-32'
          //   : props.blok.padding === '5' ? 'lg:grid-cols-5'
          : ''
})

const paddingTopClasses = computed(() => {
  return props.blok.padding_top === 'none' ? 'pt-0'
    : props.blok.padding_top === '8' ? 'pt-4'
      : props.blok.padding_top === '16' ? 'pt-16'
        : ''
})

const marginTopClasses = computed(() => {
  return props.blok.margintop === 'mt-4' ? '!mt-4'
    : props.blok.margintop === 'mt-8' ? '!mt-8'
      : ''
})

const paddingBottomClasses = computed(() => {
  return props.blok.padding_bottom === 'none' ? '!pb-0'
    : props.blok.padding_bottom === '24' ? '!pb-24'
      : props.blok.padding_bottom === '16' ? '!pb-16'
        : props.blok.padding_bottom === '8' ? '!pb-8'
          : props.blok.padding_bottom === '4' ? '!pb-4'
            //  : props.blok.padding_bottom === '16' ? '!pb-16'
            : ''
})


const gradientbgClasses = computed(() => {
  return props.blok.gradient_color === 'hidden' ? 'hidden'
    : props.blok.gradient_color === 'show' ? 'block'
      : ''
})

const lightbgClasses = computed(() => {
  return props.blok.lightbg === 'hidden' ? 'hidden'
  : props.blok.lightbg === 'show' ? 'block'
    // : props.blok.gradient_color === 'show' ? 'block'
      : ''
})

const bgcolorClasses = computed(() => {
  return props.blok.bgcolor === 'white' ? 'bg-white'
    : props.blok.bgcolor === 'beige' ? 'bg-[#FAF7EF]'
      : props.blok.bgcolor === 'lightWhite' ? 'bg-[#fdfcf7]'
        : props.blok.bgcolor === 'lightGrey' ? 'bg-[#F5F5F5]'
          : props.blok.bgcolor === 'lightBlue' ? 'bg-[#DFF5FF]'
            : props.blok.bgcolor === 'skyBlue' ? 'bg-[#1A96D2]'
              : props.blok.bgcolor === 'darkBlue' ? 'bg-[#231A6E]'
                : ''
})

const btnColor = computed(() => {
  return props.blok.btnColor === 'white' ? '!bg-white !text-black'
    : props.blok.btnColor === 'blue' ? '!bg-[#1A96D2] !text-white'
      : ''
})

const leftRightPadding = computed(() => {
  return props.blok.pxpadding === 'none' ? '!px-0'
    : ''
})


const borderClass = computed(() => {
  return props.blok.border_class === 'border-bottom' ? 'border-b border-b-gray-200 mx-auto max-w-7xl px-6 lg:px-8'
    : props.blok.border_class === 'border-bottom-bgcolor' ? 'border-b border-b-gray-300 mx-auto px-8'
      : ''
})

</script>