<template>
    <section class="category">
        <h1>Category</h1>
        <ul class="category-box">
            <li v-for="category in $frontmatterKey.list">
                <router-link :to="category.path">{{`${category.name} (${category.pages.length})`}}</router-link>
            </li>
        </ul>
    </section>
</template>

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

    .category .category-box {
        width: 100%;
        padding: 2rem;
        display: flex;
        justify-content: space-around;
    }

    .category .category-box li {
        padding: .5rem 2rem;
        background-image: linear-gradient(135deg, orange 0%, goldenrod 20%, orangered 60%, orange 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        border-radius: 5px;
        color: white;
        font-size: 1.5rem;
        transition: all .4s;
    }

    .category .category-box li:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
    }

    .mode-dark .category .category-box li:hover {
        box-shadow: none;
        animation: gradient-move 1s infinite linear;
    }

</style>


<script>
    export default {
        name: 'CategoryList',
        mounted() {
        }
    }
</script>
