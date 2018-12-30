<template>
    <li class="list-group-item media" @click="onVideoClick">
        <img class="mr-3" :src="thumbnailUrl" />
        <div class="media-body">
            {{ video.snippet.title }}
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url
        },
    },
    methods: {
        onVideoClick() {
            this.$emit('videoClick', this.video)
        },
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }
    li:hover {
        background: #eee
    }
</style>
