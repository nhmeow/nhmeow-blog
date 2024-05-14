<template>
    <section class="category">
        <router-link :to="`${routeLocale}category/`">
            <h1 class="category-key">
                {{ pageData.title }}
            </h1>
        </router-link>
        <ul class="category-box" v-if="pageData.title.startsWith('Categories')">
            <li v-for="({ items, path }, name) in categoryMap.map">
                <router-link :to="path">{{ `${name} (${items.length})` }}</router-link>
            </li>
        </ul>
        <PostList :items="categoryMap.currentItems"/>
    </section>
</template>


<script setup lang="ts">
import {usePageData, useRouteLocale} from "vuepress/client";
import {useBlogCategory} from '@vuepress/plugin-blog/client';
import PostList from "./PostList.vue";

const pageData = usePageData();
const categoryMap = useBlogCategory("category");
const routeLocale = useRouteLocale();

</script>


<style scoped>

.category h1 {
    background-image: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 22px;
    cursor: default;
}

.category h1.category-key {
    background-image: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 50%, rgba(252, 185, 0, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 22px;
    cursor: pointer;
    animation: gradient-move 1s infinite linear;
}

.category .category-box {
    width: 100%;
    padding: 2rem;
}

.category .category-box li {
    padding: .5rem 1.5rem;
    background-image: linear-gradient(135deg, orange 0%, goldenrod 20%, orangered 60%, orange 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
    transition: all .4s;
    float: left;
}

.category .category-box li:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
}

.mode-dark .category .category-box li:hover {
    box-shadow: none;
    animation: gradient-move 1s infinite linear;
}
</style>