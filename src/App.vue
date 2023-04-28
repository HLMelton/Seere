<script lang="ts">
import BingoInput from './components/BingoInput.vue'

export default {
  components:{
    BingoInput,
  },
}
</script>

<template>
  <div class="bg-slate-600 h-screen w-screen pt-10">
    <div class="bg-slate-300 h-[80%] w-[80%] mx-auto flex space-x-3 pt-3">
      <div class="bg-white">
        <TextInput />
      </div>
      <div class="bg-white">Score Card Output Area</div>
    </div>
  </div>
</template>