<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            ImageStorage
        </a>
        <div v-if="isLoggedIn" class="right menu">
            <a class="item">Galleries</a>
            <a class="item">Upload</a>
            <a class="item" @click="logout">Logout</a>
        </div>
        <div v-else class="right menu">
            <a 
                href="#"
                class="ui item"
                @click="login"
            >Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
    name: 'Header',
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['login', 'logout']),
    }
}
</script>

<style>

</style>
