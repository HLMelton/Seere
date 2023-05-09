<script lang="ts">
import BingoInput from './components/BingoInput.vue'
import BingoDisplay from './components/BingoDisplay.vue';

export default {
  components:{
    BingoInput,
    BingoDisplay,
  },
  setup(){
  },
}
</script>

<template>
  <h1 class="text-white absolute w-screen text-center pt-1 text-5xl">Seere</h1>
  <div class="bg-[url(./appBG.jpg)] bg-cover h-screen w-screen pt-16">
    <div class="bg-[#B4CDED] h-[90%] w-[90%] mx-auto flex flex-row space-x-3 pt-3 pb-3 px-3 rounded-lg">

      <div class="bg-[#F0F4EF] flex-1 rounded-lg">
        <BingoInput />
      </div>

      <div class="bg-[#F0F4EF] flex-1 rounded-lg">
        <BingoDisplay />
      </div>

    </div>
  </div>
</template>