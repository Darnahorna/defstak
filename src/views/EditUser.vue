<template>
  <div class="user-details mt-3">
    <div class="flex gap-4">
      <CloseIcon class="close-icon" @click="hideEditPage"></CloseIcon>
      <h1 class="page-title">Edit New User</h1>
    </div>
    <div class="flex justify-center flex-col self-center items-center bg-light p-8">
      <h2 class="text-lg">User Details</h2>
      <form class="flex flex-col gap-6" id="user-form" @submit.prevent="saveEditedUser">
        <div class="instructions">Please edit user details</div>
        <FormField
          v-model="localUser.name"
          label="Enter user name"
          placeholder="User name"
          name="name"
          :isRequired="true"
          type="name"
        />
        <FormField
          v-model="localUser.surname"
          label="Enter user surname"
          placeholder="User surname"
          name="surname"
          :isRequired="true"
          type="surname"
        />
        <FormField
          v-model="localUser.email"
          label="Enter user email"
          placeholder="User email"
          name="email"
          :isRequired="true"
          type="email"
        />

        <FormSelect
          v-model="localUser.role"
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
import { defineProps, defineEmits, ref, toRef } from 'vue'
import CloseIcon from '../components/icons/CloseIcon.vue'
import FormField from '../components/FormField.vue'
import FormSelect from '../components/FormSelect.vue'

const roleOptions = ref(['1', '2', '3', '4', '5'])

const props = defineProps({ user: Object })
const emit = defineEmits(['closeForm'])

const user = toRef(props.user)
const localUser = ref(user.value)

const hideEditPage = () => {
  emit('closeForm')
}
const saveEditedUser = () => {
  const editedUser = { ...localUser.value }
  emit('userDataEdited', editedUser)
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

.content h2 {
  font-size: var(--font-size-large);
  font-weight: 600;
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
