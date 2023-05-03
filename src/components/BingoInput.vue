<script lang="ts">
import {ref, defineComponent} from 'vue';
import { useDeckStore } from '../store/deck';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const card = ref("")
        const store = useDeckStore();

        const { cards } = storeToRefs(store);

        function addCard(cardInput: string){
            if (cardInput.length === 0) {
                return;
            }
            store.addCard(cardInput)
            card.value="";
        }
        return{ card, cards, addCard, store };
    },
})
</script>

<template>

    <form @submit.prevent="addCard(card)" class="flex flex-col items-center p-5">
        <div class="flex flex-row">
            <input v-model="card" type="text" class="bg-gray-300 rounded-xl text-center"  />
        </div>
        <button class="bg-[#B4CDED] text-[#0D1821] px-2 py-1 rounded-xl w-1/3 mt-2">Add</button>
    </form>
    <div class="flex flex-col space-y-3 p-3 h-4/6 overflow-y-scroll">
        <div v-for="cardItem in cards" :key:number="cardItem.id" class="bg-[#344966] text-[#F0F4EF] p-1 rounded-md m-1 flex flex-row">
            <span class="flex-1 text-center"> {{ cardItem.card }} </span>
            <button class="flex-1 text-right pr-2" @click="store.removeCard(cardItem)"> X </button>
            <!-- Add the removal button here -->
        </div>
    </div>
</template>