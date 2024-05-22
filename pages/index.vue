<template>
	<!-- Navigation -->
	<nav class="bg-white p-6 shadow-md">
			<div class="container mx-auto flex justify-between items-center">
					<a class="text-lg font-bold text-gray-800 hover:text-gray-600" href="#">BTS project Ecommerce Store</a>
					<ul class="flex space-x-4">
							<li>
								<a class="text-gray-800 hover:text-gray-600" href="#">Home</a>
							</li>
							<li><a class="text-gray-800 hover:text-gray-600" href="#">Shop</a></li>
							<li><a class="text-gray-800 hover:text-gray-600" href="#">About</a></li>
							<li><a class="text-gray-800 hover:text-gray-600" href="#">Contact</a></li>
					</ul>
			</div>
	</nav>

	<!-- Hero Section -->
	<section class="bg-gray-200 py-20">
			<div class="container mx-auto text-center">
					<h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to our Ecommerce Store!</h1>
					<p class="text-gray-600">Find the best products at amazing prices.</p>
					<a href="/products" class="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Shop Now</a>
			</div>
	</section>

	<!-- Featured Products Section -->
	<section class="py-16">
			<div class="container mx-auto">
					<h2 class="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<!-- Product Cards Go Here -->
							<div class="bg-white rounded-lg shadow-md p-6">
									<img src="https://via.placeholder.com/300" alt="Product Image" class="mb-4 shadow-lg">
									<h3 class="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
									<p class="text-gray-600">$XX.XX</p>
									<a href="#" class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center">Add to Cart</a>
							</div>
							
							<div class="bg-white rounded-lg shadow-md p-6">
									<img src="https://via.placeholder.com/300" alt="Product Image" class="mb-4 shadow-lg" width="300" height="300">
									<h3 class="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
									<p class="text-gray-600">$XX.XX</p>
									<a href="#" class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center">Add to Cart</a>
							</div>
							
							<div class="bg-white rounded-lg shadow-md p-6">
									<img src="https://via.placeholder.com/300" alt="Product Image" class="mb-4 shadow-lg">
									<h3 class="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
									<p class="text-gray-600">$XX.XX</p>
									<a href="#" class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center">Add to Cart</a>
							</div>
							
							<div class="bg-white rounded-lg shadow-md p-6">
									<img src="https://via.placeholder.com/300" alt="Product Image" class="mb-4 shadow-lg">
									<h3 class="text-lg font-bold text-gray-800 mb-2">Product Name</h3>
									<p class="text-gray-600">$XX.XX</p>
									<a href="#" class="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center">Add to Cart</a>
							</div>
							
					</div>
			</div>

			
	</section>

	<!-- Footer -->
	<footer class="bg-gray-800 text-gray-300 py-6">
			<div class="container mx-auto text-center">
					<p>&copy; 2024 My Ecommerce Store. All rights reserved.</p>
			</div>
	</footer>
</template>