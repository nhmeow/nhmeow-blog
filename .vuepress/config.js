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
                        id: "tag",
                        keys: ['tag', 'tags', 'category'],
                        path: '/categories/',
                    },
                ],
                globalPagination: {
                    lengthPerPage: 8,
                },
            },
        ],
    ],
}