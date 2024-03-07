<template>
    <div v-editable="blok" class="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">

        <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <!-- content -->
            <div>
                <dl class="space-y-10">
                    <div v-for="item in transferFeatures" :key="item.id">
                        <dt>
                            <!-- icon -->
                            <!-- <div 
            class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
              <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
            </div> -->
                            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ item.name }}</p>
                        </dt>
                        <dd class="ml-16 mt-2 text-base text-gray-500">{{ item.description }}</dd>
                    </div>
                </dl>
            </div>
            <!-- img -->
            <div 
            class="relative -mx-4 mt-10 lg:mt-0" 
            aria-hidden="true">
                <nuxt-img 
                class="relative mx-auto" 
                width="490" 
                src="https://tailwindui.com/img/features/feature-example-1.png" alt="" />
            </div>
        </div>


        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
                <!-- content -->
                <div class="lg:col-start-2">
                    <dl class="space-y-10">
                        <div 
                        v-for="item in communicationFeatures" 
                        :key="item.id" 
                       >
                            <dt>
                                <!-- <div class="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                                    <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
                                </div> -->
                                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ item.name }}</p>
                            </dt>
                            <dd class="ml-16 mt-2 text-base text-gray-500">{{ item.description }}</dd>
                        </div>
                    </dl>
                </div>
                <!-- right img -->
                <div 
                class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                    <nuxt-img 
                    class="relative mx-auto" 
                    width="490" 
                    src="https://tailwindui.com/img/features/feature-example-2.png" 
                    alt="" />
                </div>
        </div>
    </div>
</template>

<script setup>
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({ blok: Object, raw: Object, })


const transferFeatures = [
    {
        id: 1,
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        id: 2,
        name: 'Reminder emails',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: EnvelopeIcon,
    },
]

</script>
  