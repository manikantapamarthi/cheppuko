<script setup>
import NavBar from "./components/NavBar.vue";
import FramesContainer from "./components/FramesContainer.vue";
import SearchContainer from "./components/SearchContainer.vue";
import { MAX_ATTEMPTS } from "./utils/constants";
</script>
<script>
  export default {
    data() {
      return {
        count: 0,
        imageSrc: ""
      }
    },
    methods: {
      counter() {
        console.log(this.count)
        if(this.count < MAX_ATTEMPTS) {
          this.count++
          localStorage.setItem("button", this.count)
        }
      },
      getSrc(n){
        this.imageSrc = `${n}.png`
        localStorage.setItem('currentIndex', n)
      } 
    },
    mounted() {
      this.count = parseInt(localStorage.getItem("button")) || 1
    }
  }
</script>

<template>
  <div class="card header">
    <div class="flex align-items-center justify-content-between">
      <NavBar/>
    </div>
    <div class="frames">
      <FramesContainer :count="this.count" :imageSrc="this.imageSrc"/>
    </div>
    <div class="search-box mt-4">
      <SearchContainer :counter="counter" :count="this.count" :getSrc="getSrc"/>
    </div>
  </div>
</template>

<style scoped>
  .header {
    width: 450px;
    margin: 0 auto;
  }
</style>
