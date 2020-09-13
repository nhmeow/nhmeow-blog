<template>
    <section class="post-box">
        <h1 v-if="currentCategory" class="category-key">
            {{`Category: ${currentCategory.key}`}}
        </h1>
        <div class="post" v-for="page in getPages()">
            <div class="post-header">
                <router-link class="post-title" :to="`${page.path}`">
                    {{ page.frontmatter.title }}
                </router-link>
                <router-link class="post-time" :to="`${page.path}`">
                    {{ new Date(page.frontmatter.date).toLocaleDateString() }}
                </router-link>
            </div>
            <div class="post-content" v-html="page.excerpt"></div>
            <div class="post-footer">
                <span>
                    <router-link class="post-link" :to="`${page.path}`">Reading more</router-link>
                </span>
                <span>
                    <router-link class="post-category"
                                 v-for="category in page.frontmatter[$themeLocaleConfig.category]"
                                 :to="`${$localePath}category/${category}`">
                        {{ category }}
                    </router-link>
                </span>
            </div>
        </div>
        <div class="post-pagination" v-if="$pagination._paginationPages.length>1">
            <router-link class="pagination-prev" :to="`${$pagination.prevLink}`" v-if="$pagination.hasPrev">
                <<
            </router-link>
            <router-link v-bind:class="[$pagination.paginationIndex===idx?'current-page':'']" :to="`${page.path}`"
                         v-for="(page,idx) in $pagination._paginationPages">
                {{idx+1}}
            </router-link>
            <router-link class="pagination-next" :to="`${$pagination.nextLink}`" v-if="$pagination.hasNext">
                >>
            </router-link>
        </div>
    </section>
</template>

<style scoped>

    .post-box {
        padding-bottom: 24px;
    }

    .category-key {
        background-image: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 50%, rgba(252, 185, 0, 1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 22px;
        cursor: default;
        animation: gradient-move 1s infinite linear;
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


<script>
    export default {
        name: 'PostList',
        mounted() {
        },
        computed: {
            currentCategory() {
                return this['$current' + this.$themeLocaleConfig.category.replace(/^\S/, s => s.toUpperCase())]
            }
        },
        methods: {
            getPages: function () {
                if (this.currentCategory) {
                    return this.currentCategory.pages;
                }
                return this.$pagination.pages;
            }
        },
    }
</script>
