module.exports = {
    title: 'Barren Cat',
    description: 'Barren Cat Blog',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['meta', {name: 'keywords', content: 'BarrenCat,南荒喵,南荒,Blog,博客'}]
    ],
    plugins: [
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        id: 'post',
                        dirname: 'posts',
                        path: '/posts/',
                    },
                    {
                        id: 'post_zh',
                        dirname: 'zh/posts',
                        path: '/zh/posts/',
                    },
                ],
                frontmatters: [
                    {
                        id: "category",
                        keys: ['category'],
                        path: '/category/',
                    },
                    {
                        id: "category_zh",
                        keys: ['category_zh'],
                        path: '/zh/category/',
                    },
                ],
                globalPagination: {
                    lengthPerPage: 8,
                },
                feed: {
                    canonical_base: 'https://barren.cat',
                },
                comment: {
                    // Which service you'd like to use
                    service: 'disqus',
                    // The owner's name of repository to store the issues and comments.
                    shortname: 'nhmeow',
                },
            },
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-176049039-1'
            },
        ],
        [
            '@vuepress/nprogress', {}
        ],
    ],
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    },
    markdown: {
        anchor: {permalink: true, permalinkBefore: false, permalinkSymbol: '🍊'}
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Barren Cat',
            description: 'Barren Cat Blog'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '南荒喵',
            description: '南荒喵的博客'
        },
        '/ca/': {
            lang: 'ca',
            title: 'Gat Estèril',
            description: 'Blog Gat Estèril'
        },
    },
    themeConfig: {
        locales: {
            '/': {
                language: 'English',
                themeColor: {
                    light: 'Light',
                    dark: 'Dark',
                },
                nav: {
                    about: 'About',
                    posts: 'Posts',
                    build: 'Build',
                },
                category: 'category',
            },
            '/zh/': {
                language: '中文',
                themeColor: {
                    light: '明亮',
                    dark: '暗黑',
                },
                nav: {
                    about: '关于',
                    posts: '博文',
                    build: '人设',
                },
                category: 'category_zh',
            },
            '/ca/': {
                language: 'CATALÀ',
                themeColor: {
                    light: 'Llum',
                    dark: 'Fosc',
                },
            },
        },
    },
}
