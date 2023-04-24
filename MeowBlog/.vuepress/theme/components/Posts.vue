<template>
    <PostList :items="pages.items"/>
</template>

<script setup lang="ts">
import {useBlogType} from "vuepress-plugin-blog2/client";
import PostList from "./PostList.vue";

const pages = useBlogType("posts");

</script>

<style scoped>

</style>