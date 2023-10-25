<script setup>
import CloseIcon from '../components/icons/CloseIcon.vue'
</script>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      localUser: { ...this.user } // Create a local copy of the prop
    }
  },
  methods: {
    hideEditPage() {
      this.$emit('closeForm')
    },
    saveEditedUser() {
      const editedUser = { ...this.localUser }
      this.$emit('user-data-edited', editedUser)
      this.$emit('closeForm')
    }
  }
}
</script>

<template>
  <div class="user-details">
    <div class="page-header">
      <CloseIcon class="close-icon" @click="hideEditPage"></CloseIcon>
      <h1 class="page-title">Edit User</h1>
      <button type="submit" form="user-form" value="Update">Save</button>
    </div>
    <div class="content">
      <h2>User Details</h2>
      <form class="edit-user-form" id="user-form" @submit.prevent="saveEditedUser">
        <div class="instructions">Please edit user details</div>

        <div class="form-field">
          <label for="name">Edit user name</label>
          <input
            v-model="localUser.name"
            type="text"
            placeholder="User name"
            autoComplete="on"
            name="name"
            id="name"
            required
          />
        </div>
        <div class="form-field">
          <label for="surname">Edit user surname</label>
          <input
            v-model="localUser.surname"
            type="text"
            placeholder="User surname"
            autoComplete="on"
            name="surname"
            id="surname"
            required
          />
        </div>
        <div class="form-field">
          <label for="email">Edit user email</label>
          <input
            v-model="localUser.email"
            type="email"
            placeholder="User email"
            autoComplete="on"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="form-select">
          <label for="user-role">Edit user role</label>
          <select name="user-role" id="user-role" v-model="localUser.role">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.user-details {
  position: absolute; /* or absolute, depending on your layout */
  top: 50%; /* Adjust top, left, right, or bottom as needed */
  left: 50%;
  transform: translate(-50%, -50%); /* Center the view */
  z-index: 2; /* Set a higher z-index value to ensure it's on top of the existing view */
  background-color: white;
  height: 100%;
  width: 100%;
  float: right;
  transition: 3s;
}
.close-icon {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  border-bottom: 1px solid #dadce0;
  border-right: 1px solid #dadce0;
}
.close-icon:hover {
  background-color: var(--light-blue);
  cursor: pointer;
}
.page-title {
  font-size: var(--font-size-large-x);
  font-weight: 800;
}
.page-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 2.5rem 1rem;
  position: relative;
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
.content {
  background-color: var(--light);
  padding: 2rem;
}
.content h2 {
  font-size: var(--font-size-large);
  font-weight: 600;
}
.edit-user-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-field {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
}
.form-field input {
  background-color: var(--light-gray);
  padding: var(--button-padding);
  border-radius: var(--border-radius);
  outline-color: var(--primary-color);
}
.form-select select {
  background-color: var(--light-gray);
  padding: var(--button-padding);
  border-radius: var(--border-radius);
  outline-color: var(--primary-color);
  margin-left: 1rem;
}
@media (max-width: 767.98px) {
  .page-header button {
    width: 10rem;
  }
  .page-title {
    font-size: var(--font-size-large);
    font-weight: 800;
  }
  .page-header {
    padding: 2rem 1rem;
  }
}
</style>
