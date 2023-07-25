<template>
  <div>
    <nav class="bg-teal-50 shadow-md fixed w-full">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16 py-4">
          <RouterLink to="/" class="text-primary-600 font-bold text-2xl">
            Jack Pet Supplies
          </RouterLink>

          <ul class="hidden sm:flex sm:justify-end font-semibold">
            <li class="mr-4">
              <router-link to="/" class="text-lg hover:text-primary-600">Home</router-link>
            </li>
            <li class="mr-4">
              <router-link to="/pets" class="text-lg hover:text-primary-600">Pets</router-link>
            </li>
            <li class="mr-4">
              <router-link to="/products" class="text-lg hover:text-primary-600"
                >Products</router-link
              >
            </li>
            <li class="mr-4">
              <router-link to="/blog" class="text-lg hover:text-primary-600">Blog</router-link>
            </li>
            <li class="mr-4">
              <router-link to="/about" class="text-lg hover:text-primary-600">About</router-link>
            </li>
            <li class="mr-4">
              <router-link to="/contact" class="text-lg hover:text-primary-600"
                >Contact</router-link
              >
            </li>
            <li v-if="isLoggedIn" @click="logout" class="mr-4">
              <router-link to="/" class="text-lg font-bold hover:text-primary-600"
                >Logout</router-link
              >
            </li>
            <li v-else class="mr-4">
              <router-link to="/login" class="text-lg font-bold hover:text-primary-600"
                >Login</router-link
              >
            </li>
          </ul>
          <!-- responsive menu -->
          <div class="sm:hidden">
            <button @click="toggleMenu" class="text-primary-600 focus:outline-none">
              <font-awesome-icon :icon="isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class="sm:hidden">
      <ul>
        <li v-for="item in menuItems" :key="item.text" class="my-2">
          <router-link :to="item.to" class="block text-center hover:text-primary-600">{{
            item.text
          }}</router-link>
        </li>
        <li v-if="isLoggedIn" @click="logout" class="my-2">
          <router-link to="/" class="block text-center font-bold hover:text-primary-600"
            >Logout</router-link
          >
        </li>
        <li v-else class="my-2">
          <router-link to="/login" class="block text-center font-bold hover:text-primary-600"
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export default {
  data() {
    return {
      isMenuOpen: false,
      isLoggedIn: false,
      auth: getAuth(),
      menuItems: [
        {
          text: 'Home',
          to: '/'
        },
        { text: 'Pets', to: '/pets' },
        { text: 'Products', to: '/products' },
        { text: 'Blog', to: '/blog' },
        { text: 'About', to: '/about' },
        { text: 'Contact', to: '/contact' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    logout() {
      signOut(this.auth).then(() => {
        this.isLoggedIn = false
      })
    }
  },
  created() {
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user
    })
  }
}
</script>
