<template>
    <section class="footer">
        <div>
            <router-link to="/about.html#copyright">&copy;2020 Barren Cat</router-link>
            ,
            <a href="https://vuepress.vuejs.org">Powered by VuePress.</a>
        </div>
        <div>
            <a href="/rss.xml">RSS</a>
        </div>
    </section>
</template>

<style scoped>
    .footer {
        padding: 1rem 0;
        margin: .5rem 0 0;
        display: flex;
        justify-content: space-between;
        font-size: .8rem;
        border-top: 1px solid gray;
    }

    .mode-dark .footer {
        border-top: 1px solid white;
    }

    .footer a {
        color: gray;
        text-decoration: none;
    }

    .mode-dark .footer a {
        color: floralwhite;
    }

    .footer a:hover {
        color: orange;
    }
</style>

<script>
    export default {
        name: 'Footer',
    }
</script>
