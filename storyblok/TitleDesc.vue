<template>
    <div v-editable="blok" :class="myclass" class="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div class="">
            <h2 v-if="blok.title" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ blok.title }}</h2>
            <div class="flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div class="lg:w-full lg:flex-auto">
                    <p v-if="blok.label_title" class="mt-5 text-xl font-semibold leading-8 text-gray-600">{{ blok.label_title }}</p>
                    <div class="mt-5 text-base leading-7 text-gray-700">
                        <div :class="widthClasses" v-html="resolvedRichText" class="prose  mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.desc))

const widthClasses = computed(() => {
    return props.blok.width === 'xl' ? 'max-w-xl'
        : props.blok.width === '3xl' ? 'max-w-3xl'
            : props.blok.width === '2xl' ? 'max-w-2xl'
                : props.blok.width === 'lg' ? 'max-w-lg'
                    : props.blok.width === 'none' ? 'max-w-none'
                        : ''
})

const myclass = computed(() => {
    return props.blok.marginy === 'show' ? 'my-10'
        // : props.blok.width === '3xl' ? 'max-w-3xl'
                        : ''
})



</script>
  