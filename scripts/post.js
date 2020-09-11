const readline = require('readline')
const fs = require('fs')
const moment = require('moment')

function read(query) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question(query, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

function newPost(name, title, locale) {
    name = name || 'NewPost'
    title = title || name
    locale = locale || ''
    const date = moment().format('YYYY-MM-DD')
    const localeDir = locale === '' ? '/' : `/${locale}/`
    const localeTag = locale === '' ? '' : `_${locale}`
    const filename = `${__dirname}/..${localeDir}posts/${date}-${name.replace(' ', '-')}.md`
    const template = `---
title: ${title}
date: ${date}
category${localeTag}: 
---

> TODO: Under construction
`
    if (fs.existsSync(filename)) {
        console.log(`file name '${filename}' is exists`)
        return false
    }
    fs.createWriteStream(filename).write(template);
    return true
}

read('Post Name: ').then((name) => {
    read('Post Title (Optional): ').then((title) => {
        if (newPost(name, title) && newPost(name, title, 'zh'))
            console.log('Okay, well done.')
        else
            console.log('Oops, something went wrong.')
    })
})
