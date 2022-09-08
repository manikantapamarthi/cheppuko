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
        count: 0
      }
    },
    methods: {
      counter() {
        if(this.count < MAX_ATTEMPTS) {
          console.log(this.count++)
        }
      } 
    }
  }
</script>

<template>
  <div class="card header">
    <div class="flex align-items-center justify-content-between">
      <NavBar/>
    </div>
    <div class="frames">
      <FramesContainer/>
    </div>
    <div class="search-box">
      <SearchContainer :counter="counter" :count="this.count"/>
    </div>
  </div>
</template>

<style scoped>
  .header {
    width: 450px;
    margin: 0 auto;
  }

</style>
