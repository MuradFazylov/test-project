<script setup lang="ts">
import {computed, ref} from "vue";

const drawer = ref(false)

import {RouterView} from "vue-router";
import router from "@/router";
import {useTokenStore} from "../stores/sign-in";
const storeToken = useTokenStore();

const logout = () => {
  storeToken.logout();
  router.push(`/sign-in`)
}
</script>

<template>
  <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
<!--        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />-->
        <q-btn flat @click="logout" round dense icon="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
<!--        <q-list padding>-->
<!--          <q-item clickable v-ripple>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="inbox" />-->
<!--            </q-item-section>-->

<!--            <q-item-section>-->
<!--              Inbox-->
<!--            </q-item-section>-->
<!--          </q-item>-->

<!--          <q-item active clickable v-ripple>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="star" />-->
<!--            </q-item-section>-->

<!--            <q-item-section>-->
<!--              Star-->
<!--            </q-item-section>-->
<!--          </q-item>-->

<!--          <q-item clickable v-ripple>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="send" />-->
<!--            </q-item-section>-->

<!--            <q-item-section>-->
<!--              Send-->
<!--            </q-item-section>-->
<!--          </q-item>-->

<!--          <q-item clickable v-ripple>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="drafts" />-->
<!--            </q-item-section>-->

<!--            <q-item-section>-->
<!--              Drafts-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </q-list>-->
              <nav>
                <RouterLink to="/">Users</RouterLink>
                <RouterLink to="/user/new">New User</RouterLink>
              </nav>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
nav{
  display: flex;
  flex-direction: column;
  a{
    width: 100%;
    padding: 20px  10px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: 600;
    &.router-link-active{
      border-right: solid 4px var(--q-secondary);
      color: var(--q-secondary)
    }
  }
}
</style>