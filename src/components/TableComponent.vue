<template>
  <div class="scroll">
    <table class="">
      <thead class="bg-light-gray">
        <tr class="text-left w-30">
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id" class="">
          <td v-for="header in headers" :key="header">{{ user[header] }}</td>
          <td>
            <div class="flex justify-evenly">
              <button
                @click="showEditUserPage(user)"
                class="hover:text-green bg-light-gray flex flex-row opacity-70 self-center gap-3 text-xs justify-center px-4 py-1.5"
              >
                Edit
              </button>
              <button
                @click="handleUserDelete(user)"
                class="hover:text-red bg-light-gray flex flex-row opacity-70 self-center gap-3 text-xs justify-center px-4 py-1.5"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
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
table {
  border-collapse: collapse;
  border-spacing: 1rem;
  table-layout: fixed;
  width: 100%;
}

td,
th {
  padding: 0.5rem 0.3rem;
  overflow: hidden;
  font-size: var(--font-size-small);
}
@media (max-width: 991.98px) {
  .scroll {
    max-width: 45rem;
    overflow-x: scroll;
  }
  table {
    width: 80%;
  }
}
@media (max-width: 767.98px) {
  .scroll {
    max-width: 35rem;
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
