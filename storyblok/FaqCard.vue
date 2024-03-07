<template>
    <div v-editable="blok">
        <Disclosure as="div" v-slot="{ open }">
            <div class="py-5">
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-800">
                    <span class="text-base font-semibold leading-7">
                        {{ blok.question }}</span>
                    <span class="ml-6 flex h-7 items-center">
                        <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                        <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                    </span>
                </DisclosureButton>
            </div>
            <DisclosurePanel as="dd" class="pb-5 md:pr-12">
                <article v-html="resolvedRichText" class="text-base leading-7 text-gray-600 prose max-w-none">
                </article>
            </DisclosurePanel>
        </Disclosure>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.answer))

</script>