<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DefaultLayout from "./layouts/DefaultLayout.vue";
import LoginLayout from "./layouts/LoginLayout.vue";
import {computed, ref} from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed<'DefaultLayout'|'LoginLayout'>(() => {
  if(route?.meta?.layout === 'DefaultLayout'){
    return 'DefaultLayout'
  }
  return 'LoginLayout'
})
const tabs = {
  DefaultLayout: DefaultLayout,
  LoginLayout: LoginLayout
}
</script>

<template>
  <div id="app">
    <component :is="tabs[layout]">
      <RouterView />
    </component>
  </div>
</template>

<style scoped>
</style>
