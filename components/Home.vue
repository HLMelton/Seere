<template>
    <div>
        <h1>Testing Home</h1>
    </div>
</template>

<script>

const axios = require('axios')
// TODO: Figure out why Cheerio is mad at me. 
// const cheerion = require('cheerio')

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
        let url = 'https://www.target.com/p/2-reduced-fat-milk-1gal-good-38-gather-8482/-/A-13276204';

        axios({
          method: 'get',
          url: url,
        })
        .then(function (response){
          let html = response.data;

          // let $ = cheerio.load(html)
          console.log('pre')
          // TODO: Find why the content of the html is returning as the content of the current page rather than the page requested. 
          console.log(html)
          console.log('post')
        })

    }
  },
  created(){
    this.getPrices();
  }
}
</script>