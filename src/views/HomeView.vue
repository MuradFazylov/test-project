<script setup lang="ts">
import {onMounted} from "vue";
import {useUserStore} from "../stores/user";
import router from "@/router";
const userStore = useUserStore();

onMounted(async () => {
  await userStore.gerUsers();
})

const column:{
  name: string;
  label: string; field: string | ((row: any) => any);
  required?: boolean | undefined;
  align?: "left" | "right" | "center" | undefined;
  sortable?: boolean | undefined; sort?: ((a: any, b: any, rowA: any, rowB: any) => number) | undefined; headerClasses?: string | undefined;
}[] = [
  {
    name: 'avatar',
    label: 'Dessert',
    align: 'left',
    field: 'avatar'
  },
  { name: 'firstname', align: 'left', label: 'Firstname', field: 'firstname', sortable: true },
  { name: 'lastname', label: 'Lastname', field: 'lastname', sortable: true, align: 'left' },
  { name: 'email', label: 'E-mail', field: 'email', sortable: true, align: 'left' },
  { name: 'phone', label: 'Phone', field: 'phone', sortable: true, align: 'left' }
]

const getInfo = (evt:any, row: any) => {
  userStore.getUserDetail(row.id);
  router.push(`/user/${row.id}`)
}
</script>

<template>
  <main>
    <div class="q-pa-md">
      <q-table
        flat bordered
        title="Users"
        :rows="userStore.users"
        :columns="column"
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
