<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-center font-semibold leading-7 text-teal-600">
          Jack Pet Supplies - Where Pets Are Our Priority!
        </h2>
        <p class="text-center mt-2 text-3xl font-bold sm:text-4xl">Why Choose Jack Pet Supplies?</p>
        <p class="mt-6 text-lg text-center text-gray-500">
          At Jack Pet Supplies, we are more than just a pet adoption center. We are a haven for pet
          lovers and a trusted resource for all your pet's needs. Here's why you should choose Jack
          Pet Supplies for all your furry friend's requirements:
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600"
              >
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Extensive Selection',
    description:
      "We offer a wide range of products, from high-quality pet food to stylish accessories and everything in between. You'll find everything you need to keep your pet happy, healthy, and well-cared for.",
    icon: CloudArrowUpIcon
  },
  {
    name: 'Exceptional Quality',
    description:
      'We believe that pets deserve the best, which is why we carefully curate our inventory to ensure top-notch quality and safety for your beloved companions. We only stock products that meet our stringent standards.',
    icon: LockClosedIcon
  },
  {
    name: 'Expert Guidance',
    description:
      'Our knowledgeable staff consists of passionate pet enthusiasts who are always ready to assist you. Whether you have questions about nutrition, training, or general pet care, our experts are here to provide you with the guidance you need.',
    icon: ArrowPathIcon
  },
  {
    name: 'Pet Adoption Center',
    description:
      "We are proud to host a dedicated pet adoption center within our store. By choosing Jack Pet Supplies, you not only support your own pet's needs but also contribute to the welfare of homeless animals. Find your perfect furry companion and give them a forever home through our adoption program.",
    icon: FingerPrintIcon
  }
]
</script>
