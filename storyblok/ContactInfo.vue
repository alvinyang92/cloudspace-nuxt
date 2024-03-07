<template>
    <div :class="[hiddenBlock]" class="block"></div>

    <div>
        <!-- photo -->
        <div :class="[LeftRightPosition]" class="relative lg:absolute  w-full h-auto lg:h-full lg:overflow-hidden lg:w-1/2">
            <nuxt-img v-if="blok.image?.filename" class=" w-full object-cover lg:h-full h-[400px] " preload :src="blok.image.filename + '/m/1400x0'" :alt="blok.image.alt" width="1440" height="500" sizes="xl:100vw lg:50vw md:400px sm:400px" :placeholder="[50, 25, 75, 5]" />
        </div>

        <!-- content -->
        <div class="relative z-[99999] py-[3rem] lg:py-[15rem] flex flex-col justify-center px-6 lg:px-8">
            <!-- title -->
            <h2 v-if="blok.title" class="px-6 mt-4 text-3xl font-bold tracking-tight text-gray-900">{{ blok.title }}</h2>
            <!-- desc -->
            <p v-if="blok.desc" class="px-6 mt-1 text-gray-600">{{ blok.desc }}</p>

            <!-- address -->
            <div class="px-6 mt-5 space-y-4 text-base leading-7 text-gray-600">
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Address</span>
                        <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <!-- address link -->
                    <dd>
                        <nuxt-link target="_blank" :to="blok.addresslink.cached_url">
                            <article v-html="resolvedRichText" class="prose hover:text-etech-light-blue"></article>
                        </nuxt-link>
                    </dd>
                </div>

                <!-- phone number -->
                <div v-if="blok.phonenumber || blok.phonelink.cached_url" class="flex gap-x-4">
                    <div class="flex gap-x-4">
                        <dt class="flex-none">
                            <span class="sr-only">web</span>
                            <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                        </dt>
                        <div class="flex flex-col gap-2">
                            <dd>
                                <nuxt-link class="hover:text-etech-light-blue" :to="`tel:${blok.phonelink.cached_url}`">
                                    {{ blok.phonenumber }}
                                </nuxt-link>
                            </dd>
                            <!-- fax -->
                            <dd v-if="blok.phonefax || blok.phonefaxlink.cached_url">
                                <nuxt-link class="hover:text-etech-light-blue" :to="`tel:${blok.phonefaxlink.cached_url}`">
                                    {{ blok.phonefax }}
                                </nuxt-link>
                            </dd>

                        </div>
                    </div>
                </div>

                <!-- email -->
                <div v-if="blok.emailtitle || blok.emaillink.cached_url" class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">web</span>
                        <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                        <nuxt-link class="hover:text-etech-light-blue" :to="`${blok.emaillink.cached_url}`">
                            {{ blok.emailtitle }}
                        </nuxt-link>
                    </dd>
                </div>

                <!-- web -->
                <div v-if="blok.webtitle || blok.weblink.cached_url" class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">web</span>
                        <GlobeAltIcon class="h-7 w-7 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                        <nuxt-link target=”_blank” class="hover:text-etech-light-blue" :to="`${blok.weblink.cached_url}`">
                            {{ blok.webtitle }}
                        </nuxt-link>
                    </dd>
                </div>

                <!-- hours -->
                <div v-if="blok.time" class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Hours</span>
                        <ClockIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                        <p>{{ blok.time }}</p>
                    </dd>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ClockIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

const props = defineProps({ blok: Object, raw: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.addresstitle))

const hiddenBlock = computed(() => {
    return props.blok.hiddenblock === 'hidden' ? '!hidden'
        // : props.blok.hidden_block === 'image_on_right' ? 'lg:right-0'
        : ''
})

const LeftRightPosition = computed(() => {
    return props.blok.leftrightposition === 'image_on_left' ? 'lg:left-0'
        : props.blok.leftrightposition === 'image_on_right' ? 'lg:right-0'
            : ''
})
</script>