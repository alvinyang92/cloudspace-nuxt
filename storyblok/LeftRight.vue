<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-14 lg:items-center">
        <!-- img -->
        <div v-editable="blok" class="order-first lg:order-last" aria-hidden="true">
            <nuxt-img v-if="blok.image?.filename" class="rounded-lg w-full object-cover" :class="[marginLeftRight, imageHeight]" :src="blok.image.filename + '/m/800x0'" width="432" height="705" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" :alt="blok.image.alt" />
        </div>

        <!-- img -->
        <div :class="[orderClass]" class="order-last lg:order-first">
            <div class="space-y-8 ">
                <StoryblokComponent v-for="blok in blok.title_desc" :key="blok._uid" :blok="blok" />
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object, })

const orderClass = computed(() => {
    return props.blok.order === 'reverse' ? 'lg:order-last'
        : ''
})

const marginLeftRight = computed(() => {
    return props.blok.margin === 'margin-auto' ? 'mx-auto'
        : ''
})

const imageHeight = computed(() => {
    return props.blok.img_height === 'mobile-500' ? 'h-[450px]  lg:h-auto'
        : ''
})
</script>