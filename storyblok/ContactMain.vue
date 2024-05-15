<template>
  <div v-editable="blok" class="relative bg-cs-light-blue">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
        <div class="mx-auto max-w-2xl lg:mx-0">

          <!-- <img class="h-11" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company" />
          <div class="hidden sm:mt-32 sm:flex lg:mt-16">
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Anim aute id magna aliqua ad ad non deserunt sunt. <a href="#" class="whitespace-nowrap font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <h1 class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">Data to enrich your online business</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div> -->

          <h2 class="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
          <p class="mt-3 text-lg leading-8 text-white w-full sm:w-[70%]">We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, there are several ways you can reach out to us:</p>
          <dl class="mt-10 space-y-8 text-base leading-7 text-white ">

            <div class="flex flex-col gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Office</span>
                <p class="font-bold">Office</p>
                <!-- <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" /> -->
              </dt>
              <dd>
                <nuxt-link class="hover:text-gray-200 underline" to="https://maps.app.goo.gl/FqEyUPWK58hsm89n9" target="_blank" rel="noopener noreferrer">Block D-5-3, SETIAWALK, Persiaran Wawasan,<br> Pusat Bandar Puchong,<br> 47160 Puchong, Selangor</nuxt-link>
              </dd>
            </div>

            <div class="flex flex-col gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <!-- <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" /> -->
                <p class="font-bold">Telephone</p>
              </dt>
              <dd><a class="hover:text-gray-200 underline" href="tel:+603860036783">+603.8600.3678</a></dd>
            </div>

            <div class="flex flex-col gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <!-- <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" /> -->
                <p class="font-bold">Email</p>
              </dt>
              <dd><a class="hover:text-gray-200 underline" href="mailto:sales@cloud-space.co">sales@cloud-space.co</a></dd>
            </div>

          </dl>

        </div>
      </div>
      <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="https://a.storyblok.com/f/278050/720x1080/25a279b990/contact-banner.jpg/m/" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({ blok: Object })
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

</script>