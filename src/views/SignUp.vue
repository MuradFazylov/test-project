<script setup lang="ts">

import {ref} from "vue";
import {useTokenStore} from "../stores/sign-in";
import router from "@/router";
const storeToken = useTokenStore();

const login = ref<string>('');
const password = ref<string>('');
const firstname = ref<string>('');
const lastname = ref<string>('');

const SignUp = async () => {
  const data = {
    login: login.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value,
  }
  let result = await storeToken.registration(data);
  if (result == 201) {
    router.push(`/sign-in`)
  }
}

</script>

<template>
  <div class="column justify-center" style="height: 100vh">
    <div class="self-center login">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">SignUp</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="firstname" label="Firstname" class="q-pb-md"/>
          <q-input outlined v-model="lastname" label="Lastname" class="q-pb-md"/>
          <q-input outlined v-model="login" label="Login" class="q-pb-md"/>
          <q-input outlined v-model="password" label="Password" class="q-pb-md"/>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-btn color="secondary" label="SignUp" @click="SignUp"/>
          <q-btn flat color="secondary" label="SignIn" />
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