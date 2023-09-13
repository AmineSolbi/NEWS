<template>
    <div>
        <Navbar />
        <div class="items-center w-full"><Calendar /></div>
        
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
                            <td class="px-6 py-4 whitespace-nowrap">{{ item.titre }}</td>
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
        <footer class="bg-[#053B50] h-[107px] w-full mt-[6.6%] fixed">
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
import Navbar from '../components/Navbar.vue';
import Calendar from '../components/Calendar.vue';

const apiEndpointsStore = useAPIendpointsStore();
const data = ref(apiEndpointsStore.data);

// Tabs related logic
const tabItems = ["Tous", "Positif", "Négatif", "Neutre"];
const selectedItem = ref(0);

function setSelectedItem(idx) {
    selectedItem.value = idx;
}

// Computed property to filter data based on selected tab
const filteredData = computed(() => {
    if (selectedItem.value === 1) {
        // Filter positive items (image src: "square-caret-up-solid 1.png")
        return data.value.filter(item => item.sentiment === "src/image/square-caret-up-solid 1.png");
    } else if (selectedItem.value === 2) {
        // Filter negative items (image src: "Vector.png")
        return data.value.filter(item => item.sentiment === "src/image/Vector.png");
    } else if (selectedItem.value === 3) {
        // Filter neutral items (image src: "dash.png")
        return data.value.filter(item => item.sentiment === "src/image/dash.png");
    } else {
        // Return all items for other tabs
        return data.value;
    }
});
</script>

<style scoped>
/* Add your table styling here if needed */
</style>
