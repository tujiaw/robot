const request = require('request');
const cheerio = require('cheerio');

function jobbole() {
  return new Promise((resolve, reject) => {
    request('http://blog.jobbole.com/all-posts/', function (error, response, body) {
        if (error) {
          reject(error);
        } else {
          const result = []
          const $ = cheerio.load(body);
          $('#archive').children().each(function(i, item) {
            const meta = $(this).find('.post-meta')
            const post = {
              tag: meta.find('p>a[rel="category tag"]').text().trim(),
              title: meta.find('p>a.archive-title').attr('title')
            }

            if (tag && tag.length && title && title.length) {
              result.push(post)
            }
          })
          resolve(result);
        }
      })
    })
  }

  module.exports = jobbole;