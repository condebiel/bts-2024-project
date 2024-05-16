<script setup>
import ProductsCard from '@/components/ProductsCard.vue'
</script>

<template>

    <!-- Navigation -->
    <nav class="bg-white p-6 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <a class="text-lg font-bold text-gray-800 hover:text-gray-600" href="#">My Ecommerce Store</a>
            <ul class="flex space-x-4">
                <li><a class="text-gray-800 hover:text-gray-600" href="#">Home</a></li>
                <li><a class="text-gray-800 hover:text-gray-600" href="#">Shop</a></li>
                <li><a class="text-gray-800 hover:text-gray-600" href="#">About</a></li>
                <li><a class="text-gray-800 hover:text-gray-600" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Product List Section -->
    <section class="py-16">
        <div class="container mx-auto">
            <h2 class="text-2xl font-bold text-gray-800 mb-8">Products</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                <li v-for="(index, key) in 24" :key="key">
                    <ProductsCard />
                </li>
            </ul>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-6">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 My Ecommerce Store. All rights reserved.</p>
        </div>
    </footer>

</template>