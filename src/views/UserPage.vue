<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {useUserStore} from "../stores/user";
const userStore = useUserStore();
import { useRoute } from 'vue-router';
import router from "../router";
const userDetail = ref<any>({})
const route = useRoute();
onBeforeMount(async () => {
  if (route?.params?.id) {
    let id: string = String(route.params.id);
    userDetail.value = await userStore.getUserDetail(id);
  }
})

const deleteUser = async () => {
  let result = await userStore.deleteUser({...userDetail.value});
  if (result == 200) {
    router.push(`/`);
  }
}
</script>

<template>
  <div class="q-pa-md example-row-equal-width">

    <div class="row">
      <div class="col">
        {{userDetail}}
        <div class="col-4">
          <q-img
              :src="userDetail.avatar"
              :ratio="1"
              loading="lazy"
              spinner-color="white"
              style="max-width: 200px"
          />
        </div>
        <div class="row q-col-gutter-lg">
          <div class="col">
            <q-input outlined v-model="userDetail.firstname" label="Login" />
          </div>
          <div class="col">
            <q-input outlined v-model="userDetail.lastname" label="Password" />
          </div>
        </div>
        <div class="row q-col-gutter-lg">
          <div class="col">
            <q-input outlined v-model="userDetail.email" label="E-mail" />
          </div>
        </div>
        <div class="row q-col-gutter-lg">
          <div class="col">
            <q-input outlined v-model="userDetail.phone" label="Phone" />
          </div>
        </div>
        <div class="row q-col-gutter-lg">
          <div class="col">
            <q-input outlined v-model="userDetail.gender" label="Gender" />
          </div>
        </div>
        <div class="row q-col-gutter-lg">
          <div class="col">
            <q-input outlined v-model="userDetail.nation" label="Nation" />
          </div>
        </div>
        <q-btn color="secondary" label="Edit" @click="userStore.editUserDetail({...userDetail})"/>
        <q-btn color="red" label="Delete" @click="deleteUser"/>
      </div>
      <div class="col">
        {{ userDetail.bio }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>