<template>
    <div>
        <SearchBar @termChang="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
const API_KEY = process.env.VUE_APP_API_KEY;

export default {
    name: 'App',
    components: {
        SearchBar
    },
    data: {
        searchTerm: '',
    },
    methods: {
        onTermChange(searchTerm) {
            this.searchTerm = searchTerm;
        }
    }
}
</script>


