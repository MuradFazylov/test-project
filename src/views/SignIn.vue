<script setup lang="ts">
import {ref} from "vue";
import {useTokenStore} from "../stores/sign-in";
import router from "@/router";

const storeToken = useTokenStore();
const login = ref<string>('');
const password = ref<string>('');

const SignIn = async () => {
  let result = await storeToken.login(login.value, password.value);
  if (result == 201) {
    router.push(`/`)
  }
}
const SignUp = async () => {
  router.push(`/sign-up`)
}

</script>

<template>
  <div class="column justify-center" style="height: 100vh">
    <div class="self-center login">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">SignIn</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="login" label="Login" class="q-pb-md"/>
          <q-input outlined v-model="password" label="Password" class="q-pb-md"/>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-btn color="secondary" label="SignIn" @click="SignIn"/>
          <q-btn flat color="secondary" label="SignUp" @click="SignUp"/>
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