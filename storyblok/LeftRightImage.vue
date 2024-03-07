<template>
      <!-- img -->
      <div v-editable="blok" class="relative mx-auto order-first lg:order-last" aria-hidden="true">
        <nuxt-img 
        v-if="blok.image?.filename" 
        class="relative mx-auto rounded-lg" 
        :src="blok.image.filename + '/m/450x0'" 
        width="432" 
        height="705" 
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :alt="blok.image.alt" />
    </div>

    <!-- content -->
    <div class="order-last lg:order-first" v-editable="blok">
        <div class="space-y-8 ">
            <StoryblokComponent v-for="blok in blok.title_desc" :key="blok._uid" :blok="blok" />
        </div>
    </div>
  


    
</template>

<script setup>
const props = defineProps({ blok: Object, raw: Object, })
</script>


  