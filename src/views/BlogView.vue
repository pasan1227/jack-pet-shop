<template>
  <SubHero title="Nutritions & Health Tips" subtitle="Learn from experts" />
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold text-teal-600 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg text-gray-600">Learn health tips and more.</p>
      </div>

      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-teal-500 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex max-w-xl flex-col items-start justify-between"
        >
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            <a
              :href="post.category.href"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-teal-100"
              >{{ post.category.title }}</a
            >
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-teal-600"
            >
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a :href="post.author.href">
                  <span class="absolute inset-0" />
                  {{ post.author.name }}
                </a>
              </p>
              <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <Bottom />
</template>

<script setup>
import Bottom from '../components/BottomImage.vue'
import SubHero from '../components/SubHeroSection.vue'

const posts = [
  {
    id: 1,
    title: 'Exercises',
    href: '#',
    description:
      "Regular exercise is crucial for keeping our pets happy, healthy, and well-balanced. Just like humans, pets benefit from physical activity that helps maintain a healthy weight, improves cardiovascular health, builds muscle strength, and stimulates their minds. Depending on the type of pet you have, exercise can take various forms, such as daily walks, interactive play sessions, agility training, swimming, or engaging in indoor games. Whether it's a leisurely stroll around the neighborhood, a game of fetch in the park, or a challenging obstacle course, providing opportunities for exercise not only enhances their physical well-being but also strengthens the bond between you and your furry friend. Always consult with your veterinarian to ensure the exercise routine is suitable for your pet's age, breed, and any specific health considerations.",
    date: 'May 30, 2023',
    datetime: '2020-03-16',
    category: { title: 'Health', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Doctor',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 2,
    title: 'Nutritions',
    href: '#',
    description:
      "Proper nutrition is essential for the overall health and well-being of our pets. A balanced and nutritious diet provides the necessary energy, vitamins, minerals, and nutrients that support their growth, development, and vitality. Each pet has unique nutritional requirements based on factors like age, size, breed, and activity level. High-quality commercial pet foods formulated for specific life stages or special dietary needs can be a convenient and reliable option. These foods are carefully formulated to provide a complete and balanced diet. It's important to avoid feeding pets with excessive table scraps or inappropriate foods, as it can lead to nutritional imbalances and health issues. Consulting with a veterinarian can help determine the best diet for your pet's specific needs and ensure they receive the optimal nutrition to thrive throughout their lives.",
    date: 'May 30, 2023',
    datetime: '2020-03-16',
    category: { title: 'Nutritions', href: '#' },
    author: {
      name: 'John Doe',
      role: 'Nutritionist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 3,
    title: 'Other Healthy Tips',
    href: '#',
    description:
      'Ensuring the health and well-being of our pets involves more than just nutrition. Here are some additional healthy tips to keep in mind. Regular veterinary check-ups are important to monitor their overall health and catch any potential issues early on. Proper hygiene, including regular grooming, brushing teeth, and cleaning ears, helps prevent infections and maintains their overall cleanliness. Providing regular exercise and mental stimulation helps keep pets physically fit and mentally engaged. Avoiding overfeeding and maintaining a healthy weight is crucial to prevent obesity and related health problems. Lastly, always provide a safe and secure environment, free from hazards and toxic substances, to keep your furry friend protected. By following these healthy tips, we can ensure that our pets lead happy, active, and healthy lives.',
    date: 'May 30, 2023',
    datetime: '2020-03-16',
    category: { title: 'Health', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Doctor',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
]
</script>
