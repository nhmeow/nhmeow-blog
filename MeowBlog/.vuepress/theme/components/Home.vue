<template>
    <div class="home-content">
        <span v-for="char in pageFrontmatter.content">{{ char }}</span>
    </div>
</template>

<script setup lang="ts">

import {usePageFrontmatter} from "vuepress/client";

const pageFrontmatter = usePageFrontmatter();

</script>

<style scoped>
.home-content {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    padding-top: 5rem;
}

.home-content span {
    animation: home 1s forwards .5s;
    display: inline-block;
}

@keyframes home {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
        background-image: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        letter-spacing: 3px;
        text-shadow: 3px 3px 10px rgb(238, 44, 130);
    }
}
</style>