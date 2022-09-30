<template>
    <div>
        <h1>Testing Home</h1>
    </div>
</template>

<script>

const axios = require('axios')
// TODO: Figure out why Cheerio is mad at me. 
// const cheerio = require('cheerio')

export default {
  data(){
    return{
        latestPrices: [],
    }
  },
  name: 'Home',
  methods:{
    getPrices(){
        // change this to the object db reference after initial test
        let url = 'https://www.target.com/p/2-reduced-fat-milk-1gal-good-38-gather-8482/-/A-13276204#lnk=sametab'
    }
  },
  created(){
    this.getPrices();
  }
}
</script>