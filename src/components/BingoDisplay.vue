<script lang="ts">
import { defineComponent } from 'vue';
import { useDeckStore } from '../store/deck';
import { storeToRefs } from 'pinia';


export default defineComponent({
    setup() {
        const store = useDeckStore();
        const { cards } = storeToRefs(store);
    
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

            <!-- TODO: Fix the buttons below -->
            <button v-for="cardItem in cards" class="bg-[#344966] text-[#F0F4EF] p-1 rounded-md m-1" @click="cards.statusChange(cardItem)">
                    <span v-if="cardItem.status === true" class="bg-gray-500 text-blue-300"> {{ cardItem.card }}</span>
                    <span v-else> {{ cardItem.card }} </span>
            </button>
        </div>

        <div class="flex flex-col items-center">
            <button class="bg-[#B4CDED] text-[#0D1821] px-2 py-1 rounded-xl" @click="shuffle(cards)">
                Generate
            </button>
        </div>

</template>