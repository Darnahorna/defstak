<template>
  <div class="scroll">
    <table class="">
      <thead class="bg-light-gray dark:bg-light-blue dark:text-light">
        <tr class="text-left w-30">
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>actions</th>
        </tr>
      </thead>

      <tbody v-if="users.length > 0">
        <tr v-for="user in users" :key="user.id">
          <td v-for="header in headers" :key="header" class="text-sm">{{ user[header] }}</td>
          <td>
            <div class="flex justify-evenly gap-3">
              <button
                @click="showEditUserPage(user)"
                class="bg-light-gray flex flex-row opacity-70 self-center gap-3 text-xs justify-center px-4 py-1.5 dark:bg-light-blue dark:text-light hover:text-green"
              >
                Edit
              </button>
              <button
                @click="handleUserDelete(user)"
                class="bg-light-gray flex flex-row opacity-70 self-center gap-3 text-xs justify-center px-4 py-1.5 hover:text-red dark:bg-light-blue dark:text-light dark:hover:text-red"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <td class="text-xl text-center p-4 opacity-70" colspan="6">List is empty</td>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  users: Array,
  headers: Array
})

const emits = defineEmits(['showEditUserPage', 'handleUserDelete'])

const showEditUserPage = (user) => {
  emits('showEditUserPage', user)
}
const handleUserDelete = (user) => {
  emits('handleUserDelete', user)
}
</script>

<style scoped>
td,
th {
  padding: 0.5rem 0.3rem;
  overflow: hidden;
  flex-wrap: wrap;
}
table {
  table-layout: fixed;
  width: 100%;
}

table td:nth-child(1),
table th:nth-child(1) {
  width: 5rem;
}
table td:nth-child(4),
table th:nth-child(4) {
  width: 5rem;
}
table td:nth-child(2),
table th:nth-child(2) {
  width: auto;
}
table td:nth-child(3),
table th:nth-child(3) {
  width: auto;
}

/* `xl` applies to large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
  table td:nth-child(1),
  table th:nth-child(1) {
    width: 3rem;
  }
  table td:nth-child(4),
  table th:nth-child(4) {
    width: 3rem;
  }
  table td:nth-child(2),
  table th:nth-child(2) {
    width: 8rem;
  }
  table td:nth-child(3),
  table th:nth-child(3) {
    width: 8rem;
  }
}

/* // `xxl` applies to x-large devices (large desktops, less than 1400px) */

@media (max-width: 991.98px) {
  .scroll {
    max-width: 45rem;
    overflow-x: hidden;
  }
  table {
    width: 100%;
  }
}
@media (max-width: 767.98px) {
  .scroll {
    max-width: 36rem;
    overflow-x: scroll;
  }
  table {
    width: auto;
  }
}
@media (max-width: 575.98px) {
  .scroll {
    max-width: 19rem;
  }
  table {
    width: auto;
  }
}
</style>
