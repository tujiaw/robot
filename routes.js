const Joke = require('./controller/joke')

module.exports = function(app, route) {
    app.use(route.get('/getTextJoke', Joke.getTextJoke))
}
