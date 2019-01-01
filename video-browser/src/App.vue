<template>
    <div class="container">
        <!-- <SearchBar v-on:termChange="onTermChange"></SearchBar> -->
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectVideo"/>
            <!-- <VideoList v-bind:videos="videos"/> -->
            <VideoList :videos="videos" @videoClick="onVideoClick"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = process.env.VUE_APP_API_KEY;

export default {
    name: 'App',
    data() {
        return {
            videos: [],
            selectVideo: null
        }
    },
    components: {
        SearchBar,
        VideoList,
        VideoDetail
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
            // .catch(err => console.log(err))
        },
        onVideoClick(video) {
            this.selectVideo = video
        }
    }
}
</script>


