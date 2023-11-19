import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('display', () => {
  const showModalLogin = ref(false)

  const showLoginOrSignup = ref(true)  // login: true || signup: false

  function switchOpenModalLogin() {
    showModalLogin.value = !showModalLogin.value;
  }

  function switchLoginSignup() {
    showLoginOrSignup.value = !showLoginOrSignup.value;
  }

  return { showModalLogin, showLoginOrSignup, switchOpenModalLogin, switchLoginSignup }
})
