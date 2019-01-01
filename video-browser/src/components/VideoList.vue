<template>
    <ul class="list-group col-md-4">
        <VideoListItem 
            v-for="video in videos"
            :video="video"
            :key="video.etag"
            @videoClick="onVideoClick"
        />
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    // props: ['videos'],
    props: {
        videos: Array,
    },
    methods: {
        onVideoClick(video) {
            this.$emit('videoClick', video)
        },
    }
}
</script>

<style>

</style>
