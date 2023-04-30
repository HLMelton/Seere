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
    <div class="flex flex-col space-y-3 p-3">

    <!-- Add proper stylings for the input area -->
        <form @submit.prevent="addCard(card)" class="flex flex-col items-center">
            <input v-model="card" type="text" class="bg-gray-300 rounded-xl text-center"  /><button class="bg-[#B4CDED] text-[#0D1821] px-2 py-1 rounded-xl w-1/3 mt-2">Add</button>
        </form>

    <!-- Add proper stylings for the diplay of the library area. Potentially eject into modal display -->
    <!-- Also make this div scrollable here when inputs overflow -->
        <div class="">
            <div v-for="cardItem in cards" :key="cardItem.id" class="bg-[#344966] text-[#F0F4EF] p-1 rounded-md m-1">
                <span> {{ cardItem.card }} </span>
            </div>
        </div>
    </div>
</template>