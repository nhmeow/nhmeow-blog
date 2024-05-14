<template>
    <section class="post-box">
        <div class="post" v-for="page in items">
            <div class="post-header">
                <router-link class="post-title" :to="`${page.path}`">
                    {{ page.info.title }}
                </router-link>
                <router-link class="post-time" :to="`${page.path}`">
                    {{ new Date(page.info.date as Date).toLocaleDateString() }}
                </router-link>
            </div>
            <div class="post-content" v-html="page.info.excerpt"></div>
            <div class="post-footer">
                <span>
                  <router-link class="post-link" :to="`${page.path}`">Reading more</router-link>
                </span>
                <span>
                  <router-link class="post-category"
                               v-for="category in page.info.category"
                               :to="`${routeLocale}category/${category}/`">
                      {{ category }}
                  </router-link>
                </span>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">

import {useRouteLocale} from "vuepress/client";

const routeLocale = useRouteLocale();

const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});

</script>


<style scoped>

.post-box {
    padding-bottom: 24px;
}

.post {
    padding: 1.5rem 1rem;
}

.post::after {
    text-align: center;
}

.post-header, .post-footer {
    display: flex;
    justify-content: space-between;
}

.post-header {
    font-size: 1.5rem;
    line-height: 2rem;
}

.post-header a {
    font-weight: bold;
}

.post-title:hover {
    background-image: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
}

.post-time {
    font-size: 1rem;
}

.post-content {
    padding: 1rem;
    word-break: break-word;
}

.post-footer span:first-child {
    min-width: max-content;
}

.post-link {
    font-size: 1.1rem;
    font-weight: bold;
    background-image: linear-gradient(135deg, orange 0%, goldenrod 20%, orangered 60%, orange 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
}

.post-link:hover {
    animation: gradient-move .8s infinite linear;
}

.post-category {
    font-size: .9rem;
    color: orange;
    padding-left: 0.5rem;
    float: right;
}

.post-pagination {
    text-align: center;
}

.post-pagination a {
    display: inline-block;
    color: orangered;
    line-height: 2rem;
    font-size: 1.3rem;
    padding: .5rem;
}

.post-pagination a:hover {
    color: orange;
}

.post-pagination a.current-page {
    cursor: default;
    color: transparent;
}

.post-pagination a.current-page::before {
    content: '🍊';
    display: inline-block;
    width: 0;
    color: black;
}

.post-pagination .pagination-prev:hover {
    animation: pagination-move-prev 1s infinite;
}

.post-pagination .pagination-next:hover {
    animation: pagination-move-next 1s infinite;
}

@keyframes pagination-move-prev {
    0% {
        transform: translateX(0);
    }
    70% {
        transform: translateX(-.2rem);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes pagination-move-next {
    0% {
        transform: translateX(0);
    }
    70% {
        transform: translateX(.2rem);
    }
    100% {
        transform: translateX(0);
    }
}

</style>