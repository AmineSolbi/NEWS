<template>
    <div class="w-96 bg-lime-950 mt-5 text-center text-white text-lg border-2 rounded-lg">
        <p class="pt-2">Veuillez selectioner une date </p>
        <VueDatePicker class="p-5" v-model="date" range :preset-dates="presetDates"
            placeholder="Veuillez selectioner une date">
            <template #preset-date-range-button="{ label, value, presetDate }">
                <span role="button" :tabindex="0" @click="presetDate(value)" @keyup.enter.prevent="presetDate(value)"
                    @keyup.space.prevent="presetDate(value)">
                    {{ label }}
                </span>
            </template>
        </VueDatePicker>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, startOfWeek, endOfWeek } from 'date-fns';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const date = ref();

const presetDates = ref([
    { label: "Aujourd'hui", value: [new Date(), new Date()] },
    {
        label: 'Cette semaine',
        value: [startOfWeek(new Date()), endOfWeek(new Date())]
    },
    { label: 'Ce mois-ci', value: [startOfMonth(new Date()), endOfMonth(new Date())] }
]);
</script>