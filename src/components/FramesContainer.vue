<script>

  export default {
    props: {
      count: Number,
      imageSrc: String
    }
  }
</script>

<template>
  <div>
    <img :src="imageSrc ? imageSrc : `${count}.png`" alt="1stpic">
  </div>
</template>

<style>
  img {
    max-width: 100%;
    min-height: 100%;
  }
</style>