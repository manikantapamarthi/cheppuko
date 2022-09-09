<script setup>
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
</script>
<script>
  export default {
    props: ['counter', 'count'],

  }
</script>
<template>
  <div class="flex gap-3 justify-content-center mb-4">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text"  placeholder="Search" />
    </span>
    <span>
      <Button label="skip" @click="counter"/>
    </span>
  </div>
  <div class="mt-2 text-center">
    <Button  v-for="n in (count+1)" class="mr-2">{{n}}</Button>
  </div>
</template>