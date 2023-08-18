<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "../stores/user";
import router from "@/router";


const userStore = useUserStore();
const userDetail = ref<any>({})

const createUser = async () => {
  const result = await userStore.createUser({...userDetail.value});
  if (result === 201) {
    router.push(`/`)
  }
}
</script>

<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <div class="row q-col-gutter-lg q-mb-md">
          <div class="col">
            <q-input outlined v-model="userDetail.firstname" label="Firstname" />
          </div>
          <div class="col">
            <q-input outlined v-model="userDetail.lastname" label="Lastname" />
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
        <q-btn color="primary" label="Create" @click="createUser"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>