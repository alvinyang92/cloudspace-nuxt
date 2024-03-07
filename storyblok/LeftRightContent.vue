<template>
    <!-- content -->
    <div :class="borderBottom" v-editable="blok">
        <div>
            <h2 v-if="blok.title_big" class="text-2xl font-bold tracking-tight text-gray-900 ">{{ blok.title_big }}</h2>

            <h2 :class="maxWidth" v-if="blok.title" class="text-lg font-semibold leading-6 text-gray-900 ">{{ blok.title }}</h2>

        </div>
        <article :class="maxWidth" v-html="resolvedRichText" class="mt-4 text-gray-500 prose">
        </article>
    </div>
</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object, })

const resolvedRichText = computed(() => renderRichText(props.blok.desc))

const borderBottom = computed(() => {
    return props.blok.border_bottom === 'border-bottom' ? 'pb-8 border-b border-gray-300'
        : props.blok.border_bottom === 'solid-box' ? 'bg-white p-5 rounded-lg shadow-lg ring-1 ring-gray-900/5'
        : props.blok.border_bottom === 'box-brown' ? 'bg-[#FAF7EF] p-5 rounded-lg shadow-lg ring-1 ring-gray-900/5'
            : ''
})

const maxWidth = computed(() => {
    return props.blok.max_width === 'max-w-22rem' ? 'max-w-none lg:max-w-[22rem]'
        : props.blok.max_width === 'max-w-16rem' ? 'max-w-non lg:max-w-[16rem]'
            : ''
})
</script>
  