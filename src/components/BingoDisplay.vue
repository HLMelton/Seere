<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useDeckStore } from '../store/deck';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const currentDeck = ref([]);
        const store = useDeckStore();

        const { cards } = storeToRefs(store);

        // Start Shuffle Function Here (Using Fisher-Yates Shuffle Algorythm)
        function shuffle(deckArray: []) {
            console.log('Initial Array:')
            console.log(deckArray)
            let currentIndex = deckArray.length, randomIndex;

            // While there are elements to shuffle
            while (currentIndex != 0) {

                // Pick the remaining element(s)
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // Swap the elements
                [deckArray[currentIndex], deckArray[randomIndex]] = [
                    deckArray[randomIndex], deckArray[currentIndex]];
            }
            console.log('Shuffle Array:')
            console.log(deckArray)
            return deckArray
        }
        // End shuffle function here
        

        return { store, cards, shuffle, }  
    },
})
</script>

<template>
    <div class="grid grid-cols-5 space-y-1 space-x-1 p-5">
        <!-- Abstract the classes into custom card components -->
        <!-- Aight we got reactivity, now lets randomize it -->
        <div v-for="cardItem in cards" :key="cardItem.id" class="bg-[#344966] text-[#F0F4EF] p-1 rounded-md m-1">
                <span>  temp: {{ cardItem.card }} </span>
        </div>
    </div>
    <!-- Impliment Shuffle function after pulling the items into an array for this component-->
    <div class="flex flex-col items-center">
        <button class="bg-[#B4CDED] text-[#0D1821] px-2 py-1 rounded-xl" @click="shuffle([1,2,3,4,5,6,7,8,9,10,11,12])">
            Generate
        </button>
    </div>

</template>