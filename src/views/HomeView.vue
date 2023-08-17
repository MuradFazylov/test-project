<script setup lang="ts">
import {onMounted} from "vue";
import {useUserStore} from "../stores/user";
import router from "@/router";
const userStore = useUserStore();

onMounted(() => {
  userStore.gerUsers();
  console.log(`the component is now mounted.`)
})

const columns = [
  {
    name: 'avatar',
    align: 'left',
  },
  { name: 'firstname', align: 'left', label: 'Firstname', field: 'firstname', sortable: true },
  { name: 'lastname', label: 'Lastname', field: 'lastname', sortable: true, align: 'left' },
  { name: 'email', label: 'E-mail', field: 'email', sortable: true, align: 'left' },
  { name: 'phone', label: 'Phone', field: 'phone', sortable: true, align: 'left' }
]

const getInfo = (evt:any, row: any) => {
  console.log(row.id)
  userStore.getUserDetail(row.id);
  router.push(`/user/${row.id}`)
}
</script>

<template>
  <main>
    <div class="q-pa-md q-gutter-sm">
      <q-avatar color="red" text-color="white" icon="directions" />
      <q-avatar color="primary" text-color="white">J</q-avatar>
      <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
      <q-avatar size="24px" color="orange">J</q-avatar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </div>
    <div class="q-pa-md">
      <q-table
          flat bordered
          title="Users"
          :rows="userStore.users"
          :columns="columns"
          row-key="name"
          :rows-per-page-options="[10, 20]"
          @row-click="getInfo"
      >
        <template v-slot:body-cell-avatar="props">
            <q-td key="avatar" :props="props">
                <q-avatar>
                  <img :src="props.row.avatar">
                </q-avatar>
            </q-td>
        </template>
      </q-table>
    </div>
  </main>
</template>
