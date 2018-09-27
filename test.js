const moment = require('moment')
const fs = require('fs')

const JOKE_CONFIG = './config/jokeConfig'

function getConfig() {
    const content = fs.readFileSync(JOKE_CONFIG, 'utf8')
    if (content) {
        return JSON.parse(content);
    }
    return {}
}

function saveConfig(index) {
    const content = JSON.stringify({
        date: moment().format('YYYYMMDD'),
        index: index
    })
    fs.writeFileSync(JOKE_CONFIG, content, 'utf8')
}

console.log(getConfig())