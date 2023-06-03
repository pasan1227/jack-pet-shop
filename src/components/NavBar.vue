<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav class="shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex justify-between items-center">
            <RouterLink to="/" class="text-blue-950 font-semibold text-lg">
              Jack Pet Supplies
            </RouterLink>
            <RouterLink to="/pets" class="ml-4 text-blue-950 font-semibold hover:text-sky-300">
              Pets
            </RouterLink>
            <RouterLink to="/shop" class="ml-4 text-blue-950 font-semibold hover:text-sky-300">
              Shop
            </RouterLink>
            <RouterLink to="/about" class="ml-4 text-blue-950 font-semibold hover:text-sky-300">
              About
            </RouterLink>
            <RouterLink to="/blog" class="ml-4 text-blue-950 font-semibold hover:text-sky-300">
              Blog
            </RouterLink>
            <RouterLink to="/register" class="ml-4 text-blue-950 font-semibold hover:text-sky-300">
              Sign Up
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />
</template>
