<template>
    <header>
        <h1>
            <router-link :to="`${$localePath}`">{{ $siteTitle }}</router-link>
        </h1>
        <nav>
            <router-link :to="`${localeNextPath}`">
                {{$themeLocaleConfig.language}}
            </router-link>
            <a href="#" v-on:click="mode">{{modeDisplay}}</a>
            <span v-if="$themeLocaleConfig.nav">
                <router-link :to="`${$localePath}about`">{{$themeLocaleConfig.nav.about}}</router-link>
                <router-link :to="`${$localePath}posts`">{{$themeLocaleConfig.nav.posts}}</router-link>
                <router-link :to="`${$localePath}build`">{{$themeLocaleConfig.nav.build}}</router-link>
            </span>
        </nav>
    </header>
</template>

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

<script>
    export default {
        name: 'Header',
        data() {
            return {
                localeConfig: [
                    '/', '/zh/', '/ca/'
                ],
                localeNext: '/zh/'
            }
        },
        computed: {
            modeDisplay() {
                return this.$themeLocaleConfig.themeColor[this.$parent.mode]
            },
            localeNextPath() {
                let path = this.$page.regularPath.replace(this.$localePath, '');
                if (path.startsWith('category')) {
                    path = 'category';
                }
                return this.localeNext + path;
            }
        },
        methods: {
            mode() {
                if (this.$parent.mode === 'light') {
                    this.$parent.mode = 'dark'
                } else {
                    this.$parent.mode = 'light'
                }
            },
            refresh() {
                if (this.$localePath === this.$page.regularPath) {
                    this.localeConfig = [
                        '/', '/zh/', '/ca/'
                    ];
                } else {
                    this.localeConfig = [
                        '/', '/zh/',
                    ];
                }
                const nextIdx = this.localeConfig.indexOf(this.$localePath) + 1
                this.localeNext = nextIdx >= 0 && nextIdx < this.localeConfig.length ? this.localeConfig[nextIdx] : this.localeConfig[0];
            }
        },
        mounted() {
            this.refresh()
        },
        updated() {
            this.refresh()
        }
    }
</script>
