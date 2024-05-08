<template>
    <div v-editable="blok">
        <div class="relative isolate bg-white h-auto sm:h-screen">

            <div class="grid h-auto sm:h-screen grid-cols-1 lg:grid-cols-2">

                <div class="mx-auto max-w-7xl my-auto">
                    <div class="relative py-10 px-6 lg:px-8 lg:static flex flex-col items-center justify-center">
                        <div class="mx-auto lg:mx-0 lg:max-w-lg">
                            <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                                    <defs>
                                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" stroke-width="0" fill="white" />
                                    <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                                    </svg>
                                    <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                                </svg>
                            </div>
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                            <p class="mt-3 text-lg leading-8 text-gray-600">We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, there are several ways you can reach out to us:</p>
                            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600 ">
                                <div class="flex flex-col gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Office</span>
                                        <p class="font-bold">Office</p>
                                        <!-- <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" /> -->
                                    </dt>
                                    <dd>
                                        <nuxt-link class="hover:text-[#1A96D2] underline" to="https://maps.app.goo.gl/FqEyUPWK58hsm89n9" target="_blank" rel="noopener noreferrer">Block D-5-3, SETIAWALK, Persiaran Wawasan,<br> Pusat Bandar Puchong,<br> 47160 Puchong, Selangor</nuxt-link>
                                    </dd>
                                </div>
                           
                                <div class="flex flex-col gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Telephone</span>
                                        <!-- <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" /> -->
                                        <p class="font-bold">Telephone</p>
                                    </dt>
                                    <dd><a class="hover:text-[#1A96D2] underline" href="tel:+603860036783">+603.8600.3678</a></dd>
                                </div>
                                <div class="flex flex-col gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Email</span>
                                        <!-- <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" /> -->
                                        <p class="font-bold">Email</p>
                                    </dt>
                                    <dd><a class="hover:text-[#1A96D2] underline" href="mailto:sales@cloud-space.co">sales@cloud-space.co</a></dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <nuxt-img :class="heightClass" class="object-cover w-full h-full" src="https://a.storyblok.com/f/278050/720x1080/25a279b990/contact-banner.jpg/m/" alt="contact banner" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

const props = defineProps({ blok: Object })
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

</script>