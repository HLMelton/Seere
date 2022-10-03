<template>
    <div class="flex flex-col">
      <div class=" pt-2 min-width-9 w-16 h-12 rounded-b-md bg-[#75B8C8] content-center text-center text-white">
        <h1>test</h1>
      </div>
    </div>
</template>

<script lang="ts">


const axios = require('axios')

// TODO: Figure out why Cheerio is mad at me. 
//       Though we need to get the data from 
//       the page before we worry about handling it. 

// const cheerio = require('cheerio')

const url: String =  'https://www.target.com/p/2-reduced-fat-milk-1gal-good-38-gather-8482/-/A-13276204';

//  TODO: Figure out where you can and cannot 
//        inject the URL into different functions. Also 
//        check on the method of reporting prices and whether 
//        or not the function need be in this object or on the 
//        serverside. 


export default {
  props: {
    goods: [],
  },
  name: 'Pricing',
  methods: {
    getPrices(vendor: {vendorUrl: String, vendorName: String}){
        // change this to the object db reference after initial test
        // axios({
        //   method: 'get',
        //   url: this.vendorUrl: String,
        // })
        // .then(function (response: any){
        //   let html = response.data;

        //   // let $ = cheerio.load(html)
        //   // TODO: Find why the content of the html is returning as the content of the current page rather than the page requested. 

        //   console.log(html)
        // })
      }
    },
 }
</script>