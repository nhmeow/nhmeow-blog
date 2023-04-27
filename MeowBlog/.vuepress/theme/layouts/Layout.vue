<template>
    <div class="layout-box">
        <section :class="['container',pageFrontmatter.home?'':'post']">
            <Header :mode="mode" @mode-change="modeChange" class="container-header"/>

            <section class="content-section">
                <Categories v-if="pageFrontmatter.categoriesLayout"/>
                <Posts v-else-if="pageFrontmatter.postsLayout"/>
                <Home v-else-if="pageFrontmatter.home"/>
                <PostContent v-else :mode="mode"/>
            </section>

            <Footer class="container-footer"/>
        </section>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PostContent from "../components/PostContent.vue";
import {usePageFrontmatter} from "@vuepress/client";
import Categories from "../components/Categories.vue";
import Posts from "../components/Posts.vue";
import Home from "../components/Home.vue";

const mode = ref('dark');
const pageFrontmatter = usePageFrontmatter();

const modeChange = (val: string) => {
    mode.value = val;
}

const modeClass = () => {
    if (mode.value === 'dark') {
        // set root html class
        document.documentElement.classList.add('mode-dark');
    } else {
        document.documentElement.classList.remove('mode-dark');
    }
}

onMounted(() => {
    modeClass();
})

watch(mode, () => {
    modeClass();
})

</script>


<style scoped>

.layout-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    color: #333;
    padding: 0 4em;
    max-width: 900px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
}

.container.post {
    height: 100%;
}

.container-header, .container-footer {
    flex: 0 0 auto;
}

.content-section {
    flex: 1;
}

.mode-dark .container {
    color: white;
}

@media screen and (max-width: 768px) {
    .container {
        margin: 0 auto;
        padding: 0 1em;
        border-radius: unset;
        height: 100%;
    }
}

a:hover {
    color: #532;
}

.mode-dark a:hover {
    color: orange;
}

</style>