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
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">Amount of loan</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">Scale fee</th>
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
        price: 'For the first RM500,000', 
       percentage: '1.25% (subject to a minimum of RM500)'
    },

    { 
        price: 'RM 500,001 to RM 7,500,000', 
       percentage: '1%'
    },

    { 
        price: 'Any amount exceeding RM7,500,000', 
       percentage: 'Subject to negotiation on the excess but shall not exceed 1% of such excess'
    },


]
</script>