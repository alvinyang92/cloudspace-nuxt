<template>
    <!-- <pre>{{ blok.link}}</pre> -->
    <div id="top" v-editable="blok" :class="[heightClass, bgcolorClasses]" class="relative flex flex-col items-center justify-center overflow-hidden my-auto isolate px-6 py-24 pt-10 xl:py-32 lg:px-8">

        <!-- light bg -->
        <!-- <div class=" opacity-30 sm:opacity-25">
            <svg class="absolute inset-x-0 top-[-4.5rem] left-[10px] sm:left-[-380px] -z-10 h-[60rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
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

        <!-- image -->
        <nuxt-img :class="[heightClass, imgPosition]" v-if="blok.image?.filename" class="absolute inset-0 -z-10 overflow-hidden w-full object-cover " preload :src="blok.image.filename + '/m/1400x0'" :alt="blok.image.alt" width="1440" height="500" />

        <!-- left image -->
        <div class="hidden lg:block absolute inset-y-0 -right-32 xl:right-0">
            <nuxt-img v-if="blok.image_icon?.filename" class="w-[90%] xl:w-full object-cover" preload :src="blok.image_icon.filename" :alt="blok.image_icon.alt" width="1440" height="500" />
        </div>

        <!-- wave wave bottom -->
        <div class="absolute z-30 inset-x-0 bottom-0">
            <svg viewBox=" 0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                        <path
                            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                            opacity="0.100000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                    </g>
                    <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <path
                            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
                        </path>
                    </g>
                </g>
            </svg>
        </div>

        <!-- overlay -->
        <div :class="[heightClass, overlay]" class="absolute inset-0 overflow-hidden bg-black/30 z-10 "></div>

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
        : props.blok.overlay === 'hidden' ? '!hidden'
            // : props.blok.hidden_block === 'image_on_right' ? 'lg:right-0'
            : ''
})

const textWidth = computed(() => {
    return props.blok.text_width === '50%' ? 'lg:w-[50%] w-full'
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

const heightClass = computed(() => {
    return props.blok.height === 'mobile_long' ? 'h-[350px] sm:h-[500px]'
        : props.blok.height === '800' ? 'h-[450px] sm:h-[700px]'
            : props.blok.height === 'special' ? 'h-[350px] xl:h-[50rem] lg:h-[40rem] sm:h-[36rem]'
                : ''
})

const titleFont = computed(() => {
    return props.blok.title_size === '6xl' ? 'sm:!text-6xl'
        : props.blok.title_size === '5xl' ? 'sm:!text-5xl'
            : props.blok.title_size === '4.5xl' ? 'sm:!leading-[2.5rem] xl:!leading-[3rem] !text-3xl sm:!text-[2.5rem]'
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