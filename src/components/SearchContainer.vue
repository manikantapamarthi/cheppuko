<script setup>
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import AutoComplete from 'primevue/autocomplete';
  import MoviesSearchService  from "../utils/moviesSearchService.js"
</script>
<script>
  export default {
    data(){
      return {
        selectedMovie: null,
      }
    },
    moviesSearchService: null,
    created() {
		  this.moviesSearchService = new MoviesSearchService();
	  },
    methods: {
      searchMovie(event){
        console.log(this.moviesSearchService)
        this.moviesSearchService.search(event.query);
      }
    },
    props: ['counter', 'count', "getSrc"],

  }
</script>
<template>
  <div class="flex gap-3 justify-content-center mb-4">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <AutoComplete @complete="searchMovie($event)" optionLabel="name"></AutoComplete>
      <!-- <InputText type="text"  placeholder="Search" /> -->
    </span>
    <span>
      <Button label="skip" @click="counter"/>
    </span>
  </div>
  <div class="mt-2 text-center">
    <Button  v-for="n in (count)" class="mr-2" @click="getSrc(n)">{{n}}</Button>
  </div>
</template>