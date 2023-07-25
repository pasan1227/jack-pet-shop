<template>
  <SubHero title="Contact Us" subtitle="Get in touch with us" />
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-center font-semibold leading-7 text-teal-600">
          Jack Pet Supplies - Where Pets Are Our Priority!
        </h2>
        <p class="text-center mt-2 text-3xl font-bold sm:text-4xl">Contact Us</p>
        <p class="mt-6 text-lg text-center text-gray-500">
          We would love to hear from you! If you have any questions, comments, or feedback, please
          don't hesitate to get in touch with us. Our friendly and knowledgeable team is here to
          assist you. 
          
          <ul class="text-gray-600 mt-5 mb-4">
              <li><strong>Email:</strong> info@jackpetsupplies.com</li>
              <li><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li><strong>Address:</strong> 123
          Main Street, Cityville</li>
            </ul>
        </p>
      </div>
    </div>
  </div>
  <Bottom />
</template>

<script setup>
import Bottom from '../components/BottomImage.vue';
import SubHero from '../components/SubHeroSection.vue';
</script>
