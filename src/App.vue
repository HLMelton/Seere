<script lang="ts">
import BingoInput from './components/BingoInput.vue'
import BingoDisplay from './components/BingoDisplay.vue';

export default {
  components:{
    BingoInput,
    BingoDisplay,
  },
}
</script>

<template>
  <div class="bg-slate-600 h-screen w-screen pt-10">
    <div class="bg-slate-300 h-[80%] w-[80%] mx-auto flex space-x-3 pt-3 pb-3 px-3 rounded-md">
    <!-- TODO: Fix CSS Classes to be an abstract style for the container -->
      <div class="bg-white flex-1 rounded-lg">
        <BingoInput />
      </div>
      <div class="bg-white flex-1 rounded-lg">
        <BingoDisplay />
      </div>
    </div>
  </div>
</template>