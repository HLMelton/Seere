<template>
  <div class="bg-[#CDD3D5] flex"> 
    <Navigation />  
    <!-- Find how to change the inputs based on methods within the page itself using toggle boxes -->
    <!-- Expected behavior not present, Issue with goods.length not updating content -->
    <Pricing />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
