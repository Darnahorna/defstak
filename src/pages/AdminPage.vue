<script setup>
import { ref } from 'vue'
import SearchIcon from '../components/icons/SearchIcon.vue'
import users from '../../data/data'
import AddNew from '../views/AddNew.vue'
import EditUser from '../views/EditUser.vue'
import PaginationBar from '../components/PaginationBar.vue'
import TableComponent from '../components/TableComponent.vue'
import TransitionSlideLeft from '../components/TransitionSlideLeft.vue'

const arr = ref([...users])
const count = ref(users.length)

//const { toggleOn: showAddUserPage, toggleOff: hideAddUserPage, showAddUser } = useToggle(false)
//const { toggleOn: showEditUserPage, toggleOff: hideEditUserPage, showEditUser } = useToggle(false)

const showAddUser = ref(false)
const showEditUser = ref(false)

function showAddUserPage() {
  showAddUser.value = true
}
function hideAddUserPage() {
  showAddUser.value = false
}

const userToEdit = ref(null)

const tableHeaders = ['id', 'name', 'surname', 'email', 'role']
//just a variable, not reactive

const showEditUserPage = (user) => {
  showEditUser.value = true
  userToEdit.value = { ...user }
}
const hideEditUserPage = () => {
  showEditUser.value = false
}
const handleUserData = (userData) => {
  const newUser = { ...userData }
  newUser.id = count.value + 1
  arr.value.push({ ...userData })
}
const handleUserDelete = (userToRemove) => {
  arr.value = arr.value.filter((user) => user !== userToRemove)
}
const handleUserEdit = (userToUpdate) => {
  const existingUser = users.find((user) => user.id === userToUpdate.id)
  const userIndex = users.findIndex((user) => user.id === userToUpdate.id)
  const newUser = { ...existingUser, ...userToUpdate }
  arr.value[userIndex] = newUser
}
</script>

<template>
  <div class="p-5 m-5">
    <div class="page-header mb-5">
      <h1>Manage Users</h1>
      <button @click="showAddUserPage">Add User</button>
    </div>

    <div>
      <div class="table-title mb-5">
        <h2>User List</h2>
        <div class="search-input">
          <SearchIcon />
          <input type="search" placeholder="Search Users" />
        </div>
      </div>
    </div>

    <TableComponent
      :headers="tableHeaders"
      :users="arr"
      @handleUserDelete="handleUserDelete"
      @showEditUserPage="showEditUserPage"
    />

    <PaginationBar />

    <TransitionSlideLeft>
      <AddNew
        v-if="showAddUser"
        @closeForm="hideAddUserPage"
        @user-data-submitted="handleUserData"
        class="absolute bg-light h-full inset-0"
      />
    </TransitionSlideLeft>
    <EditUser
      v-if="showEditUser"
      @closeForm="hideEditUserPage"
      @user-data-edited="handleUserEdit"
      :user="userToEdit"
    />
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.page-header button {
  background-color: var(--primary-color);
  padding: var(--button-padding);

  color: var(--light);
  border-radius: var(--border-radius-light);
}
.page-header button:hover {
  background-color: var(--secondary-color);
  transition: var(--normal-transition);
}
.table {
  background-color: var(--light);
}
.table-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.table-title h2 {
  font-size: var(--font-size-large);
  font-weight: 600;
}
.search-input {
  padding: var(--button-padding);
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  align-self: center;
  justify-content: center;
}
.search-input input {
  background-color: var(--light-gray);
  outline: none;
  width: 13vw;
  margin-left: 0.3rem;
}
</style>
