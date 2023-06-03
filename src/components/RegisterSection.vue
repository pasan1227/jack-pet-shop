<template>
  <section class="bg-sky-100">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold md:text-2xl text-white">Create an account</h1>
          <form class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                v-model="email"
                class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                placeholder="john@example.com"
                required="true"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="••••••••"
                class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                required="true"
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
                >Confirm password</label
              >
              <input
                type="password"
                name="confirm-password"
                v-model="confirmpassword"
                placeholder="••••••••"
                class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                required="true"
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border rounded bg-gray-700 border-gray-600"
                  required="true"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-300"
                  >I accept the
                  <a class="font-medium hover:underline dark:text-blue-500" href="#"
                    >Terms and Conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700"
              @click.prevent="register"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-400">
              Already have an account?
              <a href="/login" class="font-medium hover:underline text-blue-500">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterForm',
  data() {
    return {
      email: '',
      password: '',
      router: useRouter()
    }
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log('Logged in')
          console.log(data)
          this.router.push('/')
        })
        .catch((error) => {
          console.log(error.code)
          alert('Sorry you could not sign up' + error.message)
        })
    }
  }
}
</script>
