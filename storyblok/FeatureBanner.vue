<template>
    <!-- <pre>{{ blok.link}}</pre> -->
    <div v-editable="blok" :class="[heightClass]" class="relative flex flex-col items-center justify-center overflow-hidden my-auto isolate px-6 py-24 sm:py-32 lg:px-8">
        <!-- image -->
        <nuxt-img :class="[heightClass, imgPosition]" v-if="blok.image?.filename" class="absolute inset-0 -z-10 overflow-hidden w-full object-cover " preload :src="blok.image.filename + '/m/1400x0'" :alt="blok.image.alt" width="1440" height="500" sizes="xl:100vw lg:50vw md:400px sm:400px"
            :placeholder="[50, 25, 75, 5]" />
        <!-- overlay -->
        <div :class="[heightClass, overlay]" class="absolute inset-0 overflow-hidden bg-black/40 z-30 "></div>

        <!-- google cloud partners -->
        <div :class="[hiddenBlock]" class="text-white absolute bottom-3 right-5 overflow-hidden z-[90]">
            <div class="">
                <nuxt-link target="_blank" to="https://cloud.google.com/find-a-partner/partner/e-technology-computer-resources-sdn-bhd">
                    <nuxt-img class=" w-[100px] lg:w-[120px] object-cover bg-white p-1 rounded-lg" preload src="https://a.storyblok.com/f/266925/667x270/a44aac83c9/google-cloud-partner-footer.png/m/600x0" alt="google cloud partner" width="900" height="700"
                        sizes="xl:100vw lg:50vw md:400px sm:400px" />
                </nuxt-link>
            </div>
        </div>
        <!-- content -->
        <div :class="[marginTop, textPosition]" class=" z-50 relative w-full mx-auto max-w-7xl md:px-8 px-0">
            <h1 v-if="blok.title" :class="[titleFont, textWidth]" class="text-4xl font-bold text-white"> {{ blok.title }}</h1>

            <p :class="[textWidth]" v-if="blok.desc" class="mt-6 text-lg leading-8 text-white"> {{ blok.desc }}</p>

            <!-- button -->
            <div v-if="blok.btn_title" :class="[buttonCenter]" class=" mt-6 flex items-center gap-x-6">
                <nuxt-link :to="`${blok.link.cached_url}`" :target="blok.link.target" class="rounded-md bg-white px-3.5 py-3 text-sm font-semibold text-[#092A48] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                    {{ blok.btn_title }}
                </nuxt-link>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object, })

const hiddenBlock = computed(() => {
    return props.blok.hiddenblock === 'hidden' ? '!hidden'
        // : props.blok.hidden_block === 'image_on_right' ? 'lg:right-0'
        : ''
})

const buttonCenter = computed(() => {
    return props.blok.button_center === 'center' ? '!justify-center'
        // : props.blok.hidden_block === 'image_on_right' ? 'lg:right-0'
        : ''
})
const overlay = computed(() => {
    return props.blok.overlay === 'opacity-0' ? 'sm:!bg-black/0 !bg-black/30'
        // : props.blok.hidden_block === 'image_on_right' ? 'lg:right-0'
        : ''
})

const textWidth = computed(() => {
    return props.blok.text_width === '50%' ? 'sm:w-[50%] w-full'
        // : props.blok.hidden_block === 'image_on_right' ? 'lg:right-0'
        : ''
})
const textPosition = computed(() => {
    return props.blok.text_position === 'left' ? 'text-left'
        : props.blok.text_position === 'center' ? 'mx-auto max-w-4xl text-center'
            : ''
})

const marginTop = computed(() => {
    return props.blok.margin_t === 'mt-24' ? 'md:mt-24'
        : props.blok.margin_t === 'mt-20' ? 'md:mt-20'
            : props.blok.margin_t === 'mt-16' ? 'mt-6 md:mt-16'
                : ''
})

const heightClass = computed(() => {
    return props.blok.height === 'mobile_long' ? 'h-[350px] sm:h-[500px]'
        : props.blok.height === '800' ? 'h-[450px] sm:h-[700px]'
            : ''
})

const titleFont = computed(() => {
    return props.blok.title_size === '6xl' ? 'sm:!text-6xl'
        : props.blok.title_size === '5xl' ? 'sm:!text-5xl'
            : props.blok.title_size === '4.5xl' ? '!leading-[2rem] sm:!leading-[2.5rem] !text-3xl sm:!text-[2.5rem]'
                : props.blok.title_size === '4xl' ? 'sm:!text-4xl'
                    : props.blok.title_size === '3xl' ? 'sm:!text-3xl'
                        : props.blok.title_size === '2xl' ? 'sm:!text-2xl'
                            : props.blok.title_size === 'xl' ? 'sm:!text-xl'
                                : ''
})

const imgPosition = computed(() => {
    //left
    return props.blok.img_position === 'left' ? 'object-left'
        : props.blok.img_position === 'left-bottom' ? 'object-left-bottom'
            : props.blok.img_position === 'left-top' ? 'object-left-top'
                //right
                : props.blok.img_position === 'right' ? 'object-right'
                    : props.blok.img_position === 'right-bottom' ? 'object-right-bottom'
                        : props.blok.img_position === 'right-top' ? 'object-right-top'
                            //top center bottom
                            : props.blok.img_position === 'top' ? 'object-top'
                                : props.blok.img_position === 'center' ? 'object-center'
                                    : props.blok.img_position === 'bottom' ? 'object-bottom'
                                        : ''
})



</script>