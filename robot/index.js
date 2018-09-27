const csdn = require('./csdn')
const jobbole = require('./jobbole')
const csdnBlog = require('./csdnBlog')
const textJoke = require('./textJoke')

module.exports = {
  start: async function () {
    // console.log('--------csdn--------');
    // const csdnResult = await csdn();
    // console.log(csdnResult);
    
    // console.log('--------joboole--------');
    // const jobboleResult = await jobbole();
    // console.log(jobboleResult);

    // console.log('-----------csdn blog-------------');
    // csdnBlog();

    console.log('-----------text joke-------------');
    textJoke();
  }
}
