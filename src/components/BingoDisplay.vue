<script lang="ts">
import { useLibraryStore } from '../store/library';
import { ref } from 'vue';

export default {
    setup() {
        const store = useLibraryStore();
        const testArray = ref([])
        
        return testArray
    },
    methods:{

    }
}
</script>

<template>
    <div class="grid grid-cols-5 space-y-1 space-x-1 p-5">
        <!-- add randomization of each vslot and map each randomized element in the array to each slot. -->
        <!-- Also abstract the classes into custom card components -->
        <li v-for="card in testArray"> {{ card }}</li>

    </div>
    <h1 class="text-center">
        Put the Generate Button Here 
    </h1>
</template>