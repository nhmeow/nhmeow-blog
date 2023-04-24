import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
    plugins: [
        tailwind({
            content: ['./MeowBlog/.vuepress/theme/**/*.vue'],
        }),
        autoprefixer,
    ]
}