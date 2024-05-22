<template>
	<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
    <div v-if="submitted" class="mt-6 text-center">
      <h3 class="text-xl font-semibold mb-2">Form Data:</h3>
      <p class="text-gray-700">Name: {{ formData.name }}</p>
      <p class="text-gray-700">Email: {{ formData.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
	name: '',
	email: '',
})

const submitted = ref(false)

function handleSubmit() {
	console.log('Form Submitted:', formData.value)
	submitted.value = true

  // Reset form data

  // Show success message
  
  // Request to our API
}
</script>