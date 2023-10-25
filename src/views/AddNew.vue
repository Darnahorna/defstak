<template>
  <div class="user-details">
    <div class="flex gap-4">
      <CloseIcon class="close-icon" @click="hideAddUserPage"></CloseIcon>
      <h1 class="page-title">Add New User</h1>
    </div>
    <div class="flex justify-center flex-col self-center items-center bg-light p-8">
      <h2>User Details</h2>
      <form class="flex flex-col gap-6" id="user-form" @submit.prevent="saveUserData">
        <div class="instructions">Please enter user details</div>
        <FormField
          label="Enter user name"
          v-model="userData.name"
          placeholder="User name"
          name="name"
          :isRequired="true"
        />
        <FormField
          v-model="userData.surname"
          label="Enter user surname"
          placeholder="User surname"
          name="surname"
          :isRequired="true"
        />
        <FormField
          v-model="userData.email"
          label="Enter user email"
          placeholder="User email"
          name="email"
          :isRequired="true"
          type="email"
        />
        <FormSelect
          v-model="userData.role"
          label="Enter user role"
          name="user-role"
          :options="roleOptions"
          required="true"
        />
        <button type="submit" form="user-form" value="Update" class=":hover:bg-secondary-color">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CloseIcon from '../components/icons/CloseIcon.vue'
import FormField from '../components/FormField.vue'
import FormSelect from '../components/FormSelect.vue'

const userData = ref({
  name: '',
  surname: '',
  email: '',
  role: '1' // Default user role
})
const roleOptions = ref(['1', '2', '3', '4', '5'])

const emit = defineEmits[('user-data-submitted', 'closeForm')]

const hideAddUserPage = () => {
  emit('closeForm')
}
const saveUserData = () => {
  emit('user-data-submitted', userData.value)
  emit('closeForm')
}
</script>

<style scoped>
.user-details {
  position: absolute;
  inset: 0;
  z-index: 9999;
  background-color: var(--light);
}

.close-icon {
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

button {
  background-color: var(--primary-color);
  padding: var(--button-padding);
  width: 15rem;
  color: var(--light);
  border-radius: var(--border-radius-light);
  font-size: var(--font-size-medium);
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
    padding: 2rem 0;
  }
}
</style>
