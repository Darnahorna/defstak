<script setup>
import SearchIcon from '../icons/SearchIcon.vue'
import EditIcon from '../icons/EditIcon.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'
import users from '../data'
</script>
<script>
export default {
  name: 'ManageUserPage',
  data() {
    return {
      users: users
    }
  }
}
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">Manage Users</h1>
    <button>Add User</button>
  </div>
  <div class="table">
    <div>
      <div class="table-title">
        <h2>User List</h2>
        <div class="search-input">
          <SearchIcon></SearchIcon>
          <input type="search" placeholder="Search Users" />
        </div>
      </div>
    </div>
    <div class="table-users">
      <div class="table-headers">
        <div>No</div>
        <div>Profile</div>
        <div>Email</div>
        <div>Role</div>
        <div></div>
      </div>

      <div class="table-content" v-for="user in users" :key="user.id">
        <div>{{ user.id }}</div>
        <div class="profile">
          <img v-if="user.picture_url" :src="user.picture_url" />
          <img v-else src="../../assets/images/user.png" />
          <span>{{ user.name }} {{ user.surname }}</span>
        </div>
        <div>{{ user.email }}</div>
        <div>{{ user.role }}</div>
        <div class="action">
          <button class="edit-btn"><EditIcon></EditIcon>Edit</button>
          <button class="delete-btn"><DeleteIcon></DeleteIcon>Delete</button>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div>
        <span>Rows per page </span>
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
      <div><span>1-10</span> of <span>50 </span>items</div>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.page-title {
  font-size: var(--font-size-large-x);
  font-weight: 800;
}
.page-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 0;
}
.page-header button {
  background-color: var(--primary-color);
  padding: var(--button-padding);
  width: 15rem;
  color: var(--light);
  border-radius: var(--border-radius-light);
  font-size: var(--font-size-medium);
}
.page-header button:hover {
  background-color: var(--secondary-color);
  transition: var(--normal-transition);
}
.table {
  background-color: var(--light);
  padding: 2rem;
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
  width: 10vw;
  margin-left: 0.3rem;
}
.table-users {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
.table-users div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.table-headers {
  background-color: var(--light-gray);
  padding: var(--button-padding);
}
.table-headers div:first-child {
  width: 10%;
}
.table-content div:first-child {
  width: 10%;
}
.table-content div:nth-child(4) {
  width: 10%;
}
.table-headers div:nth-child(4) {
  width: 10%;
}

.table-content div:nth-child(2),
.table-content div:nth-child(5) {
  width: 30%;
}
.table-headers div:nth-child(2),
.table-headers div:nth-child(5) {
  width: 30%;
}
.table-content div:nth-child(3) {
  width: 30%;
}

.table-headers div:nth-child(3) {
  width: 20%;
}

.table-content {
  padding: var(--button-padding);
  font-size: var(--font-size-small);
}
.table-content div {
  flex-wrap: wrap;
}
.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.profile img {
  object-fit: cover;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}
.profile span {
}
.action {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.action button {
  padding: var(--button-padding);
  background-color: var(--light-gray);
  width: 4vw;
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
</style>
