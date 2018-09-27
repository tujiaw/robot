const { getTextJoke } = require('../utils/showapi')
const JokeController = require('../controller/joke')
const sleep = require('../utils/sleep')
const moment = require('moment')
const fs = require('fs')
const path = require('path')

const JOKE_CONFIG = path.join(__dirname, '../config/jokeConfig');
const WORK_INTERVAL = 3600 * 1000;

function currentDate() {
    return moment().format('YYYYMMDD');
}

function getConfig() {
    console.log(JOKE_CONFIG)
    const content = fs.readFileSync(JOKE_CONFIG, 'utf8')
    if (content) {
        return JSON.parse(content);
    }
    return {}
}

function saveConfig(index) {
    const content = JSON.stringify({
        date: currentDate(),
        index: index
    })
    fs.writeFileSync(JOKE_CONFIG, content, 'utf8')
}

module.exports = async function() {
    setInterval(async () => {
        const config = getConfig();
        if (config.date === currentDate()) {
            console.log('continue ' + currentDate())
            return
        }

        let index = config.index || 1;
        let result;
        try {
            do {
                console.log('get text joke, index:' + index)
                result = await getTextJoke(index);
                const { showapi_res_body } = result.data
                const { contentlist } = showapi_res_body
                contentlist.map((content) => {
                    JokeController.saveTextJoke(content)
                })
                await sleep(3000)
                ++index;
            } while (1)
        } catch (err) {
            console.error(err);
            console.log(result);
            saveConfig(index);
        }        
    }, WORK_INTERVAL);
}
