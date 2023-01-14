<template>
  <div>
    <h1>The very secret place 👻</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
    //   $store.commit('auth/setUser', null)
    //   $store.commit('auth/setPass', null)
      return navigateTo('/login')
    }
  }
}
</script>
