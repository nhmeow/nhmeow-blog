const {writeStream} = require('fs')
const {moment} = require('moment')

const [, , name, title] = process.argv

const date = moment().format('YYYY-MM-DD')

const filename = `${__dirname}/../posts/${date}-${name}.md`

const template = `---
title: ${title}
date: ${date}
category: 
---

## ${title}
`

writeStream(filename).write(template)
