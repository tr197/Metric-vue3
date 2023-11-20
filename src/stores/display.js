import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('display', () => {

  const showModalEmail = ref(false)

  const showModalLogin = ref(false)

  const showLoginOrSignup = ref(true)  // login: true || signup: false

  function switchOpenModalLogin() {
    showModalLogin.value = !showModalLogin.value;
  }

  function switchLoginSignup() {
    showLoginOrSignup.value = !showLoginOrSignup.value;
  }

  function switchOpenModalEmail() {
    showModalEmail.value = !showModalEmail.value;
  }

  return { 
    showModalLogin, showLoginOrSignup,
    switchOpenModalLogin, switchLoginSignup,
    showModalEmail, switchOpenModalEmail,
  }
})
