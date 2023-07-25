<template>
  <div>
    <SubHero
      title="Explore Our Pet Products"
      subtitle="Find the perfect products for your beloved pets"
    />

    <section class="py-10 bg-gray-100 md:h-[100vh] mb-40">
      <div class="container mx-auto">
        <h1 class="text-5xl text-center mt-10 font-bold text-teal-600">Find The Best Products</h1>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-lg shadow-lg hover:bg-teal-100"
          >
            <img
              :src="product.image"
              alt="Product"
              class="w-full h-48 object-contain rounded-t-lg"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold">{{ product.name }}</h3>
              <p class="text-gray-500">{{ product.description }}</p>
              <h3 class="text-lg font-bold">$ {{ product.price }}</h3>
              <button
                class="mt-4 bg-teal-600 hover:bg-gray-400 text-white py-2 px-4 rounded font-bold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import SubHero from '../components/SubHeroSection.vue'

export default {
  name: 'ProductsPage',
  components: {
    SubHero
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      axios
        .get('https://pet-shop-api-icox.onrender.com/v1/products')
        .then((response) => {
          this.products = response.data
        })
        .catch((error) => {
          console.error('There is an error in fetching products:', error)
        })
    }
  }
}
</script>
