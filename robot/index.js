const csdn = require('./csdn')
const jobbole = require('./jobbole')

module.exports = {
  start: function () {
    csdn().then(list => {
      console.log(list)
    })
    
    jobbole().then(list => {
      console.log(list)
    })
  }
}