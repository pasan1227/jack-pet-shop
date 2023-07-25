<template>
  <div class="mb-40">
    <SubHero
      title="Welcome to Our Pet Adoption Center"
      subtitle="Discover the amazing world of our furry friends"
    />
    <div>
      <h1 class="text-5xl text-center mt-10 font-bold text-teal-600">
        Find your purrfect companion
      </h1>
    </div>
    <section class="py-10 md:h-[100vh] bg-gray-100">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          <!-- Pet card -->
          <div
            v-for="pet in petsData"
            :key="pet.name"
            class="container bg-teal-50 shadow-md hover:shadow-xl hover:bg-teal-100"
          >
            <img :src="pet.image" :alt="pet.name" class="w-full h-60 object-cover rounded-t-lg" />
            <div class="p-4">
              <h3 class="text-xl font-bold">{{ pet.name }}</h3>
              <p class="text-gray-600 mb-3">{{ pet.description.substring(0, 100) }}....</p>
              <router-link
                to="/pets"
                class="mt-4 bg-teal-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              >
                Adopt
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <Bottom /> -->
</template>

<script setup>
// import Bottom from '../components/BottomImage.vue'
import SubHero from '../components/SubHeroSection.vue'
</script>
<script>
export default {
  data() {
    return {
      petsData: []
    }
  },
  async mounted() {
    await this.loadPetsData()
  },
  methods: {
    async loadPetsData() {
      const petsData = await import('./pets.json')
      this.petsData = await Promise.all(
        petsData.default.map(async (pet) => {
          const image = await import(`../assets/Pets/${pet.image}`)
          return {
            ...pet,
            image: image.default
          }
        })
      )
    }
  }
}
</script>
