<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-200">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold md:text-2xl">Create an account</h1>
          <form class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-md font-medium">Your email</label>
              <input
                type="email"
                name="email"
                v-model="email"
                class="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-200"
                placeholder="john@example.com"
                required="true"
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-md font-medium">Password</label>
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="••••••••"
                class="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-200"
                required="true"
              />
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-md font-medium"
                >Confirm password</label
              >
              <input
                type="password"
                name="confirm-password"
                v-model="confirmpassword"
                placeholder="••••••••"
                class="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-200"
                required="true"
              />
            </div>
            <button
              type="submit"
              class="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-600 hover:bg-teal-700"
              @click.prevent="register"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-400">
              Already have an account?
              <a href="/login" class="font-medium hover:underline text-teal-600">Login here</a>
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
