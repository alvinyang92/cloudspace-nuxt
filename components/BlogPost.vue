<template>
    <main v-if="data"  class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
   
   <!-- <pre>{{ data }}</pre> -->
   <h1 class="text-4xl">{{ data.title }}</h1>
   dwdwd
   <div class="text-2xl mt-4">{{ new Date(data.date).toLocaleDateString() }}</div>
   <article class="prose prose-sm mt-4 text-gray-500 max-w-none" v-html="data.content"></article>

</main>



</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
const uri = slug ? slug.join('/') : '';

const config = useRuntimeConfig();
const { data, pending, refresh, error } = await useFetch("https://staging.stimjiao.com/graphql", {
  method: 'get',
  query: {
    query: `
        query MyQuery3($uri: String!) {
            nodeByUri(uri: $uri) {
                ... on Post {
                    id
                    title
                    date
                    content
                }
            }
        }
        `,
    variables: {
      uri: uri
    }
  },
  transform(data) {
    return data.data.nodeByUri
  }
})
</script>
    
