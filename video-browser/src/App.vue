<template>
    <div>
        <!-- <SearchBar v-on:termChange="onTermChange"></SearchBar> -->
        <SearchBar @termChange="onTermChange"></SearchBar>
        <!-- <VideoList v-bind:videos="videos"/> -->
        <VideoList :videos="videos"/>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
const API_KEY = process.env.VUE_APP_API_KEY;

export default {
    name: 'App',
    data() {
        return {
            videos: []
        }
    },
    components: {
        SearchBar,
        VideoList
    },
    methods: {
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm,
                }
            })
            .then(res => {
                this.videos = res.data.items
            })
            .catch(err => console.log(err))
        }
    }
}
</script>


