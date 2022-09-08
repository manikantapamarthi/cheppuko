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
  <div class="flex gap-3">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text"  placeholder="Search" />
    </span>
    <span>
      <Button label="skip" @click="counter"/>
    </span>
  </div>
  <div class="mt-2">
    <Button  v-for="n in count" class="mr-2">{{n}}</Button>
  </div>
</template>