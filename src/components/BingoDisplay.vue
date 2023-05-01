<script lang="ts">
import { defineComponent } from 'vue';
import { useDeckStore } from '../store/deck';
import { storeToRefs } from 'pinia';


export default defineComponent({
    setup() {
        // const currentDeck = ref([]);
        const store = useDeckStore();

        const { cards } = storeToRefs(store);


        // This really shouldnt be an :any input for the shuffle function but its the only way it'll let me build
    
        function shuffle(deckArray: any) {
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
            return deckArray
        }
        // End Function Declarations
        return { store, cards, shuffle }  
    },
})
</script>

<template>

        <div class="grid grid-cols-5 space-y-1 space-x-1 p-5 flex-1">
            <!-- Abstract the classes into custom card components -->
            <!-- Aight we got reactivity, now lets randomize it -->
            <div v-for="cardItem in cards" class="bg-[#344966] text-[#F0F4EF] p-1 rounded-md m-1">
                    <span> {{ cardItem.card }} </span>
            </div>
        </div>
        <!-- Impliment Shuffle function after pulling the items into an array for this component-->
        <div class="flex flex-col items-center">
            <button class="bg-[#B4CDED] text-[#0D1821] px-2 py-1 rounded-xl" @click="shuffle(cards)">
                Generate
            </button>
        </div>

</template>