import './theme/styles/vars.css'
import './theme/styles/tailwind.css'
import './theme/styles/index.styl'
import './theme/styles/article.styl'
import {defineClientConfig} from '@vuepress/client'
import Layout from './theme/layouts/Layout.vue'
import NotFound from './theme/layouts/NotFound.vue'

export default defineClientConfig({
    enhance({app, router, siteData}) {
    },
    setup() {

    },
    layouts: {Layout, NotFound},
    rootComponents: [],
})