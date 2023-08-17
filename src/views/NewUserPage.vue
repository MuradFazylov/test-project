<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "../stores/user";
const userStore = useUserStore();
const userDetail = ref<any>({})
</script>

<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <div class="row q-col-gutter-lg q-mb-md">
          <div class="col">
            <q-input outlined v-model="userDetail.firstname" label="Login" />
          </div>
          <div class="col">
            <q-input outlined v-model="userDetail.lastname" label="Password" />
          </div>
        </div>
        <div class="row q-col-gutter-lg q-mb-md">
          <div class="col">
            <q-input outlined v-model="userDetail.email" label="E-mail" />
          </div>
        </div>
        <div class="row q-col-gutter-lg q-mb-md">
          <div class="col">
            <q-input outlined v-model="userDetail.phone" label="Phone" />
          </div>
        </div>
        <div class="row q-col-gutter-lg q-mb-md">
          <div class="col">
            <q-input outlined v-model="userDetail.gender" label="Gender" />
          </div>
        </div>
        <div class="row q-col-gutter-lg q-mb-md">
          <div class="col">
            <q-input outlined v-model="userDetail.nation" label="Nation" />
          </div>
        </div>
        <q-btn color="primary" label="Create" @click="userStore.createUser({...userDetail})"/>
      </div>
      <div class="col">
        {{ userDetail.bio }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>