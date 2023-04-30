<script lang="ts">
import { defineComponent } from 'vue';
import { useDeckStore } from '../store/deck';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const store = useDeckStore();

        const { cards } = storeToRefs(store);
        return { store, cards }  
    },
})
</script>

<template>
    <div class="grid grid-cols-5 space-y-1 space-x-1 p-5">
        <!-- Abstract the classes into custom card components -->
        <!-- Aight we got reactivity, now lets randomize it -->
        <div v-for="cardItem in cards" :key="cardItem.id" class="bg-[#344966] text-[#F0F4EF] p-1 rounded-md m-1">
                <span> {{ cardItem.card }} </span>
        </div>
    </div>
    <!-- Impliment Shuffle function after pulling the items into an array for this component-->
    <div class="flex flex-col items-center">
        <button class="bg-[#B4CDED] text-[#0D1821] px-2 py-1 rounded-xl" @click="">
            Generate
        </button>
    </div>

</template>