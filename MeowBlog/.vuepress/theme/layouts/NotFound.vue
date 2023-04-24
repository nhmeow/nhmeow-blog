<template>
    <div class="void-box">
        <h1>404</h1>
        <p>Wow, you seem to have found a nullptr</p>
        <router-link to="/">Take me home.</router-link>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.void-box {
    margin: 20vh auto 0;
    width: 900px;
    text-align: center;
    cursor: default;
}

.mode-dark .void-box {
    color: white;
}

.void-box h1 {
    background-image: linear-gradient(135deg, purple 0%, red 10%, orange 25%, yellow 40%, green 55%, blue 70%, indigo 85%, red 100%);
    animation: gradient-move 1s infinite linear;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-align: center;
    font-size: 4rem;
}

.void-box p {
    word-break: break-word;
    margin: 2rem auto 1rem;
    font-size: 2rem;
}

.void-box a {
    color: orangered;
}

.void-box a:hover {
    color: orange;
    text-decoration: underline;
}


@media screen and (max-width: 768px) {
    .void-box {
        width: auto;
    }
}

</style>