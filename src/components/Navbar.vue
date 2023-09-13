<template>
    <div
        class="flex flex-1 gap-3 text-[20px] text-black bg-[#D8D8D8] drop-shadow-[4px_4px_rgba(217,217,217,0.25)] h-[67px] w-[542px] laptop:rounded-br-[20px] phone:border-br-none">
        <router-link to="/" class="font-semibold basis-1/3 text-center mt-[3%] phone:mt-4">All</router-link>
        <p class="font-semibold basis-1/3 text-center mt-[3%] phone:mt-4 hover:hidden opacity-60">Media</p>
        <div class="bg-[#EBEBEB] w-[150px] h-[48px] rounded-full mt-[9px] mr-5 hover:w-[350px] duration-300 inline-flex"
            @mouseover="showSettingsLogout" @mouseout="hideSettingsLogout">
            <p class="font-semibold text-center mt-2 ml-6" :class="{ 'hidden': isHovered, 'duration-300': !isHovered }">
                User
            </p>
            <p class="font-semibold text-center mt-2 ml-6" :class="{ 'hidden': !isHovered, 'duration-300': isHovered }">
                Settings
            </p>
            <p class="font-semibold text-center mt-2 ml-6" :class="{ 'hidden': !isHovered, 'duration-300': isHovered }">
                Logout
            </p>
            <img :src="Avatare" class="absolute h-[48px] inset-y-0 right-5 top-[.8rem]" />
        </div>
    </div>
</template>

<script setup>
import Avatare from "../image/Ellipse 2.png";
import { ref } from "vue";

const isHovered = ref(false);

const showSettingsLogout = () => {
    isHovered.value = true;
};

const hideSettingsLogout = () => {
    isHovered.value = false;
};
</script>
