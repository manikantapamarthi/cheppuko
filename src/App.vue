<script setup>
import NavBar from "./components/NavBar.vue";
import FramesContainer from "./components/FramesContainer.vue";
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
      
    </div>
  </div>
</template>

<style scoped>
  .header {
    width: 450px;
    margin: 0 auto;
  }

</style>
