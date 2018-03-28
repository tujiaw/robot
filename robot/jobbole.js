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
            const title = meta.find('p>a.archive-title')
            const post = {
              tag: meta.find('p>a[rel="category tag"]').text().trim(),
              title: title.attr('title'),
              href: title.attr('href')
            }
            if (post.tag && post.tag.length && post.title && post.title.length) {
              result.push(post)
            }
          })
          resolve(result);
        }
      })
    })
  }

  module.exports = jobbole;