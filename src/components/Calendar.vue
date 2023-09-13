<template>
    <div
        class="w-[843px] h-[120px] bg-[#053B50] mt-[50px] ml-[12px] rounded-lg text-center text-[20px] text-white drop-shadow-[4px_4px_rgba(5,59,80,0.2)]">
        <p class="pt-[8px]">Voulliez selectione une date </p>
        <VueDatePicker class="p-5" v-model="date" range :preset-dates="presetDates"
            placeholder="Voulliez selectione une date">
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
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const date = ref();

const presetDates = ref([
    { label: 'Today', value: [new Date(), new Date()] },
    {
        label: 'Today (Slot)',
        value: [new Date(), new Date()],
        slot: 'preset-date-range-button'
    },
    { label: 'This month', value: [startOfMonth(new Date()), endOfMonth(new Date())] },
    {
        label: 'Last month',
        value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
    },
    { label: 'This year', value: [startOfYear(new Date()), endOfYear(new Date())] },
]);
</script>