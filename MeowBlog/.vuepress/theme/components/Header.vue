<template>
    <header>
        <h1>
            <router-link :to="localePath">{{ siteLocaleData.title }}</router-link>
        </h1>
        <nav>
            <router-link :to="localeNextPath">{{ themeLocaleData.selectLanguageName }}</router-link>
            <a href="#" v-on:click="modeSwitch">{{ modeDisplay }}</a>
            <span v-if="themeLocaleData.navbar">
                <router-link v-for="nav in themeLocaleData.navbar" :to="`${localePath}${nav.link}`">
                    {{ nav.text }}
                </router-link>
            </span>
        </nav>
    </header>
</template>

<script setup lang="ts">
import {computed, onMounted, onUpdated, ref, toRefs} from 'vue';
import {usePagesData, pageData, useRouteLocale, useSiteLocaleData, usePageFrontmatter} from "@vuepress/client";
import {useThemeLocaleData} from "@vuepress/theme-default/lib/client/index";
import {useRouter} from "vue-router";

const themeLocaleData = useThemeLocaleData();
const pageFrontmatter = usePageFrontmatter();
const pagesData = usePagesData();
const siteLocaleData = useSiteLocaleData();
const routeLocale = useRouteLocale();
const router = useRouter();

const props = defineProps({
    mode: {
        type: String,
        default: 'dark'
    }
});

const {mode} = toRefs(props);


let localeConfig = ref([
    '/', '/zh/', '/ca/'
]);
let localeNext = ref('/zh/');

const modeDisplay = computed(() => {
    return themeLocaleData.value.themeColor[mode?.value];
})

const localeNextPath = computed(() => {
    let path = router.currentRoute.value.path.replace(localePath.value, '');
    if (path.startsWith('category')) {
        path = 'category';
    }
    return localeNext.value + path;
})

const localePath = computed(() => {
    return routeLocale.value;
})

const emit = defineEmits(['modeChange']);
const modeChange = (newMode: string) => {
    localStorage.setItem("meow-color-mode", newMode);
    emit('modeChange', newMode);
}

const modeSwitch = () => {
    let newMode: string;
    if (mode.value === 'dark') {
        newMode = 'light';
    } else {
        newMode = 'dark';
    }
    modeChange(newMode);
}

const refresh = () => {
    if (pageFrontmatter.value.home) {
        localeConfig.value = [
            '/', '/zh/', '/ca/'
        ];
    } else {
        localeConfig.value = [
            '/', '/zh/',
        ];
    }
    const nextIdx = localeConfig.value.indexOf(localePath.value) + 1
    localeNext.value = nextIdx >= 0 && nextIdx < localeConfig.value.length ? localeConfig.value[nextIdx] : localeConfig.value[0];
}

onMounted(() => {
    refresh()
    // read mode
    const localMode = localStorage.getItem("meow-color-mode");
    if (localMode) {
        modeChange(localMode);
    }
})

onUpdated(() => {
    refresh()
})
</script>


<style scoped>
header {
    padding: 3rem 0 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.532rem;
    font-weight: bolder;
}

header h1 {
    background-image: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-align: center;
    letter-spacing: 2px;
}

header h1:hover {
    background-image: linear-gradient(135deg, purple 0%, red 10%, orange 25%, yellow 40%, green 55%, blue 70%, indigo 85%, red 100%);
    animation: gradient-move 1s infinite linear;
}

header h1::after {
    content: ' 😺';
}

header a {
    font-weight: inherit;
}


header nav {
    font-size: 1rem;
    line-height: 2.2rem;
}

header nav a {
    padding: 0 .5rem;
}

@media screen and (max-width: 768px) {
    header {
        padding: 2rem 0 1rem;
        display: block;
        text-align: center;
    }

    nav {
        padding: .5rem 0 0;
    }
}
</style>