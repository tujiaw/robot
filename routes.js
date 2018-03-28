const Posts = require('./controller/posts')

module.exports = function(app, route) {
    app.use(route.get('/', Posts.getPosts))
}
