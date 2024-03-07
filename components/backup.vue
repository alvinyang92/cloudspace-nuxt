<template>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center gap-x-6">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a>
        <a href="#" class="ml-auto rounded-md bg-[#F43F5E] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#ca2b46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F43F5E]">Sign up</a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div class="py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- row2 -->
  <div class=" relative mt-10 flex gap-5 sm:gap-10 overflow-hidden">
    <!-- item-1 -->
    <div class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5 sm:gap-10 [animation-direction:reverse]">
    </div>
    <!-- item-2 -->
    <div aria-hidden="true" class="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5 sm:gap-10 [animation-direction:reverse]">

    </div>
  </div>



  <!-- tailwind connect -->
  <section class="mx-auto max-w-[1960px] p-4">
    <div class="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>

      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1" src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-48_ragwa4.jpg&w=828&q=75"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>
      <!-- item -->
      <a class="after:absolute after:content after:inset-0 after:pointer-events-none after:rounded-lg after:shadow-highlight block cursor-zoom-in group mb-5 relative w-full" href="/photos/p/0">
        <img alt="" loading="lazy" width="720" height="480" decoding="async" data-nimg="1"
          src="https://connect.tailwindcss.com/photos/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftailwind-labs%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fconnect%2Ftailwind-connect-9_cbjwwf.jpg&w=828&q=75&dpl=dpl_3dbam96REKLEtjnR7AqFDNcydJut"
          class="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110" style="color: transparent; transform: translate3d(0px, 0px, 0px);">
      </a>



    </div>
  </section>
</template>
