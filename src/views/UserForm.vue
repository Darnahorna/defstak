<template>
  <div class="mt-3 absolute bg-light h-full inset-0">
    <div class="flex gap-4">
      <CloseIcon class="close-icon" @click="closeForm"></CloseIcon>
      <h1 v-if="mode === 'add'" class="text-2xl">Add New User</h1>
      <h1 v-else class="text-2xl">Edit New User</h1>
    </div>
    <div class="flex justify-center flex-col self-center items-center bg-light p-8 w-full">
      <h2 class="text-lg" v-if="mode === 'add'">User Details</h2>
      <h2 class="text-lg mb-3" v-else>Edit User</h2>
      <form @submit.prevent="handleSubmit" id="user-form" class="flex flex-col gap-6 w-80">
        <p v-if="mode === 'add'">Please enter user details</p>
        <p v-else>Please edit user details</p>
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
          :value="mode === 'add' ? 'Add' : 'Update'"
          class="bg-primary-color py-3 px-4 text-light text-sm rounded-lg :hover:bg-secondary-color"
        >
          {{ mode === 'add' ? 'Add' : 'Update' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import FormField from '../components/FormField.vue'
import FormSelect from '../components/FormSelect.vue'
import CloseIcon from '../components/icons/CloseIcon.vue'

const roleOptions = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const { mode, user } = defineProps(['mode', 'user'])
const emit = defineEmits(['closeForm', 'userDataSubmitted', 'userDataEdited'])

const formData = ref({ ...user }) // Initialize formData with user data if in edit mode

if (mode === 'add') {
  formData.value.role = 1
}

const closeForm = () => {
  emit('closeForm')
}

const handleSubmit = () => {
  if (mode === 'add') {
    emit('userDataSubmitted', formData.value)
  } else if (mode === 'edit') {
    const editedUser = { ...formData.value }
    console.log(editedUser)
    emit('userDataEdited', editedUser)
  }
  emit('closeForm')
}
</script>
