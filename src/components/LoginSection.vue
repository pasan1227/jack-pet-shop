<template>
  <section class="bg-sky-100">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold md:text-2xl text-white">Sign In to your account</h1>
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
              <label for="password" class="block mb-2 text-sm font-medium text-white"
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
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-blue-500 hover:underline"
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              @click="signin"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-300">
              Don’t have an account yet?
              <a href="/register" class="font-medium text-blue-500 hover:underline">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginBox',

  data() {
    return {
      loggedIn: false,
      email: '',
      password: '',
      router: useRouter(),
      errMsg: '',
      auth: getAuth()
    }
  },
  mounted() {
    const ref = this
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        ref.loggedIn = true
      } else {
        ref.loggedIn = false
      }
    })
  },
  computed: {
    authenticated() {
      return this.loggedIn
    }
  },
  methods: {
    signin() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((data) => {
          console.log('Logged in')
          this.router.push('/')
        })
        .catch((error) => {
          console.log(error.code)
          switch (error.code) {
            case 'auth/invalid-email':
              this.errMsg = 'Invalid Email'
              break
            case 'auth/user-not-found':
              this.errMsg = 'No account with that email found'
              break
            case 'auth/wrong-password':
              this.errMsg = 'Password incorrect'
              break
            default:
              this.errMsg = 'Email or password was incorrect'
              break
          }
        })
    },
    logout() {
      signOut(this.auth).then(() => {
        this.loggedIn = false
        this.email = ''
        this.password = ''
        this.router.push('/')
      })
    }
  }
}
</script>
