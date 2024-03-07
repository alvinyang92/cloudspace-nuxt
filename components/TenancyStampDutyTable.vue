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
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Duration of the Tenancy (years)</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Amount of setem duti</th>
                                </tr>
                            </thead>

                            <!-- table content -->
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="person in people">
                                    <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ person.duration_tenancy }}</td>
                                    <td class="whitespace-pre-wrap w-[50%] px-3 py-4 text-sm text-gray-500">{{ person.amount_of_setem }}</td>
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
        duration_tenancy: '-', 
        amount_of_setem: "The first RM 2,400 of total annual rental is exempted from stamp duty.\n\nThen, every RM 250 of the balance annual rental or part of is calculated as:" 
    },

    { 
        duration_tenancy: 'Less than 1 year', 
        amount_of_setem: 'RM 1' 
    },

    { 
        duration_tenancy: '1 to 3 years', 
        amount_of_setem: 'RM 2' 
    },

    { 
        duration_tenancy: 'Exceeding 3 years', 
        amount_of_setem: 'RM 4' 
    },

]
</script>