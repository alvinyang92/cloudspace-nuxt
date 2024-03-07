<template>
    <div v-editable="blok">
        <!-- FINAL -->
        <div class="relative isolate bg-white">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                
                <StoryblokComponent v-for="blok in blok.contact" :key="blok._uid" :blok="blok" />
        
            </div>
        </div>
    </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/vue/24/outline'

const props = defineProps({ blok: Object, raw: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.address_title))

const LeftRightPosition = computed(() => {
    return props.blok.leftrightposition === 'image_on_left' ? 'lg:left-0'
      : props.blok.leftrightposition === 'image_on_right' ? 'lg:right-0'
        : ''
})


</script>