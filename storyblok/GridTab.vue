<template>
    <div v-editable="blok">

        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <div class="max-w-5xl mx-auto">
                <ul class="flex justify-center flex-wrap -mb-px  font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="inframod-tab" data-tabs-target="#inframod" type="button" role="tab" aria-controls="inframod" aria-selected="false">infraMod</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="devdata-tab" data-tabs-target="#devdata" type="button" role="tab" aria-controls="devdata" aria-selected="false">Development & Data
                            Analytics</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="google-work-chrome-tab" data-tabs-target="#google-work-chrome" type="button" role="tab" aria-controls="google-work-chrome"
                            aria-selected="false">Google Workplace & Chrome</button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="others-tab" data-tabs-target="#others" type="button" role="tab" aria-controls="others" aria-selected="false">Others</button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- content -->
        <div class="max-w-4xl mx-auto">
            <div id="default-tab-content">
                <div class="hidden mt-10" id="inframod" role="tabpanel" aria-labelledby="inframod-tab">
                    <div class="w-full flex flex-col sm:flex-row gap-10 items-center justify-center">
                        <StoryblokComponent v-for="blok in blok.inframod" :key="blok._uid" :blok="blok" />
                    </div>
                </div>
                <div class="hidden mt-10" id="devdata" role="tabpanel" aria-labelledby="devdata-tab">
                    <div class="w-full flex flex-col sm:flex-row gap-10 items-center justify-center">
                        <StoryblokComponent v-for="blok in blok.devdata" :key="blok._uid" :blok="blok" />
                    </div>
                </div>
                <div class="hidden mt-10" id="google-work-chrome" role="tabpanel" aria-labelledby="google-work-chrome-tab">
                    <div class="w-full flex flex-col sm:flex-row gap-10 items-center justify-center">
                        <StoryblokComponent v-for="blok in blok.google_work_chrome" :key="blok._uid" :blok="blok" />
                    </div>
                </div>
                <div class="hidden mt-10" id="others" role="tabpanel" aria-labelledby="others-tab">
                    <div class="w-full flex flex-col sm:flex-row gap-10 items-center justify-center">
                        <StoryblokComponent v-for="blok in blok.others" :key="blok._uid" :blok="blok" />
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Tabs } from 'flowbite';
import {
    // initAccordions, 
    // initCarousels, 
    // initCollapses, 
    // initDials, 
    // initDismisses, 
    // initDrawers, 
    // initDropdowns, 
    // initModals, 
    // initPopovers, 
    initTabs,
    initTooltips
} from 'flowbite'
const props = defineProps({ blok: Object })

// initialize components based on data attribute selectors
onMounted(() => {
    // initAccordions();
    // initCarousels();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    // initDropdowns();
    // initModals();
    // initPopovers();
    initTabs();
    // initTooltips();
})




</script>