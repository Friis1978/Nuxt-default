<template>
    <div>
        <h2>About</h2>
        <p>{{ ninja }}</p>
        <p>{{ currency }}</p>
    </div>
</template>

<script setup>
    // params
    const { data: ninja } = await useFetch('/api/ninja?name=mario', {
        method: 'post',
        body: { age: 30 }
    })

    const { data: currency } = await useFetch('/api/currency/DKK')
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