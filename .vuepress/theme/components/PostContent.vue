<template>
    <section>
        <article class="article">
            <header>
                <h1 class="article-title">{{$page.title}}</h1>
                <div v-if="$frontmatter.layout" class="article-meta">
                    <span>Time: {{ postTime }}</span>
                    <span>Tags:
                        <router-link class="article-category"
                                     v-for="category in $frontmatter[$themeLocaleConfig.category]"
                                     :to="`${$localePath}category/${category}`">{{ category }}</router-link>
                    </span>
                </div>
            </header>
            <Content class="content"/>
            <div v-if="$frontmatter.layout" class="comments">
                <h3 id="Comments">
                    <span><a href="#Comments">Comments</a></span>
                    <span class="comments-tips">Please describe rationally</span>
                </h3>
                <Comment v-bind:language="$localeConfig.lang"/>
            </div>
        </article>

    </section>
</template>

<style>
    .article .article-meta {
        text-align: center;
        margin-bottom: 2rem;
        cursor: default;
    }

    .article .article-meta span {
        margin-right: 1rem;
    }

    .article .article-category {
        margin: 0 5px;
    }

    .article .article-category:hover {
        text-decoration: none;
    }

    .article .header-anchor {
        transition: all .4s cubic-bezier(0.5, 1.32, 0.55, 1.88);
        display: inline-block;
        visibility: hidden;
        color: transparent;
        transform: translateX(-0.3rem);
        width: 0;
        text-decoration: none;
    }

    /*.article h1:hover .header-anchor,*/
    .article h2:hover .header-anchor,
    .article h3:hover .header-anchor,
    .article h4:hover .header-anchor,
    .article h5:hover .header-anchor,
    .article h6:hover .header-anchor {
        transform: translateX(0rem);
        visibility: visible;
        color: inherit;
    }

    .article h1, .article h2, .article h3,
    .article h4, .article h5, .article h6 {
        font-weight: bold;
        line-height: 2rem;
        cursor: default;
        margin-top: 22px;
        margin-bottom: 11px;
    }

    .article h1 {
        background-image: linear-gradient(135deg, orange 0%, goldenrod 20%, orangered 60%, orange 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        text-align: center;
        font-size: 2rem;
        margin-bottom: 22px;
    }

    .article h1:hover {
        animation: gradient-move 1s infinite linear;
    }

    .article h1 .header-anchor {
        display: none;
    }

    .article h2 {
        text-align: center;
        font-size: 1.3rem;
    }

    .article h3 {
        font-size: 1.1rem;
    }

    .article h4 {
        font-size: 1rem;
    }

    .article h5 {
        font-size: .90rem;
    }

    .article h6 {
        font-size: .85rem;
    }

    .article blockquote, .article p, .article ul,
    .article ol, .article table, .article pre {
        margin: 10px 0;
        line-height: 1.6rem;
    }

    .article p {
        margin: 0 0 11px;
    }

    .article ul,
    .article ol {
        padding-left: 2rem;
    }

    .article hr {
        border: none;
        text-align: center;
    }

    .article hr::before {
        content: '🐟 🐟 🐟';
        display: inline-block;
        animation: swimming 5s infinite;
    }

    @keyframes swimming {
        0% {
            transform: translateX(-100px);
        }

        2% {
            transform: translateX(-100px) rotateY(180deg);
        }

        50% {
            transform: translateX(100px) rotateY(180deg);
        }

        52% {
            transform: translateX(100px);
        }

        100% {
            transform: translateX(-100px);
        }
    }

    .article a {
        color: orangered;
        text-decoration: none;
    }

    .mode-dark .article a {
        color: coral;
    }

    .article a:hover {
        color: orange;
        text-decoration: underline;
    }

    .article a.header-anchor:hover {
        text-decoration: none;
    }

    .article blockquote {
        padding: .5rem 1rem;
        color: #70747b;
        border-left: .25rem solid #848484;
    }

    .mode-dark .article blockquote {
        color: floralwhite;
        border-left: .25rem solid coral;
        background-color: rgba(0, 0, 0, .1);
    }

    .article blockquote > p {
        margin: 0;
    }

    .comments {
        margin-top: 2rem;
    }

    .comments h3 {
        display: flex;
        justify-content: space-between;
    }

    .comments a {
        color: black;
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
</style>


<script>
    import moment from 'moment'
    import {Comment} from '@vuepress/plugin-blog/lib/client/components'

    export default {
        name: 'PostContent',
        components: {
            Comment,
        },
        computed: {
            // 计算属性的 getter
            postTime: function () {
                // `this` 指向 vm 实例
                return moment(this.$frontmatter.date).format('YYYY-MM-DD')
            }
        }
    }
</script>
