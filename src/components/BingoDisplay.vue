<script lang="ts">
import { useLibraryStore } from '../store/library';

export default {
    setup() {
        const store = useLibraryStore();
    },
    methods:{

    }
}
</script>

<template>
    <h1 class="text-center">
        Display The Card Here 
    </h1>
    <h1 class="text-center">
        Put the Generate Button Here 
    </h1>
</template>