module.exports = {
    title: 'Barren Cat',
    description: 'Barren Cat Blog',
    plugins: [
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        id: 'post',
                        dirname: 'posts',
                        path: '/',
                    },

                ],
                frontmatters: [
                    {
                        id: "category",
                        keys: ['tag', 'tags', 'category', 'features', 'feature'],
                        path: '/category/',
                    },
                ],
                globalPagination: {
                    lengthPerPage: 8,
                },
            },
        ],
    ],
    postcss: {
        plugins: [
            // ...
            require('tailwindcss'),
            require('autoprefixer'),
            // ...
        ]
    }
}