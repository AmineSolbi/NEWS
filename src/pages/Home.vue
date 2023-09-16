<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <div class="items-center w-full">
            <Calendar />
        </div>

        <main class="mt-12 p-5 w-full">
            <!-- Tabs section -->
            <div class="px-4 md:px-8">
                <ul role="tablist"
                    class="max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm">
                    <li v-for="(item, idx) in tabItems" :key="idx" class="py-2 border-b-2" :class="{
                        'border-indigo-600 text-indigo-600': selectedItem === idx,
                        'border-white text-gray-500': selectedItem !== idx,
                    }">
                        <button role="tab" :aria-selected="selectedItem === idx" :aria-controls="`tabpanel-${idx + 1}`"
                            class="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                            @click="setSelectedItem(idx)">
                            {{ item }}
                        </button>
                    </li>
                </ul>
            </div>

            <!-- Table section -->
            <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <div v-if="filteredData.length === 0" class="text-center mt-4 pb-5 font-bold text-red-500">
                    <p>Il n'y a pas d'articles concernant cette date {{ datefetch }}</p>
                </div>
                <table class="w-full table-auto text-sm text-left phone:w-full">
                    <thead class="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr class="text-center">
                            <th class="py-3 px-6">Sentiment</th>
                            <th class="py-3 px-6">Titre de l'article</th>
                            <th class="py-3 px-6">Source</th>
                        </tr>
                    </thead>

                    <tbody class="text-gray-600 divide-y divide-gray-200 justify-self-start">

                        <tr v-for="(item, index) in filteredData" :key="item.id"
                            :class="{ 'bg-gray-100': index % 2 === 0 }">

                            <td class="text-center">
                                <div class="flex justify-center items-center">
                                    <img :src="item.sentiment" :alt="item.sentiment" />
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap ">
                                <div class="group cursor-pointer w-[90%]">
                                    {{ item.titre }}
                                    <div class=" hidden group-hover:block bg-[#337CCF] rounded-lg text-white p-5">
                                        <div>
                                            <p>Auteur : {{ item.auteur }}</p>
                                        </div>
                                        <div>
                                            <p>Date de publication : {{ item.date }}</p>
                                        </div>
                                        <div>
                                            <p>Résumer :</p>
                                            <div class="mt-2 bg-[#779dc9] rounded-lg p-5 w-full whitespace-pre-line">
                                                <p>{{ item.resume }}</p>
                                            </div>

                                        </div>
                                        <div class="mt-5">
                                            <a :href="item.url" class="bg-[#779dc9] p-3 rounded-lg font-bold">Voire les
                                                details</a>
                                        </div>

                                    </div>
                                </div>
                            </td>
                            <td class="text-center phone:text-left"> <!-- Adjust alignment for mobile -->
                                <div class="flex justify-center items-center">
                                    {{ item.source[0].nom }}
                                    <img :src="item.source[0].image" class="ml-3 -mt-1" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <footer class="bg-[#053B50] mt-auto">
            <p class="text-[#D0D1D3] p-10">Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility, User
                Agreement,
                Privacy, Payments Terms
                of Use, Cookies, Your Privacy Choices and AdChoice</p>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAPIendpointsStore } from '../store';
import { format } from 'date-fns';
import Navbar from '../components/Navbar.vue';
import Calendar from '../components/Calendar.vue';
const apiEndpointsStore = useAPIendpointsStore();
const data = ref(apiEndpointsStore.data);

function formatDateToJSONFormat(dateArray) {
    if (dateArray && dateArray.length > 0) {
        const startDate = dateArray[0];
        const formattedStartDate = format(startDate, 'yyyy-MM-dd');

        if (dateArray[1]) {
            const endDate = dateArray[1];
            const formattedEndDate = format(endDate, 'yyyy-MM-dd');
            return [formattedStartDate, formattedEndDate];
        } else {
            return [formattedStartDate];
        }
    }
    return null;
}

const selectedDateRange = computed(() => {
    return formatDateToJSONFormat(apiEndpointsStore.DateCalendar);
});

const datefetch = ref(selectedDateRange);

const tabItems = ["Tous", "Positif", "Négatif", "Neutre"];
const selectedItem = ref(0);

function setSelectedItem(idx) {
    selectedItem.value = idx;
}

const filteredData = computed(() => {
    if (datefetch.value && datefetch.value.length > 0) {
        const startDate = new Date(datefetch.value[0]);
        const endDate = datefetch.value.length > 1 ? new Date(datefetch.value[1]) : null;

        if (endDate) {
            return data.value.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate >= startDate && itemDate <= endDate;
            });
        } else {
            return data.value.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate >= startDate && itemDate <= startDate;
            });
        }
    } else if (selectedItem.value === 1) {
        return data.value.filter(item => item.sentiment === "src/image/square-caret-up-solid 1.png");
    } else if (selectedItem.value === 2) {
        return data.value.filter(item => item.sentiment === "src/image/Vector.png");
    } else if (selectedItem.value === 3) {
        return data.value.filter(item => item.sentiment === "src/image/dash.png");
    } else {
        return data.value;
    }
});
</script>



