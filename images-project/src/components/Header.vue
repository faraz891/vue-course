<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            ImageStorage
        </a>
        {{ isLoggedIn }}
        <div class="right menu">
            <a 
                href="#"
                class="ui itme"
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
        ...mapActions(['login']),
    }
}
</script>

<style>

</style>
