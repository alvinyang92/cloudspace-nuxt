<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300 !mt-0 !mb-0">

                            <!-- table title -->
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">The purchase price or market value of the property, whichever is higher (‘Adjudicated value’)</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">Setem Duti (% of the adjudicated value)</th>
                                </tr>
                            </thead>

                            <!-- table content -->
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="person in people">
                                    <td class="px-3 py-3.5 text-sm font-medium text-gray-900">{{ person.price }}</td>
                                    <td class=" px-3 py-3.5 text-sm text-gray-500">{{ person.percentage }}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const people = [
    { 
        price: 'First RM 100,000', 
       percentage: '1%'
    },

    { 
        price: 'RM 100,001 to 500,000', 
       percentage: '2%'
    },

    { 
        price: 'RM 500,001 to RM1,000,000', 
       percentage: '3%'
    },

    { 
        price: 'Any amount exceeding RM1,000,000', 
       percentage: '4%'
    },


]
</script>