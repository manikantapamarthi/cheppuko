<script setup>
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
</script>
<script>
  export default {
    data() {
      return {
        counter: 0
      }
    }
  }
</script>
<template>
  <div class="flex gap-3">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText type="text" v-model="value" placeholder="Search" />
    </span>
    <span>
      <Button label="skip" @click="counter++"/>
    </span>
  </div>
  <div>
    <Button  v-for="n in counter">{{n}}</Button>
  </div>
</template>