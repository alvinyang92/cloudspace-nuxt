  <template>
    <article class="flex flex-col items-start justify-between">
      <nuxt-link class="w-full" :to="'/' + slug" v-editable="postcard">
        <!-- image -->
        <nuxt-img v-if="postcard.image?.filename" class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover" :src="postcard.image.filename + '/m/800x0'" :alt="postcard.image.alt" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" width="300" height="200" preload />

        <!-- <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> -->
        <!-- content -->
        <div class="max-w-xl">
        
          <!-- date & badge -->
          <div class="mt-8 flex items-center gap-x-4 text-xs">
            <!-- date -->
            <time :datetime="postcard.date" class="text-gray-500">{{ moment(postcard.date).format('MMMM D, YYYY') }}</time>
            <!-- badge categeory -->
            <span v-for="item in postcard.category" class="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              {{ item.name }}
            </span>
          </div>
          <!-- title & desc -->
          <div class="group relative">
            <!-- title -->
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {{ postcard.title }}
            </h3>
            <!-- desc -->
            <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{{ postcard.featured_desc }}</p>
          </div>
          <!-- read more cta -->
          <div class="relative mt-4 flex items-center gap-x-4 ">
            <div class="text-sm border-b pb-1">Read More<span aria-hidden="true" class="ml-1">→</span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </article>
  </template>

  <script setup>
  import moment from 'moment';
  const props = defineProps({ postcard: Object, slug: String, raw: Object })
  const posts = ref(null)
  // const articleImage = ref('');

  const storyblokApi = useStoryblokApi()



  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'published',
    starts_with: 'articles',
    is_startpage: false,
    resolve_relations: ['article-page.category'],
  })
  posts.value = data.stories

  // // Fetch the article image data if it doesn't exist in local storage on component mount
  // onMounted(() => {
  //     const cachedImage = localStorage.getItem('articleImage');
  //     if (!cachedImage) {
  //         // Assuming postcard.image.filename is the image path or identifier associated with the article
  //         articleImage.value = postcard.image.filename; // Modified this line to use postcard.image.filename
          
  //         // Store the article image data in local storage for future reference
  //         localStorage.setItem('articleImage', articleImage.value);
  //     } else {
  //         articleImage.value = cachedImage;
  //     }
  // });

  </script>
