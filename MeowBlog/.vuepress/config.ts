import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics"
import {themeDataPlugin} from "@vuepress/plugin-theme-data"
import anchor from "markdown-it-anchor"
import {feedPlugin} from "@vuepress/plugin-feed"
import {blogPlugin} from '@vuepress/plugin-blog'

export default defineUserConfig({
    title: 'Barren Cat',
    description: 'Barren Cat\'s Blog',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }],
        ['meta', {name: 'keywords', content: 'BarrenCat,南荒喵,南荒,Blog,博客,vtuber,vup,虚拟偶像,二次元,纸片人'}],
        ['meta', {name: 'theme-color', content: 'orange'}],
    ],
    bundler: viteBundler(),
    theme: defaultTheme(),
    plugins: [
        googleAnalyticsPlugin({
            id: 'G-Q5DCEP3J9T'
        }),
        themeDataPlugin({
            themeData: {
                locales: {
                    '/': {
                        selectLanguageName: 'English',
                        themeColor: {
                            light: 'Light',
                            dark: 'Dark',
                        },
                        navbar: [
                            {text: 'About', link: 'about'},
                            {text: 'Posts', link: 'posts/'},
                            {text: 'Build', link: 'build'},
                        ],
                        category: 'category',
                    },
                    '/zh/': {
                        selectLanguageName: '中文',
                        themeColor: {
                            light: '明亮',
                            dark: '暗黑',
                        },
                        navbar: [
                            {text: '关于', link: 'about'},
                            {text: '博文', link: 'posts/'},
                            {text: '人设', link: 'build'},
                        ],
                        category: 'category_zh',
                    },
                    '/ca/': {
                        selectLanguageName: 'CATALÀ',
                        themeColor: {
                            light: 'Llum',
                            dark: 'Fosc',
                        },
                    }
                },
            }
        }),
        feedPlugin({
            hostname: 'https://barren.cat',
            rss: true
        }),
        blogPlugin({
            // only files under posts are articles
            filter: ({filePathRelative, pathLocale}) => {
                return filePathRelative ? `/${filePathRelative}`.startsWith(`${pathLocale}posts/`) : false;
            },

            // getting article info
            getInfo: ({frontmatter, title, data}) => ({
                title,
                author: frontmatter.author || "",
                date: frontmatter.date || null,
                category: frontmatter.category || [],
                tag: frontmatter.tag || [],
                excerpt:
                // support manually set excerpt through frontmatter
                    typeof frontmatter.excerpt === "string"
                        ? frontmatter.excerpt
                        : data?.excerpt || "",
            }),

            // generate excerpt for all pages excerpt those users choose to disable
            excerptFilter: ({frontmatter}) =>
                !frontmatter.home &&
                frontmatter.excerpt !== false &&
                typeof frontmatter.excerpt !== 'string',

            category: [
                {
                    key: "category",
                    getter: (page) => <string[]>page.frontmatter.category || [],
                    layout: "Layout",
                    itemLayout: "Layout",
                    itemFrontmatter: (name) => ({
                        title: `Category: ${name}`,
                        categoriesLayout: true
                    }),
                    frontmatter: () => ({
                        title: "Categories",
                        categoriesLayout: true
                    }),
                },
            ],

            type: [
                {
                    key: "posts",
                    // only article with date should be added to posts
                    filter: (page) => page.frontmatter.date instanceof Date,
                    // sort pages with time
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date as Date).getTime() -
                        new Date(pageA.frontmatter.date as Date).getTime(),
                    path: "/posts/",
                    layout: "Layout",
                    frontmatter: () => ({
                        title: "Posts", postsLayout: true
                    }),
                },
            ],
        }),
    ],
    markdown: {
        anchor: {
            permalink: anchor.permalink.ariaHidden({
                symbol: '🍊',
                space: true,
                placement: 'after'
            })
        }
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Barren Cat',
            description: 'Barren Cat Blog, A vtuber’s daily life, it’s okay to be anime, painting, and ideas',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '南荒喵',
            description: '南荒喵的博客，一个虚拟偶像的日常，没事会水水动漫，作画，以及想法',
        },
        '/ca/': {
            lang: 'ca',
            title: 'Gat Estèril',
            description: 'Blog Gat Estèril',
        },
    },
    permalinkPattern: ":year/:month/:day/:slug/",
})
