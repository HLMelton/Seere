<template>
    <div class="flex flex-col">
      <div class="item-container">
        <button class="item-icon"> 
          <Item icon="eggs" /> 
        </button>
        <button class="item-icon"> 
          <Item icon="milk" /> 
        </button>
      </div>
      <div class="result-container">
        <li v-for="result in results">
          {{ result }}
        </li>
      </div>
    </div>
</template>

<script lang="ts">


const axios = require('axios')

// TODO: Figure out why Cheerio is mad at me. 
//       Though we need to get the data from 
//       the page before we worry about handling it. 

// const cheerio = require('cheerio')

const url: String =  'https://www.walmart.com/ip/Great-Value-2-Reduced-Fat-Milk-128-Fl-Oz/10450115';

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
    // getPrices(vendor){
    //     change this to the object db reference after initial test
    //     axios({
    //       method: 'get',
    //       url: this.vendorUrl: String,
    //     })
    //     .then(function (response: any){
    //       let html = response.data;

    //       // let $ = cheerio.load(html)
    //       // TODO: Find why the content of the html is returning as the content of the current page rather than the page requested. 

    //       console.log(html)
    //     })
    //   }
    },


 }
</script>