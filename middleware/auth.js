export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()

  console.log(isLoggedIn); // <- Screenshot

  if (isLoggedIn) {
    return navigateTo(`/secret`)
  } else {
    return navigateTo('/login')
  }
})
