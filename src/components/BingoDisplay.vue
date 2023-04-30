<script lang="ts">
import { defineComponent } from 'vue';
import { useLibraryStore } from '../store/library';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const store = useLibraryStore();

        const { cards } = storeToRefs(store);
        console.log(cards)
        return { store, cards }  
    },
})
</script>

<template>
    <div class="grid grid-cols-5 space-y-1 space-x-1 p-5">
        <!-- Abstract the classes into custom card components -->
        <!-- Aight we got reactivity, now lets randomize it -->
        <div v-for="cardItem in cards" :key="cardItem.id" class="bg-blue-300 text-center p-1 rounded-md">
            <span> {{ cardItem.card }} </span>
        </div>
    </div>
    <h1 class="text-center">
        Put the Generate Button Here 
    </h1>
</template>