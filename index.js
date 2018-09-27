const path = require('path')
const logger = require('koa-logger')
const route = require('koa-route')
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const Koa = require('koa')
const cors = require('koa2-cors')
const robot = require('./robot')
const app = new Koa()

app.use(cors())
app.use(logger())
app.use(serve(path.join(__dirname, 'public')))
app.use(koaBody({
  multipart: true
}))
app.use(bodyParser({
  formLimit: '2mb'
}))

require('./routes')(app, route)

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})

robot.start();

