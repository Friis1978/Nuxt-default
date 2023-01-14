<template>
    <div>
        <Form />
    </div>
    <ul v-for="user in allUsers" :key="user.id">
        <li>{{ user }}</li>
    </ul>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    computed: mapState(['allUsers'])
}
</script>