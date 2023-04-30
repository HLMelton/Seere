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
    </div>
    <h1 class="text-center">
        Put the Generate Button Here 
    </h1>
</template>