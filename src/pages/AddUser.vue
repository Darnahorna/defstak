<template>
  <div class="mt-3">
    <div class="flex gap-4">
      <CloseIcon class="close-icon" @click="closeForm"></CloseIcon>
      <h1 class="text-2xl">Add User</h1>
    </div>
    <div class="flex justify-center flex-col self-center items-center p-8 w-full">
      <h2 class="text-lg mb-3">Add User Details</h2>
      <form @submit.prevent="handleSubmit" id="user-form" class="flex flex-col gap-6 w-80">
        <p>Please enter user details</p>
        <FormField
          v-model="formData.name"
          label="Enter user name"
          placeholder="User name"
          name="name"
          :isRequired="true"
          type="name"
        />
        <FormField
          v-model="formData.surname"
          label="Enter user surname"
          placeholder="User surname"
          name="surname"
          :isRequired="true"
          type="surname"
        />
        <FormField
          v-model="formData.email"
          label="Enter user email"
          placeholder="User email"
          name="email"
          :isRequired="true"
          type="email"
        />
        <FormSelect
          v-model="formData.role"
          label="Enter user role"
          name="user-role"
          :options="roleOptions"
          required="true"
        />
        <button
          type="submit"
          form="user-form"
          value="Add"
          class="bg-primary-color py-3 px-4 text-light text-sm rounded-lg :hover:bg-secondary-color"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/UserStore'

import FormField from '../components/FormField.vue'
import FormSelect from '../components/FormSelect.vue'
import CloseIcon from '../components/icons/CloseIcon.vue'
import type { User } from '@/types/user'

const roleOptions = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const router = useRouter()
const userStore = useUserStore()

const formData = ref<User>({
  name: '',
  surname: '',
  email: '',
  role: 1
} as User)

const closeForm = () => {
  router.push({ name: 'Admin' })
}

const handleSubmit = () => {
  userStore.addNewUser(formData.value)
  closeForm()
}
</script>
