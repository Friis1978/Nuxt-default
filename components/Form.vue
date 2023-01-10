<template>
  <form
    @submit.prevent="handleSubmit"
    class="my-7 max-w-xs mx-auto card bg-gray-200"
  >
    <LoginForm
      label="Login Form"
      v-model:email="form.email"
      v-model:password="form.password"
      emailErrorTxt="Fejl i password"
      passwordErrorTxt="Fejl i password"
      v-bind:emailError="emailError"
      v-bind:passwordError="passwordError"
    />
    <button type="submit" class="btn flex rounded-md mx-auto">
      <i class="material-icons mr-2 text-white">login</i>
      <span class="center text-lg">Login</span>
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

let emailError = false
let passwordError = false

const form = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  emailError = true
  console.log("Form submit", form.email, form.password);
};
</script>
