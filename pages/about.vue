<template>
    <div>
        <h2>About</h2>
        <p>{{ data['DKK'] }}</p>
    </div>
</template>

<script setup>
    // // params
    // const { data } = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: { age: 30 }
    // })

    const { data } = await useFetch('/api/ninja')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }

</style>