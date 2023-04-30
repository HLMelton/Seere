<script lang="ts">
import {ref, defineComponent} from 'vue';
import { useLibraryStore } from '../store/library';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const card = ref("")
        const store = useLibraryStore();

        const { cards } = storeToRefs(store);

        function addCard(cardInput: string){
            if (cardInput.length === 0) {
                return;
            }
            store.addCard(cardInput)
            console.log(card.value)
            card.value="";
        }

        return{ card, cards, addCard, store };
    },
})
</script>

<template>
    <div class="flex flex-col space-y-3 p-3">

    <!-- Add proper stylings for the input area -->
        <form @submit.prevent="addCard(card)" class="flex flex-col">
            <input v-model="card" type="text" class="bg-gray-300 rounded-xl text-center" /><button>Add</button>
        </form>

    <!-- Add proper stylings for the diplay of the library area. Potentially eject into modal display -->
        <div class="">
            <div v-for="cardItem in cards" :key="cardItem.id" class="bg-blue-300 text-center p-1 rounded-md">
                <span> {{ cardItem.card }} </span>
            </div>
        </div>


    </div>
</template>