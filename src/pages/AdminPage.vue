<script setup>
import { computed, ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import users from '../../data/data'
import UserForm from '../views/UserForm.vue'
import PaginationBar from '../components/PaginationBar.vue'
import TableComponent from '../components/TableComponent.vue'
import TransitionSlideLeft from '../components/TransitionSlideLeft.vue'
import { useToggle } from '../hooks/useToggle'

const arr = ref([...users])
const count = ref(arr.value.length)

const { toggle: showAddUser, toggleOn: showAddUserPage, toggleOff: hideAddUserPage } = useToggle()
const { toggle: showEditUser, toggleOn: showEditPage, toggleOff: hideEditUserPage } = useToggle()

const currentPage = ref(1)
const itemsPerPage = ref(20)

const searchInput = ref(null)

const userToEdit = ref(null)

const tableHeaders = ['id', 'name', 'surname', 'role', 'email']

const showEditUserPage = (user) => {
  showEditPage()
  userToEdit.value = { ...user }
}

const handleUserAdd = (userData) => {
  const newUser = { ...userData }
  count.value++
  newUser.id = count.value
  arr.value.push(newUser)
}
const handleUserDelete = (userToRemove) => {
  arr.value = arr.value.filter((user) => user !== userToRemove)
}
const handleUserEdit = (userToUpdate) => {
  const existingUser = arr.value.find((user) => user.id === userToUpdate.id)
  const userIndex = arr.value.findIndex((user) => user.id === userToUpdate.id)
  const newUser = { ...existingUser, ...userToUpdate }
  arr.value[userIndex] = newUser
}
const handleCurrentPageChange = (currentPageData) => {
  currentPage.value = currentPageData
}
const handleItemsPerPageChange = (itemsPerPageData) => {
  itemsPerPage.value = itemsPerPageData
}
const computedUsers = computed(() => {
  return arr.value.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    currentPage.value * itemsPerPage.value
  )
})

const handleSearch = (search) => {
  searchInput.value = search
  arr.value = arr.value.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      user.surname.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })
  currentPage.value = 1
}
</script>

<template>
  <div class="p-5 m-5 page">
    <div class="flex justify-between flex-row mb-5">
      <h1 class="font-semibold text-lg">Manage Users</h1>
      <button
        @click="showAddUserPage"
        class="bg-primary-color py-3 px-4 text-light text-sm rounded-lg :hover:bg-secondary-color"
      >
        Add User
      </button>
    </div>

    <div>
      <div class="flex justify-between items-center flex-row mb-5">
        <h2 class="font-semibold text-lg">User List</h2>
        <SearchBar v-model="searchInput" @handleSearch="handleSearch" placeholder="Search users" />
      </div>
    </div>

    <TableComponent
      :headers="tableHeaders"
      :users="computedUsers"
      @handleUserDelete="handleUserDelete"
      @showEditUserPage="showEditUserPage"
    />

    <PaginationBar
      :totalItems="arr.length"
      :currentPage="currentPage"
      :itemsPerPage="itemsPerPage"
      @pageChange="handleCurrentPageChange"
      @itemsPerPageChange="handleItemsPerPageChange"
    />

    <TransitionSlideLeft>
      <UserForm
        v-if="showAddUser"
        @closeForm="hideAddUserPage"
        @userDataSubmitted="handleUserAdd"
        mode="add"
        class="absolute bg-light h-full inset-0"
      />
    </TransitionSlideLeft>
    <TransitionSlideLeft>
      <UserForm
        v-if="showEditUser"
        @closeForm="hideEditUserPage"
        @userDataEdited="handleUserEdit"
        :user="userToEdit"
        mode="edit"
        class="absolute bg-light h-full inset-0"
      />
    </TransitionSlideLeft>
  </div>
</template>

<style scoped>
.page {
  min-height: 80vh;
}
h1 {
  font-family: var(--accent-font);
}
</style>
