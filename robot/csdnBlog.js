const request = require('request');
const cheerio = require('cheerio');

const prefix = 'https://blog.csdn.net/tujiaw/article/list/'

async function pr(url) {
  return new Promise((resolve, reject) => {
    request(url, function() {
      resolve();
    })
  })
}

async function csdnBlog() {
  let i = 0;
  while (++i) {
    const url = prefix + i;
    try {
      const postList = await getPage(url);
      for (const post of postList) {
        await pr(post)
      }
    } catch (err) {
      console.log(`error, url:${url}, err:${err}`);
    }

    if (i >= 19) {
      break;
    }
  }

  function getPage(url) {
    console.log('get page url:' + url);
    return new Promise((resolve, reject) => {
      request(url, function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          const result = []
          const $ = cheerio.load(body);
          $('#article_list').children().each(function(i, item) {
            const postUrl = $(this).find('.article_title .link_title a').attr('href');
            if (postUrl && postUrl.length) {
              result.push(postUrl);
            }
          })
          resolve(result);
        }
      })
    })
  }
}

module.exports = csdnBlog;