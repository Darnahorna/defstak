<template>
  <div class="scroll">
    <table class="">
      <thead class="bg-light-gray m-5">
        <tr class="text-left">
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id" class="">
          <td v-for="header in headers" :key="header">{{ user[header] }}</td>
          <td>
            <div class="flex justify-evenly">
              <button @click="showEditUserPage(user)" class="edit-btn">Edit</button>
              <button @click="handleUserDelete(user)" class="delete-btn">Delete</button>
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
td,
th {
}
table {
  width: 100%;
}

button {
  padding: var(--button-padding);
  background-color: var(--light-gray);
  display: flex;
  flex-direction: row;
  opacity: 0.7;
  align-self: center;
  gap: 0.3rem;
  font-size: var(--font-size-small);
  justify-content: center;
}

.edit-btn:hover {
  color: green;
  opacity: 0.7;
}
.delete-btn:hover {
  color: red;
  opacity: 0.7;
}
@media (max-width: 991.98px) {
  table {
    width: 100%;
    table-layout: fixed;
  }
  .scroll {
    width: 100%; /* Set the width of the parent div */
    overflow-x: auto; /* Enable horizontal scrolling when the content overflows the parent div */
    white-space: nowrap;
  }
  /* Style the scrollbar track */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Style the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background: #888; /* Color of the thumb */
  }

  /* Style the scrollbar track on hover */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color of the track */
  }
}
</style>
