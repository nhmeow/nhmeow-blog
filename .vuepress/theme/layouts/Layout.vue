<template>
    <div v-bind:class="['container',max?'container-max':'','mode-'+mode]">
        <Header class="container-header"/>

        <section class="content-section">
            <CategoryList v-if="$frontmatterKey"/>
            <PostList v-else-if="$pagination"/>
            <PostContent v-else/>
        </section>

        <Footer class="container-footer"/>
    </div>
</template>

<style>
    .container {
        color: #333;
        padding: 0 4em;
        margin: 10vh auto;
        max-width: 900px;
        background-color: white;
        border-radius: 5px;
    }

    .container.mode-light {

    }

    .container.mode-dark {
        color: white;
        background-color: transparent;
    }

    .content-section {
        min-height: 50vh;
    }

    @media screen and (max-width: 768px) {
        .container {
            margin: 0 auto;
            padding: 0 1em;
            border-radius: unset;
            min-height: 100vh;
        }

        .content-section {
            min-height: 75vh;
        }

    }

    .container.container-max {
        border-radius: unset;
        margin: 0 auto;
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
        animation: home 1s forwards;
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
        }
    }
</style>

<script>
    import CategoryList from '../components/CategoryList.vue'
    import PostList from '../components/PostList.vue'
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import PostContent from '../components/PostContent.vue'

    export default {
        name: 'Layout',
        components: {
            CategoryList,
            PostList,
            Header,
            Footer,
            PostContent,
        },
        data() {
            return {
                max: false,
                mode: 'dark'
            }
        },
        mounted() {
            this.max = this.$el.offsetHeight > window.screen.height
        },
        updated() {
            this.max = this.$el.offsetHeight > window.screen.height
        }
    }
</script>
