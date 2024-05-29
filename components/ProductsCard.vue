<script setup>
const props = defineProps({
	product: Object
})

// const { name, price, brand } = props.product
</script>


<template>
	<div class="bg-white rounded-lg shadow-md p-6">
		<img src="https://via.placeholder.com/300" alt="Product Image" class="mb-4">
		<a 
			:href="`/product/${product.id}`" 
			class="text-lg font-bold text-gray-800 mb-2"
		>
			{{ product.name }}
		</a>
		<h2 class="text-sm font-bold text-gray-600 mb-2">
			{{ product.brand }}
		</h2>
		<p class="text-gray-600">${{ product.price }}</p>
		<a href="#" class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center">Add to Cart</a>
	</div>
</template>