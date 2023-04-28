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
    <div class="flex flex-col space-y-3 p-3">

        <h1 class="text-center flex-1">
            Display Pool Here 
        </h1>
        <h1 class="text-center flex-1">
            Testing the Text Input Here 
        </h1>
        <h1 class="text-center flex-1">
            Input Submission Button Here 
        </h1>
    </div>
</template>