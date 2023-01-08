export default defineEventHandler(async(event)=>{
    // get env variables from config file
    const { currencyKey } = useRuntimeConfig()

    // get params
    const { code } = event.context.params

    // route
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
    
    // api call with private key
    const { data } = await $fetch(uri)

    return data
})