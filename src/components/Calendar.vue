<template>
    <div class="w-96 bg-lime-950 mt-5 text-center text-white text-lg border-2 rounded-lg phone:ml-5 p-5">
        <p class="pb-5">Veuillez sélectionner une date </p>
        <VueDatePicker v-model="date" range placeholder="voulliez choisire une date" />
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useAPIendpointsStore } from '../store';
const apiEndpointsStore = useAPIendpointsStore();

const date = ref();

onMounted(() => {
    date.value = null;
})

watch(date, (newDate) => {
    console.log('Selected Date:', newDate);
    apiEndpointsStore.$patch(state => {
        state.DateCalendar = newDate;
    });
});
</script>
