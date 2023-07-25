<template>
  <section class="bg-teal-600 p-20 md:h-[70vh]">
    <div class="container mx-auto flex flex-col text-center md:flex-col">
      <div class="text-white justify-center mt-40">
        <h1 class="text-5xl font-bold mb-5">
          {{ title }}
        </h1>
        <p class="font-semibold text-2xl">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>
