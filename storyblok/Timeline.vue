<template>
    <div v-editable="blok">
        <div class="flex items-center text-sm font-semibold leading-6 text-etech-light-blue">
            <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
            </svg>
            {{ blok.steps }}
            <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
        </div>
        <!-- image -->
        <nuxt-img v-if="blok.image?.filename" class="mt-10 rounded-lg w-[150px] object-cover mx-auto" :src="blok.image.filename + '/m/400x0'" :alt="blok.image.alt" width="384" height="200" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" loading="lazy" />

        <!-- gallery image -->
        <nuxt-img v-if="blok.gallery_image?.filename" class="mt-10 rounded-lg w-[97%] h-[150px] object-cover " :src="blok.gallery_image.filename + '/m/'" :alt="blok.gallery_image.alt" width="384" height="200" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" loading="lazy" />


        <!-- title -->
        <h3 class="mt-6 text-base font-semibold leading-2 whitespace-nowrap text-gray-900 text-center">{{ blok.title }}</h3>
        <!-- desc -->
        <p class="mt-1 text-base leading-7 text-gray-600 text-center">{{ blok.desc }}</p>
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const timeline = [
    {
        name: 'Founded company',
        description:
            'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
        date: 'Aug 2021',
        dateTime: '2021-08',
    },
    {
        name: 'Secured $65m in funding',
        description:
            'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
        date: 'Dec 2021',
        dateTime: '2021-12',
    },
    {
        name: 'Released beta',
        description:
            'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
        date: 'Feb 2022',
        dateTime: '2022-02',
    },
    {
        name: 'Global launch of product',
        description:
            'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
        date: 'Dec 2022',
        dateTime: '2022-12',
    },
]

</script>