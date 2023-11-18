<script setup>
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

import { RouterView } from 'vue-router'
</script>

<template>
  <TheNavbar></TheNavbar>

  <RouterView />

  <TheFooter></TheFooter>
</template>


