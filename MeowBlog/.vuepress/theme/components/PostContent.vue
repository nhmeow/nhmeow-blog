<template>
    <section>
        <article class="article">
            <header>
                <h1 class="article-title">{{ pageData.title }}</h1>
                <div v-if="pageFrontmatter.showMeta !== false" class="article-meta">
                    <span>Time: {{ postTime }}</span>
                    <span>Category: <router-link class="article-category"
                                                 v-for="category in pageFrontmatter.category"
                                                 :to="`${routeLocale}category/${category}/`">{{
                            category
                        }}</router-link>
                </span>
                </div>
            </header>
            <Content class="content"/>
            <div v-if="pageFrontmatter.comments !== false" class="comments">
                <h3 id="comments">
                    <span><a href="#comments">Comments</a></span>
                    <span class="comments-tips">Please describe rationally</span>
                </h3>
                <CommentService :darkmode="mode === 'dark'"/>
            </div>
        </article>

    </section>
</template>


<script setup lang="ts">
import moment from 'moment'
import {computed, toRefs} from "vue";
import {usePageData, usePageFrontmatter, useRouteLocale} from "vuepress/client";

const pageFrontmatter = usePageFrontmatter();
const pageData = usePageData();
const routeLocale = useRouteLocale();

const props = defineProps({
    mode: {
        type: String,
        default: 'dark'
    }
});

const {mode} = toRefs(props);

const postTime = computed(() => {
    return moment(pageFrontmatter.value.date).format('YYYY-MM-DD')
})// 计算属性的 getter

</script>


<style scoped>
.comments {
    margin: 2rem 0 1rem;
}

.comments h3 {
    display: flex;
    justify-content: space-between;
}

.comments h3 a {
    font-weight: bold;
}

.comments a:hover {
    text-decoration: none;
}

.comments .comments-tips {
    color: gray;
    font-size: 1rem;
    font-weight: normal;
}

.mode-dark .comments .comments-tips {
    color: white;
}

.comments #vp-comment {
    max-width: none;
    margin: 0;
    padding: 0;
}

</style>