<template>
  <div class="grid gap-6 mb-6">
    <div>
      <label class="label" for="email">Email</label>
      <input
        placeholder="Email"
        class="input"
        type="text"
        id="email"
        :value="email"
        @input="onChangeEmail"
        required
      />
      <p class="error" v-show="emailError">{{ emailErrorTxt }}</p>
    </div>
    <div>
      <label class="label" for="password">Password</label>
      <input
        placeholder="Password"
        class="input"
        type="password"
        id="password"
        :value="password"
        @input="onChangePassword"
        required
      />
      <p class="error" v-show="passwordError">{{ passwordErrorTxt }}</p>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:password', 'update:email'])

const onChangeEmail = (event) => {
  // Field validation
  //emailError = event.target.value.length < 5
  emit("update:email", event.target.value);
};

const onChangePassword = (event) => {
  // Field validation
  // passwordError = event.target.value.length < 5
  emit("update:password", event.target.value);
};

defineProps({
  label: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  emailErrorTxt: {
    type: String,
    default: "field error",
  },
  passwordErrorTxt: {
    type: String,
    default: "field error",
  },
  emailError: {
    type: Boolean,
    default: false,
  },
  passwordError: {
    type: Boolean,
    default: false,
  },
});

</script>
  