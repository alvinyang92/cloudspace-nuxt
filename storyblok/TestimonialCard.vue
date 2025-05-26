<template>
    <!-- item -->
    <div v-editable="blok" class="flex flex-col gap-5 " :class="[colSpanRow]">
        <figure :class="[bgcolorClasses, flexAuto]" class="p-10 rounded-2xl shadow-lg ring-1 ring-gray-900/5 flex  flex-col justify-between">

            <!-- <nuxt-img class="" preload src="https://a.storyblok.com/f/278050/762x750/87643d415f/cloud-connected-operations.jpg/m/" alt="google cloud partner" width="900" height="700" sizes="xl:100vw lg:50vw md:400px sm:400px" /> -->

            <nuxt-img 
            v-if="blok.diagram_image?.filename" class="" 
            :src="blok.diagram_image?.filename + '/m/'" 
            :alt="blok.diagram_image?.alt" 
            sizes="xl:100vw lg:50vw md:400px sm:400px" />

            <blockquote class="text-lg leading-8">
                <article :class="[textColor]" v-html="resolvedRichText" class="prose max-w-none">
                </article>
            </blockquote>

            <figcaption v-if="blok.name" class="mt-5 flex flex-col sm:flex-row items-start gap-x-0 sm:items-center sm:gap-x-3">
                <nuxt-img v-if="blok.image?.filename" class="h-14 w-14 rounded-full bg-gray-50" :src="blok.image.filename + '/m/'" :alt="blok.image.alt" width="256" height="256" />

                <div class="mt-4 sm:mt-0 text-base">
                    <div :class="[textColor]" class="font-semibold">{{ blok.name }}</div>
                    <div :class="[textColor]" class="font-medium mt-1 text-gray-600">{{ blok.position }}</div>
                    <div :class="[textColor]" class="mt-0.5 text-gray-500 ">{{ blok.location }}</div>
                    <nuxt-img v-if="blok.logo?.filename" class="w-[40%] mt-5" :src="blok.logo.filename + '/m/'" :alt="blok.logo.alt" width="256" height="256" />
                </div>
            </figcaption>

        </figure>
    </div>
</template>

<script setup>

const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.desc))

const flexAuto = computed(() => {
    return props.blok.flex_auto === 'flex-auto' ? 'flex-auto'
        // : props.blok.bg_color === 'blue' ? 'bg-[#092A48]'
       
                    : ''
})


const bgcolorClasses = computed(() => {
    return props.blok.bg_color === 'beige' ? 'bg-[#FAF7EF]'
        // : props.blok.bg_color === 'blue' ? 'bg-[#092A48]'
        : props.blok.bg_color === 'white' ? 'bg-white'
            : props.blok.bg_color === 'light-blue' ? 'bg-[#DFF5FF]'
                : props.blok.bg_color === 'blue' ? 'bg-cs-light-blue'
                    : ''
})

const textColor = computed(() => {
    return props.blok.text_color === 'black' ? 'text-gray-900'
        : props.blok.text_color === 'white' ? 'text-white'
            : ''
})

const colSpanRow = computed(() => {
    return props.blok.columnspan === 'col-span-2' ? 'col-span-1 lg:col-span-2'
        //   : props.blok.columnspan === 'white' ? 'text-gray-300'
        : ''
})





</script>