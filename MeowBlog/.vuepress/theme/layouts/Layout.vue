<template>
    <div class="layout-box">
        <section class="container">
            <Header :mode="mode" @mode-change="modeChange" class="container-header"/>

            <section class="content-section">
                <Categories v-if="pageFrontmatter.categoriesLayout"/>
                <Posts v-else-if="pageFrontmatter.postsLayout"/>
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


<style>

.layout-box {
    min-height: 100vh;
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
        min-height: 100vh;
    }
}

a:hover {
    color: #532;
}

.mode-dark a:hover {
    color: orange;
}

/* Home Page Style */
.container .home-content {
    width: 100%;
    margin: 8rem 0 0;
    text-align: center;
    font-size: 2rem;
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