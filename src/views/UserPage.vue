<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {useUserStore} from "../stores/user";
import { useRoute } from 'vue-router';
import router from "../router";

const userStore = useUserStore();
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
  if (result === 200) {
    router.push(`/`);
  }
}
</script>

<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <div class="row justify-center q-my-lg">
          <q-img
            :src="userDetail.avatar"
            :ratio="1"
            loading="lazy"
            spinner-color="white"
            style="max-width: 150px; border-radius: 50%"
          />
        </div>
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
        <div class="row justify-end q-gutter-md">
          <q-btn color="secondary" label="Edit" @click="userStore.editUserDetail({...userDetail})"/>
          <q-btn color="red" label="Delete" @click="deleteUser"/>
        </div>

      </div>
      <div class="col">
        {{ userDetail.bio }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>