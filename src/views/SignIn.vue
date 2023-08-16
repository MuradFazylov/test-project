<script setup lang="ts">

import {ref} from "vue";

const login = ref<string>('');
const password = ref<string>('');

</script>

<template>
  <div class="column justify-center" style="height: 100vh">
    <div class="self-center login">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="login" label="Login" />
          <q-input outlined v-model="password" label="Password" />
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-btn color="secondary" label="Login" />
<!--          {{login}}-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod-->
<!--          tempor incididunt ut labore et dolore magna aliqua.-->
<!--          {{password}}-->
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login{
  background: #ffffff;
  min-width: 400px;
}
</style>