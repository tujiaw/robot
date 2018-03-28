const request = require('request');
const cheerio = require('cheerio');

function csdn() {
  return new Promise((resolve, reject) => {
    request('http://www.csdn.net', function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        const result = [];
        const $ = cheerio.load(body);
        $('#feedlist_id').children().each(function(i, item) {
          const tag = $(this).find('dl.list_userbar>dd.tag>a')
          const title = $(this).find('.title>h2>a');
          const read = $(this).find('.read_num>.num');
          const post = {
            tag: tag.text().trim(),
            title: title.text().trim(),
            href: title.attr('href'),
            read: read.text()
          }
          if (post.tag.length && post.title.length && post.href && post.href.length) {
            result.push(post);
          }
        })
        resolve(result);
      }
    });
  })
}

module.exports = csdn;