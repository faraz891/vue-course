<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
            ImageStorage
        </router-link>
        <div v-if="isLoggedIn" class="right menu">
            <router-link to="/image" class="item">Galleries</router-link>
            <router-link to="/upload" class="item">Upload</router-link>
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
