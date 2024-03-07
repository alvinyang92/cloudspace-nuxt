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
                                    <th scope="col" class="border-b border-gray-300 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"></th>
                                    <th scope="col"  colspan="2" class="border-l border-b border-gray-300 px-3 py-3.5 text-center text-sm font-bold text-gray-900">Monthly rental</th>
                                </tr>
                                <tr>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">Duration of rental (years)</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">Not more than RM 10,000</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 align-top">More than RM 10,000</th>
                                </tr>
                            </thead>

                            <!-- table content -->
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="table in table_content">
                                    <td class="px-3 py-3.5 text-sm font-medium text-gray-900">{{ table.duration_rental }}</td>
                                    <td class="px-3 py-3.5 text-sm font-medium text-gray-900">{{ table.less_Rm10k }}</td>
                                    <td class="px-3 py-3.5 text-sm font-medium text-gray-900">{{ table.more_Rm10k }}</td>
                                 
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

const table_content = [
    { 
        duration_rental: 'Up till 3 years', 
        less_Rm10k:'Legal fee is 30% of the monthly rental (subject to a minimum of RM 500)',
        more_Rm10k:'Legal fee is a minimum of 15% but not exceed 25% of the monthly rent',
    },
    { 
        duration_rental: 'More than 3 years', 
        less_Rm10k:'Legal fee is 60% of the monthly rent (subject to a minimum of RM1,000)',
        more_Rm10k:'Legal fee is a minimum of 30% but not exceeding 50% of the monthly rent',
    },



]
</script>