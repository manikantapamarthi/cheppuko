<script>
import { re } from 'semver';

  export default {
    props: ['count']
  }
</script>

<template>
  <div>
    <img :src="(`../../public/${count+1}.png`)" alt="1stpic">
  </div>
</template>

<style>
  img {
    max-width: 100%;
    min-width: 100%;
  }
</style>